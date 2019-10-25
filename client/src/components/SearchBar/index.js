// import React, { Component } from 'react';
// let users = [
//     {
//       name: "Leonard Rogers",
//       email: "egestas@justonecante.org"
//     },
//     {
//       name: "Walker Pace",
//       email: "erat.eget.tincidunt@idsapienCras.org"
//     },
//     {
//       name: "Lance Mcintyre",
//       email: "Nam.ligula@quamvel.net"
//     },
//     {
//       name: "Rudyard Conway",
//       email: "sit@nunc.org"
//     },
//     {
//       name: "Chadwick Oneal",
//       email: "laoreet@dictum.edu"
//     },
//     {
//       name: "Isaiah Kent",
//       email: "diam.dictum@lobortisquam.co.uk"
//     },
//     {
//       name: "Griffith Perkins",
//       email: "congue@acfermentumvel.ca"
//     },
//     {
//       name: "Lawrence Wheeler",
//       email: "ac.libero@Duisac.org"
//     },
//     {
//       name: "Preston Walker",
//       email: "egestas.rhoncus@eudui.co.uk"
//     },
//     {
//       name: "Simon Brewer",
//       email: "nunc.sed@Fuscediamnunc.co.uk"
//     }
//   ];
  
//   class Search extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         searchString: "",
//         users: []
//       };
//       this.handleChange = this.handleChange.bind(this);
//     }
  
//     componentDidMount() {
//       this.setState({
//         users: users
//       });
//       this.refs.search.focus();
//     }
  
//     handleChange() {
//       this.setState({
//         searchString: this.refs.search.value
//       });
//     }
  
//     render() {
//       let _users = this.state.users;
//       let search = this.state.searchString.trim().toLowerCase();
  
//       if (search.length > 0) {
//         _users = _users.filter(function(user) {
//           return user.name.toLowerCase().match(search);
//         });
//       }
  
//       return (
//         <div>
//           <h3>React - simple search</h3>
//           <div>
//             <input
//               type="text"
//               value={this.state.searchString}
//               ref="search"
//               onChange={this.handleChange}
//               placeholder="type name here"
//             />
//             <ul>
//               {_users.map(l => {
//                 return (
//                   <li>
//                     {l.name} <a href="#">{l.email}</a>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(<Search />, document.getElementById("app"));