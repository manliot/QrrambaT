import Styles from '../../css/componets/common/Item_service.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Item_service = ({ type, iconURL, title, content }) => {
    return (
        <div className='d-flex mt-4'>
            <div className={`${Styles['icon-container']}`}>
                {type === 'icon'
                    ? <FontAwesomeIcon className={`${Styles['iconFa']}`} icon={iconURL} />
                    : <img className={`${Styles['iconURL']} rounded`} alt='item servicio' src={iconURL} />
                }
            </div>
            <div >
                <h5>{title}</h5>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Item_service
