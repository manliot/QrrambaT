import React from 'react'
import styles from '../../css/componets/common/Card_events.module.css'

function Card_service(props) {
    const { title, horario, url_img, descripcion } = props
    return (
        <div className={styles['container']}>
            <img className={styles['img']} src={url_img} alt={`${title}-img`} />
            <div className={styles['container-text']}>
                <h5 className='mb-3'>{title}</h5>
                <p className='mb-1'><strong>Horario:</strong> {horario}</p>
                <p><strong>Descripción:</strong> {descripcion}</p>
            </div>
        </div>
    )
}

export default Card_service