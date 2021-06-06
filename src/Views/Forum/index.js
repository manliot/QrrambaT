import React, { useRef } from 'react';
import SearchBar from '../../components/common/SearchBar'
import Navbar from '../../components/layout/NavBar'
import styles2 from './Forum.module.css';
import styles from '../../css/Views/Home.module.css'
import { useInView } from 'react-intersection-observer';
import Header from '../../components/layout/Header'
import CardForum from '../../components/common/Card_forum'
import Data from './Data'
const Index = () => {
    const navbar_ref = useRef(null)
    const { ref, inView, /* entry */ } = useInView({
        rootMargin: '-125px',
        threshold: 1,
    });
    return (
        <div>
            <Navbar ref={navbar_ref} color={inView ? 0 : 1} />
            <Header refe={ref} text={'Aquí podras interactuar con la comunidad de barranquilla, realizar preguntas e informartete'} />
            <div className={styles['content']} >
                <SearchBar searchTxt='Que estas buscando' />
                <section className='mt-5'>
                    <h2 > Comunidad de Baranquilla</h2>
                    <p className='mb-5'>Aqui puedes interactuar con la comunidad de Barranquilla, ver las preguntas, realizar preguntas, conocer mas de la ciudad y muchas cosa mas</p>
                    <h4>Preguntas frecuentes</h4>
                    {Data.map((foro) => {
                        return (
                            <div className='mb-5'>

                                <CardForum type={foro.type} title={foro.title} text={foro.text} ></CardForum>
                            </div>
                        )
                    })}
                </section>
            </div>
        </div>
    )
}

export default Index
