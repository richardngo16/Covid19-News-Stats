import React, { useEffect, useState } from "react";
import { useRecoilValue } from 'recoil';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { selectedCountryStore } from '../stores/Store'
import { ENDPOINT } from '../utils/constants'
import NewsCards from './NewsCards'
const drawerWidth = '300px'
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    }
}));

function LeftDrawer() {
    const classes = useStyles()
    const country = useRecoilValue(selectedCountryStore)
    const [news, setNews] = useState([])
    useEffect(() => {
        const fetchNewsData = async () => {
            if (country) {
                const response = await fetch(`${ENDPOINT.NEWS}&country=${country.value.toLowerCase()}`)
                const data = await response.json()
                setNews(data.articles)
            } else {
                const response = await fetch(`${ENDPOINT.NEWS}`)
                const data = await response.json()
                setNews(data.articles)
            }
        }
        fetchNewsData()
    }, [country])
    return (
        <React.Fragment>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <NewsCards news={news} />
            </Drawer>
        </React.Fragment>
    )
}

export default LeftDrawer