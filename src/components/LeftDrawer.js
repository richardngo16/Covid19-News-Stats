import React from "react";
import { useRecoilValue } from 'recoil';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { selectedCountryStore } from '../stores/Store'
const drawerWidth = '240px'
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth
    }
}));

function LeftDrawer() {
    const classes = useStyles()
    const country = useRecoilValue(selectedCountryStore)
    return (
        <React.Fragment>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{
                    paper: classes.drawerPaper,
                }}>
                {country && <div> {country.label} </div>}
            </Drawer>
        </React.Fragment>
    )
}

export default LeftDrawer