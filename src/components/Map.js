import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';

import '../css/UserDetails.css';

export default class Map extends React.Component {

    render() {
        const coords = {lat: +this.props.coord.latitude, lng: +this.props.coord.longitude};
        return (
            <MapContainer center={coords} zoom={9} >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={coords}>
                    <Popup>
                        I live here
                    </Popup>
                </Marker>
            </MapContainer>
        );
    }
}