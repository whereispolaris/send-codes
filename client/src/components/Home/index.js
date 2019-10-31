import React from 'react';
import ArticlePage from '../ArticlePage';

const Home = () => {
    return (
        <div>
            <h3>Newest Snippets</h3>
            <ArticlePage/>
            <h3>Popular Snippets</h3>
            <ArticlePage/>
        </div>
    )
}

export default Home;