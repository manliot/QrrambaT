
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Styles from '../../css/componets/layout/Maps.module.css'

const Maps = ({ initial }) => {

    return (
        <div className={`${Styles['container']}`}>
            <MapContainer className={`${Styles['map-container']}`} center={initial.center} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={initial.center}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>

        </div>
    )
}

export default Maps
