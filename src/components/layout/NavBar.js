import styles from '../../css/componets/layout/NavBar.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'



function NavBar({ color }) {

    console.log(color)
    return (
        <div className={`${styles['container']} ${color === 1 ? styles['color'] : ''}`}>
            <img src={Logo} className={styles['logo-img']} alt='icono de qrramba' />
            <div className={styles['link-container']}>
                <Link to="#" className={styles['link']}>Sitios</Link>
                <Link to="#" className={styles['link']}>Eventos Culturales</Link>
                <Link to="#" className={styles['link']}>Servicios turisticos</Link>
                <Link className={styles['link']}>Noticias</Link>
                <Link className={styles['link']}>Comunidad</Link>
            </div>

            <Link to='/login' className={styles['rounded-btn']}>
                <span>Ingresa</span>
            </Link>

        </div>
    )
}

export default NavBar
