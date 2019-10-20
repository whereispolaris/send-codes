import React, { Component } from 'react';
import Article from '../Article';
const axios = require('axios');

class ArticleSearch extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get("/api/articles").then(response => {
            this.setState({ results: response.data.items })
            console.log(this.state.results[0].fields.title)
            console.log(this.state.results[0].fields.body)
        })
    }

    render() {
        return (
            <div>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Language</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">JavaScript</a>
                            <a className="dropdown-item" href="#">HTML</a>
                            <a className="dropdown-item" href="#">CSS</a>
                            <a className="dropdown-item" href="#">PHP</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Topic</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">React</a>
                            <a className="dropdown-item" href="#">Bootstrap</a>
                            <a className="dropdown-item" href="#">Laravel</a>
                            <a className="dropdown-item" href="#">Express</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Results</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">5</a>
                            <a className="dropdown-item" href="#">10</a>
                            <a className="dropdown-item" href="#">20</a>
                            <a className="dropdown-item" href="#">100</a>
                        </div>
                    </li>
                </ul>
                {/* {
                // Map Articles here
            } */}
                <Article
                    image="https://picsum.photos/id/1073/100/100"
                    title="JavaScript Variables"
                    author="Santiago Enciso"
                    handleFavorite="Function"
                    isSaved="Function"
                    articleLink="Link"
                />
                <Article
                    image="https://picsum.photos/id/1073/100/100"
                    title="Laravel Installation"
                    author="Santiago Enciso"
                    handleFavorite="Function"
                    isSaved="Function"
                    articleLink="Link"
                />
            </div>
        )
    }
}

export default ArticleSearch;   