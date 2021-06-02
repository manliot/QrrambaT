import React from 'react'
import styles from '../../css/componets/common/Card_restaurant.module.css'

function Card_restaurant(props) {
    const { title, tipo, url_img, place, price } = props
    return (
        <div className={styles['container']}>
            <img src={url_img} alt={`${title}-img`}/>
            <div className={styles['container-text']}>
                <h5>{title}</h5>
                <h6>{tipo}</h6>
                <h6>Rango de precio: {price}</h6>
                <h6>Ubicacion: {place}</h6>
            </div>
        </div>
    )
}

export default Card_restaurant