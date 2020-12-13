import React from 'react';
import User from './User.js';
import UserDetails from './UserDetails.js';
import '../css/UserList.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
  
export default class UserList extends React.Component {
    
    state = {
        users : [], 
        ready: false
    };
    
    componentDidMount(){
        fetch("https://randomuser.me/api/?results=10")
        .then(response => response.json())
        .then(data => setTimeout(() => this.setState({users: data.results, ready: true}), 2000)) //timeout in order to show placeholder
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
                        <div className="userListPLaceholder">
                            <ReactPlaceholder showLoadingAnimation ready={this.state.ready} type='media' rows={6}>
                                <div className="userList">
                                    {this.state.users.map((profile) => <User key={profile.login.uuid} {...profile}/>)}
                                </div>
                            </ReactPlaceholder>
                        </div>,
                    </Route>
                </Switch>
            </Router>
        );
    }
}