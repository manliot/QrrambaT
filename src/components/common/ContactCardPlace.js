import { Link } from 'react-router-dom'
import Style from '../../css/componets/common/ContactCardPlace.module.css'

const ContactCardPlace = ({ imgURL, score, n_reseñas, address, phone, Web }) => {
    return (
        <div className={` ${Style['container']}`}>
            <div className={Style['subContainer']}>
                <div className='col-12 d-flex'>
                    <img className={` ${Style['image']}`} src={imgURL} />
                    <div className='d-flex justify-content-end'>
                        <h3>{score}</h3>
                    </div>
                </div>
                <div className='col-12 mt-3'>
                    <strong>Direccion: </strong><span>{address}</span>
                </div>
                <div className='col-12 mt-1 mb-4 '>
                    <strong>Telefono: </strong><span>{phone}</span>
                </div>
            </div>

            <div className={` ${Style['group-boton']} `}>
                <Link type="button" className={` btn-primary ${Style['button1']} `}><span>Sitio web</span></Link>
                <Link type="button" className={` btn-success ${Style['button1']} `}><span>Llamar</span></Link>
            </div>
        </div>
    )
}

export default ContactCardPlace
