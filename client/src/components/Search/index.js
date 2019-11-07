import React from 'react';
import ArticlePage from '../ArticlePage';
import Article from '../Article';
const axios = require('axios');
const matter = require('gray-matter');

class Search extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            query: '',
            results: {},
            loading: false,
            message: ''
        }
    }
    render() {
        return (
            <div className="container">
                <label className="search-label" htmlFor="search-input">
                    
                </label>
            </div>
        )
    }
}
export default Search;