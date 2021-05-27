import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
    const initial = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    }
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCNcE1en11ylFjn3u7QSPpdIFxJC1pxwq8' }}
                defaultCenter={initial.center}
                defaultZoom={initial.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
}

export default Map
