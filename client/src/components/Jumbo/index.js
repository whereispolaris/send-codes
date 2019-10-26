import React from 'react';
import './Jumbo.css';

const Jumbo = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">SEND CODES</h1> 
                    <p className="lead text-center">Find boilerplate for your project.</p>
                </div>
                <form>
                    <div className="search-box">
                        <div className="textbox">
                            <input type="text" name="search" placeholder="Search" autoComplete="off"className="auto-expand" />
                            <button className="search-button">Enter</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Jumbo;

// class App extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         searchboxStyle: {
//           width: '120px',
//           background: '#eee'
//         }
//       }
      
//       this._handleTextFocus = this._handleTextFocus.bind(this);
//       this._handleClick = this._handleClick.bind(this);
//       this._handleTextBlur = this._handleTextBlur.bind(this);
//     }
    
//     _handleTextFocus(e) {
//       e.preventDefault();
      
//       this.setState({
//         searchboxStyle: {
//           width: '100%',
//           background: '#fff'
//         }
//       })
//     }
    
//     _handleTextBlur(e) {
//       e.preventDefault();
//       if (!this._searchBox.value && !this._searchBox.value.length > 0) 
//         this.setState({
//           searchboxStyle: {
//             width: '120px',
//             background: '#eee'
//           }
//         })
//     }