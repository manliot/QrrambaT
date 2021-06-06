import React, { useEffect, useState } from "react";
import SearchBar from "../../components/common/SearchBar";
import Navbar from "../../components/layout/NavBar";
import { getAllServices } from '../../firebase/services/Firestorage'
import styles from "../../css/Views/Events.module.css";
import Card_service from "../../components/common/Card_service";
import LoadinC from '../../components/common/Loading'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import { useInView } from "react-intersection-observer";


const TouristServices = (props) => {
    const [services, setServices] = useState(null)
    const [busquedaTxt, setBusquedaTxt] = useState('')
    const [services_filter, setServicesfilter] = useState(null)

    //esa funcion guarda todos los places guardados en firebase en el estado del componente
    //solo se ejecuta la primera vez
    useEffect(() => {
        const fetchAllServices = async () => {
            const services_ = await getAllServices()
            setServices(services_)
            setServicesfilter(services_)
        }
        fetchAllServices()
    }, [])

    /* Esta funcion se la mandamos a la searchbar y ella se encarga de llamarla cuando
    el texto de busqueda cambia.
     */
    const filter_services = (filter_text) => {
        setBusquedaTxt(filter_text)
        if (filter_text === '') {
            setServicesfilter(services)
        } else {
            const filter_result = services.filter(place => place.name.toLowerCase().includes(filter_text.toLowerCase()))
            setServicesfilter(filter_result)
        }
    }

    //cuando el componte que se asignemos ref este a 150px de salir de la pantalla
    //la variable inView cambia su valor (puede tomar  true o false)
    const { ref, inView, /* entry */ } = useInView({
        rootMargin: '-150px',
    });

    //si places es nulo (es decir estamos esperando la respuesta de la peticion a firebase)
    //renderiza un sniper indicando que esta cargando la pagina
    if (!services || !services_filter) {
        return (
            <div className="vh-100 vw-100 " >
                <LoadinC />
            </div>
        )
    }
    return (
        <div className={styles["container"]}>
            <Navbar Func={filter_services} valueSearchVar={busquedaTxt} selected={2} type={`${inView ? "" : "search"}`} />
            <header className={styles["header"]}>
                <div ref={ref} className={styles["search-container"]}>
                    {inView && <SearchBar Func={filter_services} valueTxt={busquedaTxt} searchTxt="Que estas buscando" />}
                </div>
            </header>
            <div className={styles["container"]}>
                <div className={styles["title"]}>
                    <h2>Servicios Turisticos</h2>
                </div>
                <div className={styles["three-columns"]}>
                    {
                        services_filter.map(((service, index) => {
                            return (
                                <section key={`${service.creador}+ ${index}`} className={styles["column"]}>
                                    <Card_service
                                        title={service.name}
                                        horario={service.horario}
                                        descripcion={service.descripcion}
                                        url_img={service.photoURL}
                                    />
                                </section>
                            )
                        }))
                    }
                </div>
            </div>
        </div>
    );
}

export default TouristServices
