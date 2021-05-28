import React from 'react'
import Logo from '../../assets/Logo-complete.png'
import styles from '../../css/componets/layout/Header.module.css'
import Cumbiambera from '../../assets/cumbiambera.png'
const Header = ({ refe }) => {
    console.log(refe)
    return (
        <header className={styles['header']}>
            <div className={styles['header-message']}>
                <h2 >¿Estas en Barranquilla y buscas planes cheveres?</h2>
                <img ref={refe} className={styles['logo']} src={Logo} alt='Logo de curramba' />
            </div>
            <div className={styles['header-woman']}>
                <img  src={Cumbiambera} alt='Mujer' />
            </div>
        </header>
    )
}

export default Header