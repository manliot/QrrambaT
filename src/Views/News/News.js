import React, {useState} from "react";
import SearchBar from "../../components/common/SearchBar";
import Navbar from "../../components/layout/NavBar";
import styles from "../../css/Views/News.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardNews from "../../components/common/Card_news";
import { news as Data } from "./data";

import { useInView } from "react-intersection-observer";

const News = () => {
  const[newsDetail,setnewsDetail] = useState(Data[0])

  const { ref, inView /* entry */ } = useInView({
    rootMargin: "-150px",
  });

  function selectNews(index) {
    setnewsDetail(Data[index])
  }

  return (
    <div className={styles["container"]}>
      <Navbar
        color={!inView ? 1 : 0}
        selected={5}
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
          <h3 className={styles["title"]}>{newsDetail.title}</h3>
          <h6 className={styles["author"]}>
            {newsDetail.author} - {newsDetail.date}
          </h6>
          <div className={styles["img-box"]}>
            <img className={styles["image"]} src={newsDetail.img}></img>
          </div>
          <p>{newsDetail.info}</p>
        </div>
        <div className={styles["secondary"]}>
          <h3>Otras noticias</h3>
          {Data.map((news, index) => (
            <div onClick={()=>selectNews(index)}>
              <CardNews
                title={news.title}
                author={news.author}
                date={news.date}
                description={news.description}
                url_img={news.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
