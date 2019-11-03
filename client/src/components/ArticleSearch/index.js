import React, { useState, useEffect } from 'react';
import Article from '../Article';
import Loading from '../Loading';
import './Articlesearch.css';
const axios = require('axios');



const ArticleSearch = () => {

    const [articles, setArticle] = useState([]);
    const [load, setLoad] = useState(false);
    const [subject, setSubject] = useState("general");
    useEffect(() => {
        axios.get("/api/blogs").then(response => {
            setArticle(response.data.items);
            setLoad(true);
        })
    }, []);
const handleChange = (e) => {
    setSubject(e.currentTarget.textContent.toLowerCase())
}
    if (load) {
        return (
            <div>
                <form>
                    <div className="search-box">
                        <div className="dropdown">
                            <ul className="nav nav-pills nav-fill">
                                <li className="nav-item dropdown">
                                    <button id="dropDownButton" className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">Popular</button>
                                    <div className="dropdown-menu" >
                                        <a id="dd1" className="dropdown-item" onClick = {
                                            handleChange
                                        } >JavaScript</a>
                                        <a id="dd2" className="dropdown-item" onClick = {
                                            handleChange
                                        }>HTML</a>
                                        <a id="dd3" className="dropdown-item" onClick = {
                                            handleChange
                                        }>CSS</a>
                                        <a id="dd4" className="dropdown-item" onClick = {
                                            handleChange
                                        }>PHP</a>
                                        <a id="dd5" className="dropdown-item" onClick = {
                                            handleChange
                                        }>React</a>
                                        <a id="dd6" className="dropdown-item" onClick = {
                                            handleChange
                                        }>Bootstrap</a>
                                        <a id="dd7" className="dropdown-item" onClick = {
                                            handleChange
                                        }>Laravel</a>
                                        <a id="dd8" className="dropdown-item" onClick = {
                                            handleChange
                                        }>Express</a>
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
                    articles.map((article, index) => {
                        if (
                            article.fields.tags.indexOf(subject)!=-1
                        ) { return (
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
                        )
                        }
                        
                })
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