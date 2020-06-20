import React from "react";

function NewsCards(props) {
    const { news } = props
    return (
        <div>
            <h1>News Articles</h1>
            {news.length !== 0 && news.map((item) => {
                return (<div>
                    <h3>
                        <a href={item.url}>{item.title}</a>
                    </h3>
                </div>)
            })
            }
            {news.length === 0 && <div> Sorry No News Available!</div>}
        </div>
    )
}

export default NewsCards
