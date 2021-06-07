import Styles from '../../css/componets/common/ImagesPlaces.module.css'

function ImagesPlaces({ images }) {
    return (
        <div className={`col-12 row ${Styles['container']}`}>
            <div className={`col-6 ${Styles['prin-container']}`}>
                <img className={`${Styles['img-prin']}`} src={`${images[0]}`} alt='Imagen principal' />
            </div>
            <div className={`col-6 row ${Styles['sec-div']}`}>
                <div className={`col-6 ${Styles['sec-container']}`}>
                    <img className={`${Styles['img-sec']}`} src={images[1]} alt='Imagen principal' />
                </div>
                <div className={`col-6 ${Styles['sec-container']}`}>
                    <img className={`${Styles['img-sec']} ${Styles['img-last-row1']}`} src={images[2]} alt='Imagen principal' />
                </div>
                <div className={`col-6 ${Styles['sec-container']}`}>
                    <img className={`${Styles['img-sec']}`} src={images[3]} alt='Imagen principal' />
                </div>
                <div className={`col-6 ${Styles['sec-container']}`}>
                    <img className={`${Styles['img-sec']} ${Styles['img-last-row2']}`} src={images[4]} alt='Imagen principal' />
                </div>
            </div>
        </div>
    )
}

export default ImagesPlaces
