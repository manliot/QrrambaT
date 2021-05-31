import { useState, useEffect } from 'react'
import styles from '../../css/Views/TouristPlaces.module.css'
import Navbar from '../../components/layout/NavBar'
import SearchBar from '../../components/common/SearchBar'

import Map from '../../components/layout/Maps'

import { useInView } from 'react-intersection-observer';
import { getAllPlaces } from '../../firebase/services/Firestorage'
import index from '../Login'

const TouristPlaces = () => {
    const [places, setPlaces] = useState(null)

    useEffect(() => {

        const fetchAllplaces = async () => {
            const places_ = await getAllPlaces()
            setPlaces(places_)
        }
        fetchAllplaces()
    }, [])


    const initial = {
        center: {
            lat: 10.86,
            lng: -74.77
        },
        zoom: 100
    }
    const { ref, inView, /* entry */ } = useInView({
        rootMargin: '-150px',
        /* threshold: 0.5, */
    });

    if (!places) {
        return (
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        )
    }
    return (
        <div className={styles['container']}>
            <Navbar selected={1} type={`${inView ? '' : 'search'}`} />
            <header className={styles['header']}>
                <div ref={ref} className={styles['search-container']}>
                    {inView &&
                        <SearchBar searchTxt='Que estas buscando' />
                    }
                </div>
            </header>
            <div className={styles['two-columns']}>
                <section className={styles['column-one']}>
                    {
                        places.map((element, index) => {
                            return <h2>{element.name} Aqui va el compónente de los sitios</h2>
                        })
                    }
                </section>
                <section className={styles['column-two']}>
                    <Map initial={initial} />
                </section>
            </div>
        </div>
    )
}

export default TouristPlaces
