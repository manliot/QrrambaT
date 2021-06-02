import React, { useRef } from "react";
import SearchBar from "../../components/common/SearchBar";
import Navbar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";
import styles from "../../css/Views/ThingsToDo.module.css";
import Bq from "../../assets/Barranquilla.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CardRestaurant from "../../components/common/Card_restaurant";
import CardMall from "../../components/common/Card_mall";
import CardTour from "../../components/common/Card_tour";

import { useInView } from "react-intersection-observer";

const Events = () => {
  const { ref, inView /* entry */ } = useInView({
    rootMargin: "-150px",
    /* threshold: 0.5, */
  });

  return (
    <div className={styles["container"]}>
      <Navbar selected={4} type={`${inView ? "" : "search"}`} />
      <header className={styles["header"]}>
        <div ref={ref} className={styles["search-container"]}>
          {inView && <SearchBar searchTxt="Que estas buscando" />}
        </div>
      </header>
      <h2 className={styles["title"]}>Qué Hacer</h2>
      <h3 className={styles["subtitle"]}> Restaurantes</h3>
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
        </Carousel>
      </div>
      <h3 className={styles["subtitle"]}>Centros comerciales</h3>
      <div className={styles["carousel-div"]}>
        <Carousel className={styles["carousel"]}>
          <div className={styles["four-columns"]}>
            <section className={styles["column"]}>
              <CardMall
                title="Centro comercial"
                place="Direccion ejemplo"
                url_img={Bq}
              />
            </section>
            <section className={styles["column"]}>
              <CardMall
                title="Centro comercial"
                place="Direccion ejemplo"
                url_img={Bq}
              />
            </section>
            <section className={styles["column"]}>
              <CardMall
                title="Centro comercial"
                place="Direccion ejemplo"
                url_img={Bq}
              />
            </section>
            <section className={styles["column"]}>
              <CardMall
                title="Centro comercial"
                place="Direccion ejemplo"
                url_img={Bq}
              />
            </section>
          </div>
          <div className={styles["four-columns"]}>
            <section className={styles["column"]}>
              <CardMall
                title="Centro comercial"
                place="Direccion ejemplo"
                url_img={Bq}
              />
            </section>
            <section className={styles["column"]}>
              <CardMall
                title="Centro comercial"
                place="Direccion ejemplo"
                url_img={Bq}
              />
            </section>
            <section className={styles["column"]}>
              <CardMall
                title="Centro comercial"
                place="Direccion ejemplo"
                url_img={Bq}
              />
            </section>
            <section className={styles["column"]}>
              <CardMall
                title="Centro comercial"
                place="Direccion ejemplo"
                url_img={Bq}
              />
            </section>
          </div>
          <div className={styles["four-columns"]}>
            <section className={styles["column"]}>
              <CardMall
                title="Centro comercial"
                place="Direccion ejemplo"
                url_img={Bq}
              />
            </section>
            <section className={styles["column"]}>
              <CardMall
                title="Centro comercial"
                place="Direccion ejemplo"
                url_img={Bq}
              />
            </section>
            <section className={styles["column"]}>
              <CardMall
                title="Centro comercial"
                place="Direccion ejemplo"
                url_img={Bq}
              />
            </section>
            <section className={styles["column"]}>
              <CardMall
                title="Centro comercial"
                place="Direccion ejemplo"
                url_img={Bq}
              />
            </section>
          </div>
        </Carousel>
      </div>
      <h3 className={styles["subtitle"]}>Tours</h3>
      <div className={styles["carousel-div"]}>
        <Carousel className={styles["carousel"]}>
          <div className={styles["four-columns"]}>
            <section className={styles["column"]}>
              <CardTour
                title="Tour ejemplo"
                description="descripcion de ejemplo"
                url_img={Bq}
              />
            </section>
            <section className={styles["column"]}>
              <CardTour
                title="Tour ejemplo"
                description="descripcion de ejemplo"
                url_img={Bq}
              />
            </section>
            <section className={styles["column"]}>
              <CardTour
                title="Tour ejemplo"
                description="descripcion de ejemplo"
                url_img={Bq}
              />
            </section>
            <section className={styles["column"]}>
              <CardTour
                title="Tour ejemplo"
                description="descripcion de ejemplo"
                url_img={Bq}
              />
            </section>
          </div>
          <div className={styles["four-columns"]}>
            <section className={styles["column"]}>
              <CardTour
                title="Tour ejemplo"
                description="descripcion de ejemplo"
                url_img={Bq}
              />
            </section>
            <section className={styles["column"]}>
              <CardTour
                title="Tour ejemplo"
                description="descripcion de ejemplo"
                url_img={Bq}
              />
            </section>
            <section className={styles["column"]}>
              <CardTour
                title="Tour ejemplo"
                description="descripcion de ejemplo"
                url_img={Bq}
              />
            </section>
            <section className={styles["column"]}>
              <CardTour
                title="Tour ejemplo"
                description="descripcion de ejemplo"
                url_img={Bq}
              />
            </section>
          </div>
          <div className={styles["four-columns"]}>
            <section className={styles["column"]}>
              <CardTour
                title="Tour ejemplo"
                description="descripcion de ejemplo"
                url_img={Bq}
              />
            </section>
            <section className={styles["column"]}>
              <CardTour
                title="Tour ejemplo"
                description="descripcion de ejemplo"
                url_img={Bq}
              />
            </section>
            <section className={styles["column"]}>
              <CardTour
                title="Tour ejemplo"
                description="descripcion de ejemplo"
                url_img={Bq}
              />
            </section>
            <section className={styles["column"]}>
              <CardTour
                title="Tour ejemplo"
                description="descripcion de ejemplo"
                url_img={Bq}
              />
            </section>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Events;
