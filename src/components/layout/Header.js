import React from 'react'
import Logo from '../../assets/Logo-complete.png'
import styles from '../../css/componets/layout/Header.module.css'

const Header = ({ refe }) => {
    console.log(refe)
    return (
        <header className={styles['header']}>
            <div className={styles['header-message']}>
                <h2 >¿Estas en Barranquilla y buscas planes cheveres?</h2>
                <img ref={refe} src={Logo} alt='Logo de curramba' />
            </div>
        </header>
    )
}

export default Header