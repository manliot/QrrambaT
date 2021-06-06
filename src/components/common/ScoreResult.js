import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import style from '../../css/componets/common/ScoreResult.module.css'

const ScoreResult = ({ score, n_reseñas }) => {
    const getColorStar = (score) => {
        let icons = [false, false, false, false, false]
        const rounded = Math.round(score)
        icons = icons.fill(true, 0, rounded)
        return icons
    }
    const score_start = getColorStar(score)
    return (
        <>
            {score_start

                ? <div className={style['fontIcon-container']}>
                    <strong>{score} </strong><span>|</span>
                    {
                        score_start.map((star, index) => {
                            return <FontAwesomeIcon className={star === true ? style['fontIcon-yellow'] : style['fontIcon-default']} icon={faStar} />
                        })

                    }
                    <span> | {n_reseñas} Reseñas</span>
                </div>
                : <div></div>
            }
        </>
    )
}

export default ScoreResult
