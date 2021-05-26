import React from 'react'
import styles from '../../css/componets/common/Card_txt_img.module.css'

function Card_txt_img(props) {
    const { title, content, url_img, color } = props
    return (
        <div className={`${styles['container']} ${color===1?styles['bg-black']:''}`}>
            <div className={styles['container-text']}>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            <img src={url_img} alt={`${title}-img`}/>
        </div>
    )
}

export default Card_txt_img
