import React from 'react'
import styles from '../../css/componets/common/Card_events.module.css'

function Card_events(props) {
    const { title, time, url_img, place } = props
    return (
        <div className={styles['container']}>
            <img src={url_img} alt={`${title}-img`}/>
            <div className={styles['container-text']}>
                <h5>{title}</h5>
                <h6>Hora: {time}</h6>
                <h6>Lugar: {place}</h6>
            </div>
        </div>
    )
}

export default Card_events