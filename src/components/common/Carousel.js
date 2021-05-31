
import styles from '../../css/componets/common/Carousel.module.css'
function Carousel(props) {
    const { array_images } = props
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide position-static" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        array_images.map((image, index) => <>
                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={image.url} className={styles['img-caroulsel']} alt={image.alt} />
                            </div>
                        </>
                        )
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <div className={styles['control-div']}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </div>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <div className={styles['control-div']}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Carousel
