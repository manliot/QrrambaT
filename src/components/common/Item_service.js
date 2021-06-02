import Styles from '../../css/componets/common/Item_service.module.css'

const Item_service = ({ iconURL, title, content }) => {
    return (
        <div className='d-flex mt-4'>
            <div className='mx-3'>
                <img className={`${Styles['iconURL']} alt='item' rounded`} src={iconURL} />
            </div>
            <div >
                <h5>{title}</h5>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Item_service
