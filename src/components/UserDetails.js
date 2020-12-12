import React from 'react';
import { useParams, Link } from 'react-router-dom';
import User from './User.js'
import '../css/User.css'

function UserDetails(props) {
    const {userId} = useParams();
    const user = props.users.filter(user => user.login.uuid === userId)[0];

    return (
        <div>
            <div className="home">
                <h4><Link to="/">Home</Link></h4>
            </div>
            <div className="userDetails">
                <User {...user} background="aliceblue" />
            </div>
        </div>
    );
}

export default UserDetails;

