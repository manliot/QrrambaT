import { db } from '../firebase_config'

const getPlacebyId = async (id) => {
    let Place_ = {}
    const Places = await db.collection('Places').get()
    if (Places.empty) {
        alert('No hay datos registrados, comienza a ingresar info ingresando con Google')
    }
    Places.forEach(doc => {
        if (doc.id === id) {
            Place_ = doc.data()
        }
    })
    return Place_
}

const getAllPlaces = async () => {
    let Places_ = []
    const Places = await db.collection('Places').get()

    if (Places.empty) {
        alert('No hay datos registrados, comienza a ingresar info ingresando con Google')
    }
    Places.forEach(place => {
        Places_.push(place.data())
    })
    return Places_
}
const getAllEvents = async () => {
    let Events_ = []
    const Events = await db.collection('Events').get()

    if (Events.empty) {
        alert('No hay datos registrados, comienza a ingresar info ingresando con Google')
    }
    Events.forEach(event => {
        Events_.push(event.data())
    })
    return Events_
}

const getAllServices = async () => {
    let Services_ = []
    const Services = await db.collection('Services').get()

    if (Services.empty) {
        alert('No hay datos registrados, comienza a ingresar info ingresando con Google')
    }
    Services.forEach(service => {
        Services_.push(service.data())
    })
    return Services_
}
export { getPlacebyId, getAllPlaces, getAllEvents, getAllServices }