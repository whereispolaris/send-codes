import React from 'react';
import './Jumbo.css';

const Jumbo = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Send Codes</h1>
                    <p className="lead text-center">Code Snippets for Full Stack Development Projects</p>
                </div>
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