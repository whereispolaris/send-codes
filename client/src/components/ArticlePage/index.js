import React, { Component } from 'react';
import Article from '../Article';
const axios = require('axios');

class ArticlePage extends Component {

    state = {
        testArticleID: "7oihrLo4pnRmbVRw89q5My",
        article: {}
    }

    componentDidMount() {
        axios.get("/api/blogs/" + this.state.testArticleID).then(response => {
            this.setState({ article: response.data });
            console.log(this.state.article);
        })
    }


    render() {
        return (
            <div>
                <h3>Article Page</h3>
                <p> JavaScript is more fun with React!</p>
                <Article
                // key={article.sys.id}
                // image="https://picsum.photos/id/1073/100/100"
                // title={article.fields.title}
                // body={article.fields.body}
                // author={article.fields.author.fields.name}
                // // handleFavorite="Function"
                // // isSaved="Function"
                // articleLink="https://picsum.photos/id/1073/100/100"
                />
            </div >
        )
    }
}

export default ArticlePage;