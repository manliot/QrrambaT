
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import Styles from '../../css/componets/layout/Maps.module.css'
import { Link } from 'react-router-dom'




const Maps = ({ type, initial, places = [] }) => {

    const CreateIcon = (svg_name) => {
        const Rest = L.icon(
            {
                iconUrl: `/${svg_name}.svg`,
                iconSize: [55, 55],
                className: "leaflet-venue-icon"
            }
        )
        return Rest
    }
    const icons = { Restaurante: CreateIcon('restaurant'), Hotel: CreateIcon('hotel'), Aereopuerto: CreateIcon('aereopuerto'), CentroComercial: CreateIcon('cc'), Parque: CreateIcon('park'), Gimnasio: CreateIcon('gym'), Bar: CreateIcon('bar') }
    const markers = []
    places.map((place) => {
        const marker = [parseFloat(place.lat), parseFloat(place.lon)]
        markers.push(marker)
        return null
    })
    return (
        <div className={`${Styles['container']}`}>
            <MapContainer zoom={initial.zoom} className={`${Styles['map-container']}`} center={initial.center} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    type === 'NoInitialMarker'
                        ? <></>
                        : <Marker position={initial.center} >
                            <Popup>
                                Esta es tu ubicacion actual
                            </Popup>
                        </Marker>
                }
                {markers.map((marker, index) => {
                    const place = places[index]
                    const type = place.type
                    return (
                        <Marker key={`${type}+ ${index}`} icon={icons[type]} position={marker}>
                            <Popup>
                                <div className="card">
                                    <img className="card-img-top" src={place.imagesURL[0]} alt="car del lugar" />
                                    <div className="card-body p-3">
                                        <h4 className="card-title">{place.name}</h4>
                                        <h6 className="card-title">{place.type}  </h6>
                                        <p className="card-text"><strong>Direccion:</strong> {place.address}</p>
                                        <p className="card-text"><strong>Telefono:</strong> {place.phone}</p>
                                        <p className="card-text"><strong>Horario</strong> {place.horas}</p>
                                        <Link to={{ pathname: '/place-details', state: { Place: place } }} className={`btn btn-primary ${Styles['link']} `}>Mas informacion</Link>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    )
                })}
            </MapContainer>

        </div>
    )
}

export default Maps
