import React from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';
import User from './User.js'
import '../css/UserDetails.css'
import Map from './Map.js';

function UserDetails(props) {
    const {userId} = useParams();
    const user = props.users.filter(user => user.login.uuid === userId)[0];

    if (user) return (
        <div>
            <div className="home">
                <h4><Link to="/">Home</Link></h4>
            </div>
            <div className="userDetails">
                <User {...user} background="aliceblue" />
            </div>
            <Map coord={user.location.coordinates}/>
        </div>
    );
    else return  <Redirect to='/' />;
}

export default UserDetails;