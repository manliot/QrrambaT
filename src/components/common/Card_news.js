import React from 'react'
import styles from '../../css/componets/common/Card_news.module.css'

function Card_restaurant(props) {
    const { title, url_img, author, short, date, long } = props
    return (
        <div className={styles['container']}>
            <img src={url_img} alt={`${title}-img`}/>
            <div className={styles['container-text']}>
                <h5>{title}</h5>
                <h6 className={styles["author"]}>{author} - {date}</h6>
                <h6>{short}</h6>
            </div>
        </div>
    )
}

export default Card_restaurant