import { Link } from 'react-router-dom'

const Card_forum = ({ type, title, text, go }) => {
    return (
        <div className="card">
            <div className="card-header">
                {type}
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <Link href="#" className="btn btn-primary">Interactuar</Link>
            </div>
        </div>
    )
}

export default Card_forum
