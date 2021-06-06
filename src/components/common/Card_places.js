import React from 'react'
import styles from '../../css/componets/common/Card_places.module.css'
import ScoreResult from '../common/ScoreResult'
function Card_places(props) {
    const { title, cellp, type, address, url_img, score } = props
    return (
        <div className={`${styles['container']} row `}>
            <div className='col-4'>
                <img className={styles["img-box"]} src={url_img} alt={`${title}-img`} />
            </div>
            <div className ='col-8'>
                <div className={styles['container-text']}>
                    <h6 className='mb-1'>{type}</h6>
                    <h5 className='mb-3'>{title}</h5>
                    <h6 className='mb-1'>{address}</h6>
                    <p className='mb-1'><strong><strong>Telefono:</strong></strong> {cellp}</p>
                    <p><u>Para más información presione aquí</u></p>

                    <ScoreResult
                        score={score}
                        n_reseñas={Math.floor(Math.random() * 1200)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Card_places