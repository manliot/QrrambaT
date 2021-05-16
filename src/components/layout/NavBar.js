import styles from '../../css/componets/layout/NavBar.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

function NavBar() {
    return (
        <div className={styles['container']}>
            <img src={Logo} className={styles['logo-img']} />
            <div className={styles['link-container']}>
                <Link className={styles['link']}>Sitios</Link>
                <Link className={styles['link']}>Eventos Culturales</Link>
                <Link className={styles['link']}>Servicios turisticos</Link>
                <Link className={styles['link']}>Noticias</Link>
                <Link className={styles['link']}>Comunidad</Link>
            </div>
            <button className={styles['rounded-btn']}>
                <span>Ingresa</span>
            </button>
        </div>
    )
}

export default NavBar
