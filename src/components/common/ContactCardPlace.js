
import Style from '../../css/componets/common/ContactCardPlace.module.css'
import ScoreResult from './ScoreResult'

const ContactCardPlace = ({ place, score, n_reseñas }) => {
    return (
        <div className={` ${Style['container']}`}>
            <div className={Style['subContainer']}>
                <div className='col-12 d-flex'>
                    <img className={` ${Style['image']}`} src={place.iconURL} alt='imagen a subir' />
                    <div className='w-100'>
                        <div className='col-12'>
                            <h3>{place.name}</h3>
                        </div>
                        <div className='col-12'>
                            <ScoreResult score={score} n_reseñas={n_reseñas}></ScoreResult>
                        </div>
                    </div>
                </div>
                <div className='col-12 mt-3'>
                    <strong>Direccion: </strong><span>{place.address}</span>
                </div>
                <div className='col-12 mt-1 mb-4 '>
                    <strong>Telefono: </strong><span>{place.phone}</span>
                </div>
            </div>

            <div className={` ${Style['group-boton']} `}>
                <a href={`${place.web}`} type="button" className={` btn-primary ${Style['button1']} `}><span>Sitio web</span></a>
                <a href={`tel:${place.phone}`} type="button" className={` btn-success ${Style['button1']} `}><span>Llamar</span></a>
            </div>
        </div>
    )
}
export default ContactCardPlace
