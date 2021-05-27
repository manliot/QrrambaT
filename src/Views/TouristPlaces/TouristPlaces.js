import styles from '../../css/Views/TouristPlaces.module.css'
import Navbar from '../../components/layout/NavBar'
import SearchBar from '../../components/common/SearchBar'
import Map from '../../components/layout/Map'

import { useInView } from 'react-intersection-observer';

const TouristPlaces = () => {

    const { ref, inView, entry } = useInView({
        rootMargin: '-150px',
        /* threshold: 0.5, */
    });

    return (
        <div className={styles['container']}>
            <Navbar type={`${inView ? '' : 'search'}`} />
            <header className={styles['header']}>
                <div ref={ref} className={styles['search-container']}>
                    {inView &&
                        <SearchBar searchTxt='Que estas buscando' />
                    }
                </div>
            </header>
            <div className={styles['two-columns']}>
                <section className={styles['column-one']}>
                    <h2>Aqui va el compónente de los sitios</h2>
                    <h2>Aqui va el compónente de los sitios</h2>
                    <h2>Aqui va el compónente de los sitios</h2>
                    <h2>Aqui va el compónente de los sitios</h2>
                    <h2>Aqui va el compónente de los sitios</h2>
                    <h2>Aqui va el compónente de los sitios</h2>
                    <h2>Aqui va el compónente de los sitios</h2>
                    <h2>Aqui va el compónente de los sitios</h2>
                    <h2>Aqui va el compónente de los sitios</h2>
                    <h2>Aqui va el compónente de los sitios</h2>
                    <h2>Aqui va el compónente de los sitios</h2>
                    <h2>Aqui va el compónente de los sitios</h2>
                    <h2>Aqui va el compónente de los sitios</h2>
                    <h2>Aqui va el compónente de los sitios</h2>
                    <h2>Aqui va el compónente de los sitios</h2>
                    <h2>Aqui va el compónente de los sitios</h2>
                    <h2>Aqui va el compónente de los sitios</h2>
                    <h2>Aqui va el compónente de los sitios</h2>

                </section>
                <section className={styles['column-two']}>
                    <Map />
                </section>
            </div>
        </div>
    )
}

export default TouristPlaces
