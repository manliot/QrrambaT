import React from 'react'
import styles from '../../css/componets/common/Card_events.module.css'

function Card_events(props) {
    const { title, time, url_img, place } = props
    return (
        <div className={styles['container']}>
            <img className={styles["img-box"]} src={url_img} alt={`${title}-img`} />
            <div className={styles['container-text']}>
                <h5 className='mb-3'>{title}</h5>
                <p className='mb-1'><strong>Fecha:</strong> {time}</p>
                <p><strong>Lugar:</strong> {place}</p>
            </div>
        </div>
    )
}

export default Card_events