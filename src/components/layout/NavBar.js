import styles from '../../css/componets/layout/NavBar.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import SearchBar from '../common/SearchBar'



function NavBar({ color, type }) {


    return (
        <div className={`${styles['container']} ${color === 1 ? styles['color'] : ''}`}>
            <img src={Logo} className={styles['logo-img']} alt='icono de qrramba' />
            { type === 'search'
                ? <div className={styles['search-container']}>
                    <SearchBar searchTxt='Que estas buscando' />
                </div>
                :
                <div className={styles['link-container']}>
                    <Link to="/places" className={styles['link']}>Sitios</Link>
                    <Link to="#" className={styles['link']}>Eventos Culturales</Link>
                    <Link to="#" className={styles['link']}>Servicios turisticos</Link>
                    <Link className={styles['link']}>Noticias</Link>
                    <Link className={styles['link']}>Comunidad</Link>
                </div>
            }

            <Link to='/login' className={styles['rounded-btn']}>
                <span>Ingresa</span>
            </Link>

        </div>
    )
}

export default NavBar
