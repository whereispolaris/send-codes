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
    e.preventDefault();
    setSubject(e.currentTarget.textContent.toLowerCase())
}
const onChange = (e) => {
    e.preventDefault();
    // setState({ search: e.target.value});
};

// class App extends Component {
//     state = {
//         search: ""
//     };
// }
// render() {
//     const { search } = this.State;
//     const filteredArticles = articlesList.filter(article => {
//         return article.name.toLowerCase().indexOf(search.toLowerCase()) !==-1;
//     });

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
                                        <button id="dd1" className="dropdown-item" onClick = {
                                            handleChange
                                        } >JavaScript</button>
                                        <button id="dd2" className="dropdown-item" onClick = {
                                            handleChange
                                        }>HTML</button>
                                        <button id="dd3" className="dropdown-item" onClick = {
                                            handleChange
                                        }>CSS</button>
                                        <button id="dd4" className="dropdown-item" onClick = {
                                            handleChange
                                        }>PHP</button>
                                        <button id="dd5" className="dropdown-item" onClick = {
                                            handleChange
                                        }>React</button>
                                        <button id="dd6" className="dropdown-item" onClick = {
                                            handleChange
                                        }>Bootstrap</button>
                                        <button id="dd7" className="dropdown-item" onClick = {
                                            handleChange
                                        }>Laravel</button>
                                        <button id="dd8" className="dropdown-item" onClick = {
                                            handleChange
                                        }>Express</button>
                                        {/* <button id="dd9" className="dropdown-item" onClick = {
                                            handleChange
                                        }>MySQL</button> */}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="textbox">
                            <input type="text" name="search" placeholder="Search" autoComplete="off" className="auto-expand"/>
                            <button className="search-button">Enter</button>
                        </div>
                    </div>
                </form>
            {/* <div className="row">
              {filteredCountries.map(country => {
                return this.renderCountry(country);
            })}
            </div> */}
                
                {
                    articles.map((article, index) => {
                        if (
                            article.fields.tags.indexOf(subject)!=-1
                        ) { return (
                    <Article
                            key={article.sys.id}
                            title={article.fields.title}
                            body={article.fields.body}
                            author={article.fields.author.fields.name}
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