import React from "react";
import SearchBar from "../../components/common/SearchBar";
import Navbar from "../../components/layout/NavBar";
import styles from "../../css/Views/ThingsToDo.module.css";
import Bq from "../../assets/Barranquilla.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CardRestaurant from "../../components/common/Card_restaurant";


import { useInView } from "react-intersection-observer";

const News = () => {
    const { ref, inView /* entry */ } = useInView({
        rootMargin: "-150px",
    });

    return (
        <div className={styles["container"]}>
            <Navbar color={!inView ? 1 : 0} selected={4} type={`${inView ? "" : "search"}`} />
            <header className={styles["header"]}>
                <div ref={ref} className={styles["search-container"]}>
                    {inView && <SearchBar searchTxt="Que cosas por hacer estas buscando?" />}
                </div>
            </header>
            <h2 className={styles["title"]}>Noticias </h2>
            <h3 className={styles["subtitle"]}>Últimas noticias</h3>
            <div className={styles["carousel-div"]}>
                <Carousel className={styles["carousel"]}>
                    <div className={styles["four-columns"]}>
                        <section className={styles["column"]}>
                            <CardRestaurant
                                title="Restaurante ejemplo"
                                tipo="Comida italiana"
                                price="$-$$$$$"
                                place="Direccion ejemplo"
                                url_img={Bq}
                            />
                        </section>
                        <section className={styles["column"]}>
                            <CardRestaurant
                                title="Restaurante ejemplo"
                                tipo="Comida italiana"
                                price="$-$$$$$"
                                place="Direccion ejemplo"
                                url_img={Bq}
                            />
                        </section>
                        <section className={styles["column"]}>
                            <CardRestaurant
                                title="Restaurante ejemplo"
                                tipo="Comida italiana"
                                price="$-$$$$$"
                                place="Direccion ejemplo"
                                url_img={Bq}
                            />
                        </section>
                        <section className={styles["column"]}>
                            <CardRestaurant
                                title="Restaurante ejemplo"
                                tipo="Comida italiana"
                                price="$-$$$$$"
                                place="Direccion ejemplo"
                                url_img={Bq}
                            />
                        </section>
                    </div>
                    <div className={styles["four-columns"]}>
                        <section className={styles["column"]}>
                            <CardRestaurant
                                title="Restaurante ejemplo"
                                tipo="Comida italiana"
                                price="$-$$$$$"
                                place="Direccion ejemplo"
                                url_img={Bq}
                            />
                        </section>
                        <section className={styles["column"]}>
                            <CardRestaurant
                                title="Restaurante ejemplo"
                                tipo="Comida italiana"
                                price="$-$$$$$"
                                place="Direccion ejemplo"
                                url_img={Bq}
                            />
                        </section>
                        <section className={styles["column"]}>
                            <CardRestaurant
                                title="Restaurante ejemplo"
                                tipo="Comida italiana"
                                price="$-$$$$$"
                                place="Direccion ejemplo"
                                url_img={Bq}
                            />
                        </section>
                        <section className={styles["column"]}>
                            <CardRestaurant
                                title="Restaurante ejemplo"
                                tipo="Comida italiana"
                                price="$-$$$$$"
                                place="Direccion ejemplo"
                                url_img={Bq}
                            />
                        </section>
                    </div>
                    <div className={styles["four-columns"]}>
                        <section className={styles["column"]}>
                            <CardRestaurant
                                title="Noticia 1"
                                tipo="Eventos culturales"
                                price="Entrada gratis"
                                place="Direccion ejemplo"
                                url_img={Bq}
                            />
                        </section>
                        <section className={styles["column"]}>
                            <CardRestaurant
                                title="Noticia 2"
                                tipo="Hoteles, restaurantes y lugares"
                                price="$$-$$$"
                                place="Direccion ejemplo"
                                url_img={Bq}
                            />
                        </section>

                    </div>
                </Carousel>
            </div>

        </div>

    );
};

export default News;
