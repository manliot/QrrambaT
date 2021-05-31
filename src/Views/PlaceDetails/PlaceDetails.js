import { useState, useEffect } from 'react'
import NavBar from '../../components/layout/NavBar'
import Images from '../../components/common/ImagesPlaces'
import Styles from '../../css/Views/PlaceDetails.module.css'
import { getPlacebyId } from '../../firebase/services/Firestorage'
const defaulImg = 'https://mdbootstrap.com/img/Photos/Others/placeholder.jpg'
const DefaultImgs = { prin: defaulImg, sec1: defaulImg, sec2: defaulImg, sec3: defaulImg, sec4: defaulImg }
const PlaceDetails = ({ id_place = 'vbCDE7lfUj3YETnMSFLg' }) => {
    const [Place, setPlace] = useState(null)
    const score = 4.8
    const cant_reseñ = 1200
    useEffect(() => {
        const fetchData = async () => {
            const PlaceRes = await getPlacebyId(id_place)
            setPlace(PlaceRes)
            console.log(PlaceRes)
        }
        fetchData()
    }, [id_place])

    return (
        <>
            {Place
                ? <>
                    <NavBar color={1}></NavBar>
                    <div className={` pt-5 ${Styles['container']}`}>
                        <h2>{Place.type} {Place.name}</h2>
                        <div className='col-12 pb-3 row'>
                            <div className='col-8'>
                                <span>{score}</span> <span>|{cant_reseñ} Reseñas</span>
                            </div>
                            <div className='col-4 d-flex justify-content-end'>
                                <span>Guardar</span>
                            </div>
                        </div>
                        <Images images={Place == null ? DefaultImgs : Place.imagesURL} />
                    </div>
                </>
                : <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>

            }

        </>
    )
}

export default PlaceDetails
