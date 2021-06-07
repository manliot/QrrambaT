import React from 'react'
import styles from '../../css/componets/common/Card_restaurant.module.css'

function Card_restaurant(props) {
    const { title, url_img, description } = props
    return (
        <div className={styles['container']}>
            <img className={styles["img-box"]} src={url_img} alt={`${title}-img`}/>
            <div className={styles['container-text']}>
                <h5>{title}</h5>
                <h6>{description}</h6>
            </div>
        </div>
    )
}

export default Card_restaurant