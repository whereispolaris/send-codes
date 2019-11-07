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
    handleOnInputChange =( event ) => {
        const query = event.target.value;
        console.warn ( query );
    };

    render() {
        return (
            <div className="container">
                <label className="search-label" htmlFor="search-input">
                    <input
                        type="text"
                        value=""
                        id="search-input"
                        placeholder="Search..."
                        onChange={this.handleOnInputChange}
                        />
                </label>
            </div>
        )
    }
}
export default Search;