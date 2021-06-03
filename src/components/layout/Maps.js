
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import Styles from '../../css/componets/layout/Maps.module.css'



const CreateIcon = (svg_name) => {
    const Rest = L.icon(
        {
            iconUrl: `/${svg_name}.svg`,
            iconSize: [20, 20],
            className: "leaflet-venue-icon"
        }
    )
    return Rest
}

const icons = { Restaurante: CreateIcon('restaurant'), Hotel: CreateIcon('hotel'), Aereopuerto: CreateIcon('aereopuerto'), CentroComercial: CreateIcon('cc'), Parque: CreateIcon('park'), Gimnasio: CreateIcon('gym'), Bar: CreateIcon('bar') }

const Maps = ({ initial, places = [] }) => {
    const markers = []
    places.map((place) => {
        const marker = [parseFloat(place.lat), parseFloat(place.lon)]
        markers.push(marker)
    })
    return (
        <div className={`${Styles['container']}`}>
            <MapContainer zoom={initial.zoom} className={`${Styles['map-container']}`} center={initial.center} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={initial.center} >
                    <Popup>
                        Esta es tu ubicacion actual
                    </Popup>

                </Marker>
                {markers.map((marker, index) => {
                    const place = places[index]
                    const type = place.type
                    console.log(icons[type])
                    return (
                        <Marker icon={icons[type]} position={marker}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    )
                })}
            </MapContainer>

        </div>
    )
}

export default Maps
