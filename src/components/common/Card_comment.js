import Style from '../../css/componets/common/Card_comment.module.css'
import Score from './Score_comment'

const ContactCardPlace = ({name, score, commentary, img}) => {
    return (
        <div className={` ${Style['container']}`}>
            <div className={Style['subContainer']}>
                <div className='col-12 d-flex'>
                    <img className={` ${Style['image']}`} src={img} alt='imagen a subir' />
                    <div className='w-100'>
                        <div className='col-12'>
                            <h4>{name}</h4>
                        </div>
                        <div className='col-12'>
                            <Score score={score}></Score>
                        </div>
                    </div>
                </div>
                <div className='col-12 mt-3'>
                    <span>{commentary}</span>
                </div>
            </div>
        </div>
    )
}
export default ContactCardPlace