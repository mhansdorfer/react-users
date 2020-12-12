import React from 'react';
import User from './User.js';
import UserDetails from './UserDetails.js';
import '../css/UserList.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
  
export default class UserList extends React.Component {
    
    state = {
        users : []
    };
    
    componentDidMount(){
        fetch("https://randomuser.me/api/?results=10")
        .then(response => response.json())
        .then(data => this.setState({users: data.results}))
        .catch(error => console.log(error));
    }

    render(){
        return (
            <Router>
                <Switch>
                <Route path="/users/:userId">
                    <UserDetails users={this.state.users}/>
                </Route>
                <Route path="/">
                    <div className="userList">
                       {this.state.users.map((profile) => <User key={profile.login.uuid} {...profile}/>)}
                   </div>
                </Route>
                </Switch>
            </Router>
        );
    }
}