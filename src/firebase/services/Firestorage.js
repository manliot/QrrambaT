import { db } from '../firebase_config'

const getPlacebyId = async (id) => {
    let Place_ = {}
    const Places = await db.collection('Places').get()
    if (Places.empty) {
        console.log('no matching documents')
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
        console.log('no matching documents')
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
        console.log('no matching documents')
    }
    Events.forEach(event => {
        Events_.push(event.data())
    })
    return Events_
}

export { getPlacebyId, getAllPlaces, getAllEvents }