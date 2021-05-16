import SearchBar from '../../components/common/SearchBar'
import Navbar from '../../components/layout/NavBar'
import styles from '../../css/Views/Home.module.css'
import Bq from '../../assets/Barranquilla.jpeg'
import Vmundo from '../../assets/VentanaAlMUndo.jpg'
import Carnaval from '../../assets/Carnaval.jpg'
import Carousel from '../../components/common/Carousel'
import { Home_imgs } from '../../const/CarouselImgs'
function index() {
   
    return (
        <div>
            <Navbar />
            <div className={styles['carousel-container']}>
                <Carousel array_images={Home_imgs} />
            </div>
            <div className={styles['content']}>
                <SearchBar searchTxt='Que estas buscando' />
                <section className={styles['sec']}>
                    <h2>Conoce Barranquilla Colombia</h2>
                    <div >
                        <p>Barranquilla ( español americano:  [baraŋˈkiʝa]) es el distrito capital del departamento de Atlántico en Colombia .
                        Está ubicada cerca del Mar Caribe y es la ciudad más grande y el tercer puerto en la región de la Costa Caribe Norte;
                        en 2018 tenía una población de 1.206.319, lo que la convierte en la cuarta ciudad más poblada de Colombia después de Bogotá ,
                            Medellín y Cali . <br></br>
                            Barranquilla se encuentra estratégicamente junto al delta del río Magdalena , a 7.5 kilómetros (4.7 millas)
                            (originalmente 25 kilómetros (16 millas) antes del rápido crecimiento urbano) de su desembocadura en el Mar Caribe,
                            sirviendo como puerto para el transporte fluvial y marítimo dentro de Colombia.
                            </p>
                        <img src={Bq} alt='Foto de barranquilla' />
                    </div>
                    <div className={styles['invert']}>
                        <p className={styles['p-invert']}>Barranquilla se estableció legalmente como ciudad el 7 de abril de 1813, aunque data de al menos 1629. Se convirtió en un puerto importante
                        , sirviendo como refugio para inmigrantes de Europa, especialmente durante e inmediatamente después de la Primera Guerra Mundial y la Segunda Guerra Mundial.
                        cuando llegaron oleadas de inmigrantes adicionales de Oriente Medio y Asia. Barranquilla se convirtió en el principal puerto de Colombia, y con su nivel de
                        industrialización y modernidad le valió a la ciudad el sobrenombre de "Puerta Dorada de Colombia" (en español: La Puerta de Oro de Colombia). En la década de 1940,
                        Barranquilla era la segunda ciudad más grande de Colombia y una de las ciudades más modernas del Caribe y América del Sur;  <br></br>
                        </p>
                        <img src={Vmundo} alt='Ventana al mundo' />
                    </div>
                </section>
                <section className={styles['sec']}>
                    <h2>Carnaval de barranquilla</h2>
                    <div >
                        <p>El Carnaval de Barranquilla es una de las celebraciones folclóricas más importantes de Colombia y uno de los carnavales más grandes del mundo. El carnaval tiene tradiciones que
                        se remontan al siglo XIX. Cuatro días antes de la Semana Santa, Barranquilla se engalana para recibir a turistas nacionales y extranjeros y se une a los habitantes de la ciudad
                        para disfrutar de cuatro días de intensa fiesta. Durante el carnaval, las actividades normales de Barranquilla se dejan de lado ya que la ciudad se llena de bailes callejeros,
                        desfiles musicales y de disfraces. El Carnaval de Barranquilla incluye bailes como el paloteo español, Congo africano, y mico y micas indígenas. También se interpretan muchos estilos
                        de música colombiana , sobre todo la cumbia , y los instrumentos incluyen tambores y conjuntos de viento.
                            </p>
                        <img src={Carnaval} alt='Carnaval de barranquilla' />
                    </div>
                </section>
                <section className={styles['sec']}>
                    <h2>Que es QrrambaT</h2>
                    <div >
                        <p>QrrambaT es una .......... </p>
                        <img src={Carnaval} alt='Carnaval de barranquilla' />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default index
