import { Link } from 'react-router-dom'
import Styles from '../../css/componets/common/CardForum.module.css'
const Card_forum = ({ type, title, text, go }) => {
    return (
        <div className={`${Styles['textleft']} card `}>
            <div className="card-header">
                {type}
            </div>
            <div className="card-body text-left">
                <h5 className="card-title text-left">{title}</h5>
                <p className="card-text text-left">{text}</p>
                <Link href="#" className="btn btn-primary">Interactuar</Link>
            </div>
        </div>
    )
}

export default Card_forum
