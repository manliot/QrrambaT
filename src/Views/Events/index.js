import React, { useRef } from "react";
import SearchBar from "../../components/common/SearchBar";
import Navbar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";
import styles from "../../css/Views/Events.module.css";
import CardEvent from "../../components/common/Card_event";
import Bq from "../../assets/Barranquilla.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { useInView } from "react-intersection-observer";

const Events = () => {

  const { ref, inView /* entry */ } = useInView({
    rootMargin: "-150px",
    /* threshold: 0.5, */
  });

  return (
    <div className={styles["container"]}>
      <Navbar selected={2} type={`${inView ? "" : "search"}`} />
      <header className={styles["header"]}>
        <div ref={ref} className={styles["search-container"]}>
          {inView && <SearchBar searchTxt="Que estas buscando" />}
        </div>
      </header>
      <div className={styles["title"]}>
        <h2>Eventos Culturales</h2>
      </div>
      <div className={styles["three-columns"]}>
        <section className={styles["column"]}>
          <CardEvent
            title="Jueves de cine: El titanic"
            time="4:30 pm"
            place="Parque Tomas Arrieta"
            url_img={Bq}
          />
        </section>
        <section className={styles["column"]}>
          <CardEvent
            title="Jueves de cine: El titanic"
            time="4:30 pm"
            place="Parque Tomas Arrieta"
            url_img={Bq}
          />
        </section>
        <section className={styles["column"]}>
          <CardEvent
            title="Jueves de cine: El titanic"
            time="4:30 pm"
            place="Parque Tomas Arrieta"
            url_img={Bq}
          />
        </section>
      </div>
    </div>
  );
};

export default Events;
