import React from 'react';
import ArticlePage from '../ArticlePage';
import Article from '../Article';

const axios = require('axios');
import FilterResults from 'react-filter-search';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: ''
    };
  }
  componentWillMount() {
    fetch('ArticlePage')
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  render() {
    const { data, value } = this.state;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <SearchResults
          value={value}
          data={data}
          renderResults={results => (
            <div>
              {results.map(el => (
                <div>
                  <span>{el.name}</span>
                  <span>{el.email}</span>
                </div>
              ))}
            </div>
          )}
        />
      </div>
    );
  }
}
export default Searchbar;