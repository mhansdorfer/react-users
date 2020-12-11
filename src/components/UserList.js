import React from 'react';
import User from './User.js';
import '../css/UserList.css'

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
            <div className="userList">
                {this.state.users.map((profile) => <User key={profile.login.uuid} {...profile}/>)}
            </div>
        );
    }
}
