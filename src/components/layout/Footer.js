import styles from '../../css/componets/layout/Footer.module.css'
import { Link } from 'react-router-dom'
import React from 'react'
import Logo from '../../assets/Logo-complete.png'

function Footer(selected) {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer-message']}>
                <img className={styles['logo']} src={Logo} alt='Logo de curramba' />
            </div>
            <div className={styles['footer-links']}>
                <div className={styles['footer-links-1']}>
                    <div >
                        <Link to="/places" className={styles['link']}>Hoteles, restaurantes y lugares</Link>
                        <hr className={`${styles['hr']} ${selected !== 1 ? styles['hide'] : ''}`} />
                    </div>
                 <div>
                        <Link to="/events" className={styles['link']}>Eventos Culturales</Link>
                     <hr className={`${styles['hr']} ${selected !== 2 ? styles['hide'] : ''}`} />
                 </div>
                    <div>
                        <Link to="services" className={styles['link']}>Servicios turisticos</Link>
                     <hr className={`${styles['hr']} ${selected !== 3 ? styles['hide'] : ''}`} />
                    </div>
                </div>
                <div className={styles['footer-links-2']}>
                    <div>
                        <Link to="/thingstodo" className={styles['link']}>Cosas para hacer</Link>
                        <hr className={`${styles['hr']} ${selected !== 4 ? styles['hide'] : ''}`} />
                    </div>
                 <div>
                        <Link to='/news' className={styles['link']}>Noticias</Link>
                        <hr className={`${styles['hr']} ${selected !== 5 ? styles['hide'] : ''} `} />
                    </div>
                    <div>
                        <Link to='forum' className={styles['link']}>Comunidad</Link>
                        <hr className={`${styles['hr']} ${selected !== 6 ? styles['hide'] : ''} `} />
                    </div>
                </div>
            </div>
            <div className={styles['footer-participants']}>
                <h3>Bustos S.</h3>
                <h3>Donado D.</h3>
                <h3>Pote L.</h3>
                <h3>Shaik E.</h3>
                <h3>Tejeda M.</h3>
                <h3>Torres R.</h3>
            </div>
        </footer>
    )
}


export default Footer