import React, { useState } from "react";
import SearchBar from "../../components/common/SearchBar";
import Navbar from "../../components/layout/NavBar";
import styles from "../../css/Views/EventsDetail.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useInView } from "react-intersection-observer";

const Detail = () => {

  const { ref, inView /* entry */ } = useInView({
    rootMargin: "-150px",
  });

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
      <h3 className={styles["title"]}>Titulo</h3>
    </div>
  );
};

export default Detail;
