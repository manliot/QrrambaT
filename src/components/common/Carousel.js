
import styles from '../../css/componets/common/Carousel.module.css'
function Carousel(props) {
    const { array_images } = props
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide position-static" data-bs-ride="carousel">
                <div class="carousel-inner">
                    {
                        array_images.map((image, index) => <>
                            <div class={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={image.url} className={styles['img-caroulsel']} alt={image.alt} />
                            </div>
                        </>
                        )
                    }
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <div className={styles['control-div']}>
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </div>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <div className={styles['control-div']}>
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Carousel
