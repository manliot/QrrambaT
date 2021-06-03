
import Style from '../../css/componets/common/ContactCardPlace.module.css'

const ContactCardPlace = ({ imgURL, score, n_reseñas, address, phone, web }) => {
    return (
        <div className={` ${Style['container']}`}>
            <div className={Style['subContainer']}>
                <div className='col-12 d-flex'>
                    <img className={` ${Style['image']}`} src={imgURL} alt='imagen a subir' />
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
                <a href={`${web}`} type="button" className={` btn-primary ${Style['button1']} `}><span>Sitio web</span></a>
                <a href={`tel:${phone}`} type="button" className={` btn-success ${Style['button1']} `}><span>Llamar</span></a>
            </div>
        </div>
    )
}
export default ContactCardPlace
