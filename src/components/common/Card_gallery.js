import React from 'react'
import Styles from '../../css/componets/common/Card_gallery.module.css'
function Card_gallery({ img, title, description }) {
    return (
        <div className={Styles["container"]}>

            <img className={Styles['image']} src={img} alt={`${title}-img`}/>

            <div className={Styles['txt-container']}>
                <h4 className={'title'}>{title}</h4>
                <p className={'description'}>{description}</p>
            </div>
        </div>
    )
}

export default Card_gallery
