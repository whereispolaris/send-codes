import React, { useState, useEffect } from 'react';
import Article from '../Article';
import Loading from '../Loading';
import './Articlesearch.css';
const axios = require('axios');



const ArticleSearch = () => {

    const [articles, setArticle] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        axios.get("/api/blogs").then(response => {
            setArticle(response.data.items);
            setLoad(true);
        })
    }, []);

    if (load) {
        return (
            <div>
                <form>
                    <div className="search-box">
                        <div className="dropdown">
                            <ul className="nav nav-pills nav-fill">
                                <li className="nav-item dropdown">
                                    <button id="dropDownButton" className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">Popular</button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="/">JavaScript</a>
                                        <a className="dropdown-item" href="/">HTML</a>
                                        <a className="dropdown-item" href="/">CSS</a>
                                        <a className="dropdown-item" href="/">PHP</a>
                                        <a className="dropdown-item" href="/">React</a>
                                        <a className="dropdown-item" href="/">Bootstrap</a>
                                        <a className="dropdown-item" href="/">Laravel</a>
                                        <a className="dropdown-item" href="/">Express</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="textbox">
                            <input type="text" name="search" placeholder="Search" autoComplete="off" className="auto-expand" />
                            <button className="search-button">Enter</button>
                        </div>
                    </div>
                </form>
                {
                    articles.map((article, index) => (
                        <Article
                            key={article.sys.id}
                            // image="https://picsum.photos/id/1073/100/100"
                            title={article.fields.title}
                            body={article.fields.body}
                            author={article.fields.author.fields.name}
                            // handleFavorite="Function"
                            // isSaved="Function"
                            articleLink="https://picsum.photos/id/1073/100/100"
                        />
                    ))
                }
            </div>
        )
    }
    else {
        return (
            <div>
                <Loading/>
            </div>
        )
    }
}

export default ArticleSearch;   