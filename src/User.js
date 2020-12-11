import React from 'react';
import "./User.css";

export default class User extends React.Component {

    render () {
        const dateOptions = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
        const profile = this.props;
        const name = profile.name ? (profile.name.first ? profile.name.first + " " : "")  + (profile.name.last ? profile.name.last : "") : "";
        const address = profile.location ? (profile.location.street.name + " " +  profile.location.street.number + ", " + profile.location.city) : "";
        return (
            <div className='user-profile'>
                <img src={profile.picture ? profile.picture.large : null} alt=""/>
                <div className="info">
                    <h3 className="name">{name ? name : "Nie przekazano imienia i nazwiska"}</h3>
                    <p className="address">Adres: {address ? address : "Brak"}</p>
                    <p className="email">Email: {profile.email}</p>
                    <p className="registerDate">{profile.registered ? "Zarejestrowano: " + new Date(profile.registered.date).toLocaleString("pl-PL", dateOptions) : null}</p>
                </div>
            </div>
        );
    }
}