import React, { useState, useEffect } from 'react';
import Article from '../Article';
import Loading from '../Loading';
const axios = require('axios');

const ArticlePage = () => {

    const [article, setArticle] = useState({});
    const [load, setLoad] = useState(false);

    useEffect(() => {
        axios.get("/api/blogs/7oihrLo4pnRmbVRw89q5My")
            .then(response => {
                setArticle(response.data);
                setLoad(true);
            })
    }, []);

    if (load) {
        return (
            <div>
                <Article
                    key={article.sys.id}
                    image="https://picsum.photos/id/1073/100/100"
                    title={article.fields.title}
                    body={article.fields.body}
                    author={article.fields.author.fields.name}
                    handleFavorite="Function"
                />
            </div>
        );
    }
    else {
        return (
            <div>
                <Loading />
            </div>
        )
    }

}

export default ArticlePage;