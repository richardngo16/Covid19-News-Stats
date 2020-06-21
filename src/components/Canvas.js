import React from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedCountryStore, canvasNewsStore } from '../stores/Store'
import { ENDPOINT } from '../utils/constants'
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

function Canvas() {
    const country = useRecoilValue(selectedCountryStore)
    const canvasNews = useRecoilValue(canvasNewsStore)
    const setCanvasNews = useSetRecoilState(canvasNewsStore)
    const displayCovidImage = (country) => {
        return (<React.Fragment>
            {!country && <img alt="global_og_image" src={ENDPOINT.GLOBAL} />}
            {country && <img alt="og_image" src={`${ENDPOINT.COUNTRIES}/${country.value}/og`} />}
        </React.Fragment>)
    }
    const displayNewsIframe = (newsLink) => {
        return (
            <React.Fragment>
                <Alert severity="info" action={           <Button onClick={(e) => {
                        setCanvasNews(undefined)
                    }}>Close</Button>}> You are in an iframe! Close it to go back
         
                </Alert>
                <iframe height={'100%'} width={'100%'} title={'news iframe'} src={newsLink} />
            </React.Fragment>
        )
    }
    return (
        <div style={{ width: '100%', height: '100%' }}>
            {!canvasNews && displayCovidImage(country)}
            {canvasNews && displayNewsIframe(canvasNews)}
        </div>

    )
}

export default Canvas