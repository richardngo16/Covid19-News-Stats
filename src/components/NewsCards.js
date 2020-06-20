import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

function NewsCards(props) {
    const { news } = props
    return (
        <div>
            <h1>News Articles</h1>

            {news.length !== 0 && news.map((item) => {
                return (<div>
                    <Card>
                        <CardActionArea onClick={
                            (e) => {
                                window.location.href = item.url
                            }
                        }>
                            <CardMedia style={{ height: '150px' }} image={item.urlToImage} />
                            <CardContent>
                                <h3>
                                    {item.title}
                                </h3>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </div>)
            })
            }
            {news.length === 0 && <div> Sorry No News Available!</div>}
        </div>
    )
}

export default NewsCards
