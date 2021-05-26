import React, { useRef } from 'react';
import SearchBar from '../../components/common/SearchBar'
import Navbar from '../../components/layout/NavBar'
import styles from '../../css/Views/Home.module.css'
import Bq from '../../assets/Barranquilla.jpeg'
import Carnaval from '../../assets/Carnaval.jpg'
import PBolivar from "../../assets/P_BOLIVAR.jpg"
import Cate from '../../assets/Catedral.jpg'
import Malec from '../../assets/malecon.jpg'
import Header from '../../components/layout/Header'

import { useInView } from 'react-intersection-observer';

import Footer from '../../components/layout/Footer'
import CardTxtImg from '../../components/common/Card_txt_img'
import CardGallery from '../../components/common/Card_gallery'

function Index() {
    const navbar_ref = useRef(null)
    const { ref, inView, entry } = useInView({
        rootMargin: '-125px',
        threshold: 1,
    });

    return (
        <>
            <Navbar ref={navbar_ref} color={inView ? 0 : 1} />
            <Header refe={ref} />
            <div className={styles['content']} >
                <SearchBar searchTxt='Que estas buscando' />
                <section>
                    <CardTxtImg title='Conoce Barranquilla Colombia'
                        content={`Barranquilla ( español americano:  [baraŋˈkiʝa]) es el distrito capital del departamento de Atlántico en Colombia .
                        Está ubicada cerca del Mar Caribe y es la ciudad más grande y el tercer puerto en la región de la Costa Caribe Norte;
                        en 2018 tenía una población de 1.206.319, lo que la convierte en la cuarta ciudad más poblada de Colombia después de Bogotá ,
                            Medellín y Cali.
                            Barranquilla se encuentra estratégicamente junto al delta del río Magdalena , a 7.5 kilómetros (4.7 millas)
                            (originalmente 25 kilómetros (16 millas) antes del rápido crecimiento urbano) de su desembocadura en el Mar Caribe,
                            sirviendo como puerto para el transporte fluvial y marítimo dentro de Colombia.`}
                        url_img={Bq}
                        color={1}
                    />
                </section>
                <section >
                    <CardTxtImg title='Carnaval de barranquilla'
                        content={`El Carnaval de Barranquilla es una de las celebraciones folclóricas más importantes de Colombia y uno de los carnavales más grandes del mundo. El carnaval tiene tradiciones que
                        se remontan al siglo XIX. Cuatro días antes de la Semana Santa, Barranquilla se engalana para recibir a turistas nacionales y extranjeros y se une a los habitantes de la ciudad
                        para disfrutar de cuatro días de intensa fiesta. Durante el carnaval, las actividades normales de Barranquilla se dejan de lado ya que la ciudad se llena de bailes callejeros,
                        desfiles musicales y de disfraces. El Carnaval de Barranquilla incluye bailes como el paloteo español, Congo africano, y mico y micas indígenas.
                           `}
                        url_img={Carnaval}
                        color={0}
                    />
                </section>


                <section className={styles["sec-Gallery"]}>
                    <h2>Galeria</h2>
                    <div id={styles["Gallery"]}>

                        <CardGallery
                            img={PBolivar}
                            title="Paseo Bolivar (1930)"
                            description="Es la avenida más importante de Barranquilla, Colombia."
                        />

                        <CardGallery
                            img={Cate}
                            title="Catedral Maria Reina"
                            description="Es una iglesia catedralicia de culto católico dedicada a la Santísima Virgen María Reina. "
                        />

                        <CardGallery
                            img={Malec}
                            title="Malecon del Rio"
                            description="Se desarrolla a lo largo de cinco kilómetros de la ribera occidental del río Magdalena"
                        />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Index
