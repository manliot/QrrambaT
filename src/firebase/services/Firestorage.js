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
    Places.forEach(doc => {
        Places_.push(doc.data())
    })
    return Places_
}

export { getPlacebyId, getAllPlaces }