import React, { useRef } from 'react';
import SearchBar from '../../components/common/SearchBar'
import Navbar from '../../components/layout/NavBar'
import styles2 from './Forum.module.css';
import styles from '../../css/Views/Home.module.css'
import { useInView } from 'react-intersection-observer';
import Header from '../../components/layout/Header'
import CardForum from '../../components/common/Card_forum'

const Index = () => {
    const navbar_ref = useRef(null)
    const { ref, inView, /* entry */ } = useInView({
        rootMargin: '-125px',
        threshold: 1,
    });
    return (
        <div>
            <Navbar ref={navbar_ref} color={inView ? 0 : 1} />
            <Header refe={ref} text={'Aquí podras interactuar con la cumunidad, realizar preguntas e informartete'} />
            <div className={styles['content']} >
                <SearchBar searchTxt='Que estas buscando' />
                <section className='mt-5'>
                    <CardForum type='Cutural' title='Como '></CardForum>
                </section>
            </div>
        </div>
    )
}

export default Index
