import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import style from '../../css/componets/common/ScoreResult.module.css'

const getColorStar = (score) => {
    let icons = [false, false, false, false, false]
    const rounded = Math.round(score)
    icons = icons.fill(true, 0, rounded)
    return icons
}
const ScoreResult = ({ score, n_reseñas }) => {
    const [score_start/* , setScore_start */] = useState(getColorStar(score))

    return (
        <>
            <div className={style['fontIcon-container']}>
                <strong>{score} </strong>
                {
                    score_start.map((star, index) => {
                        return <FontAwesomeIcon className={star === true ? style['fontIcon-yellow'] : style['fontIcon-default']} icon={faStar} />
                    })

                }
            </div>
        </>
    )
}

export default ScoreResult