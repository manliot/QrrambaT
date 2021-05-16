import SearchBar from '../../components/common/SearchBar'
import Navbar from '../../components/layout/NavBar'
import styles from '../../css/Views/Home.module.css'
import Bq from '../../assets/Barranquilla.jpeg'
import Vmundo from '../../assets/VentanaAlMUndo.jpg'
function index() {
    return (
        <div>
            <Navbar />

            <div className={styles['content']}>
                <SearchBar searchTxt='Que estas buscando' />
                <section className={styles['sec']}>
                    <h2>Conoce Barranquilla Colombia</h2>
                    <div>
                        <p>Barranquilla ( español americano:  [baraŋˈkiʝa]) es el distrito capital del departamento de Atlántico en Colombia .
                        Está ubicada cerca del Mar Caribe y es la ciudad más grande y el tercer puerto en la región de la Costa Caribe Norte;
                        en 2018 tenía una población de 1.206.319, lo que la convierte en la cuarta ciudad más poblada de Colombia después de Bogotá ,
                            Medellín y Cali . <br></br>
                            Barranquilla se encuentra estratégicamente junto al delta del río Magdalena , a 7.5 kilómetros (4.7 millas)
                            (originalmente 25 kilómetros (16 millas) antes del rápido crecimiento urbano) de su desembocadura en el Mar Caribe,
                            sirviendo como puerto para el transporte fluvial y marítimo dentro de Colombia. . También es el principal centro económico
                            del departamento de Atlántico en Colombia. La ciudad es el núcleo del Área Metropolitana de Barranquilla , con una población de más
                            de 2 millones, que también incluye los municipios de Soledad , Galapa , Malambo y Puerto Colombia .</p>
                        <img src={Bq} />
                    </div>
                    <div>
                        <p>Barranquilla se estableció legalmente como ciudad el 7 de abril de 1813, aunque data de al menos 1629. Se convirtió en un puerto importante
                        , sirviendo como refugio para inmigrantes de Europa, especialmente durante e inmediatamente después de la Primera Guerra Mundial y la Segunda Guerra Mundial.
                        cuando llegaron oleadas de inmigrantes adicionales de Oriente Medio y Asia. Barranquilla se convirtió en el principal puerto de Colombia, y con su nivel de
                        industrialización y modernidad le valió a la ciudad el sobrenombre de "Puerta Dorada de Colombia" (en español: La Puerta de Oro de Colombia). En la década de 1940,
                        Barranquilla era la segunda ciudad más grande de Colombia y una de las ciudades más modernas del Caribe y América del Sur; Posteriormente, las administraciones locales,
                        debido a la corrupción generalizada en sus filas, provocaron un declive en el nivel de vida. A medida que aumentaba la inversión del gobierno en otras ciudades colombianas,
                        la posición nacional de Barranquilla se eclipsaba. <br></br>
                           </p>
                        <img src={Vmundo} />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default index
