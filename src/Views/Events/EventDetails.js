import React, { useEffect, useState } from "react";
import SearchBar from "../../components/common/SearchBar";
import Navbar from "../../components/layout/NavBar";
import styles from "../../css/Views/EventsDetail.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useInView } from "react-intersection-observer";

const Detail = (prop) => {
  const Event = prop.location.state.Event
  const { ref, inView /* entry */ } = useInView({
    rootMargin: "-150px",
  });

  console.log("hola")
  console.log(Event)

  return (
    <div className={styles["container"]}>
      <Navbar
        color={!inView ? 1 : 0}
        selected={2}
        type={`${inView ? "" : "search"}`}
      />
      <header className={styles["header"]}>
        <div ref={ref} className={styles["search-container"]}>
          {inView && (
            <SearchBar searchTxt="Que cosas por hacer estas buscando?" />
          )}
        </div>
      </header>
      <div className={styles["content"]}>
        <h3 className={styles["title"]}>{Event.name}</h3>
        <h6 className={styles["date"]}>{Event.place} - {Event.hour} - {Event.date}</h6>
        <div className={styles["img-box"]}>
          <img className={styles["image"]} src={Event.photoURL}></img>
        </div>
        <p className={styles["description"]}>{Event.description}</p>
      </div>
    </div>
  );
};

export default Detail;
