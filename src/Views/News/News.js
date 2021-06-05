import React from "react";
import SearchBar from "../../components/common/SearchBar";
import Navbar from "../../components/layout/NavBar";
import styles from "../../css/Views/News.module.css";
import Bq from "../../assets/Barranquilla.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardNews from "../../components/common/Card_news";
import { news as Data } from "./data";

import { useInView } from "react-intersection-observer";

const News = () => {
  const { ref, inView /* entry */ } = useInView({
    rootMargin: "-150px",
  });

  return (
    <div className={styles["container"]}>
      <Navbar
        color={!inView ? 1 : 0}
        selected={4}
        type={`${inView ? "" : "search"}`}
      />
      <header className={styles["header"]}>
        <div ref={ref} className={styles["search-container"]}>
          {inView && (
            <SearchBar searchTxt="Que cosas por hacer estas buscando?" />
          )}
        </div>
      </header>
      <div className={styles["two-columns"]}>
        <div className={styles["principal"]}>
          <h3 className={styles["title"]}>{Data[0].title}</h3>
          <h6 className={styles["author"]}>
            {Data[0].author} - {Data[0].date}
          </h6>
          <div className={styles["img-box"]} >
            <img className={styles["image"]} src={Data[0].img}></img>
          </div>
          <p>{Data[0].info}</p>
        </div>
        <div className={styles["secondary"]}>
          <h3>Otras noticias</h3>
          {Data.map((news) => (
            <CardNews
              title={news.title}
              author={news.author}
              date={news.date}
              description={news.description}
              url_img={news.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
