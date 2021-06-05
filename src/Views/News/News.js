import React from "react";
import SearchBar from "../../components/common/SearchBar";
import Navbar from "../../components/layout/NavBar";
import styles from "../../css/Views/News.module.css";
import Bq from "../../assets/Barranquilla.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardNews from "../../components/common/Card_news";

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
          <h3 className={styles["title"]}>Titulo de la noticia</h3>
          <h6 className={styles["author"]}>Autor: autor ejemplo</h6>
          <p>
            Google Noticias es un agregador y buscador de noticias automatizado
            que rastrea de forma constante la información de los principales
            medios de comunicación en línea. El sitio web de Google News,
            elaborado por Google, se actualiza cada 15 minutos y fue lanzado en
            versión beta en abril de 2002. Existen más de 40 ediciones
            regionales de en diversos idiomas, entre los que se incluyen el
            alemán, el árabe, el chino, el coreano, el francés, el griego, el
            hebreo, el hindi, el neerlandés, el inglés, el italiano, el japonés,
            el noruego, el portugués, el ruso y el sueco. Cada una de dichas
            ediciones está adaptada específicamente a los lectores de los
            respectivos países. Los artículos se seleccionan y se clasifican
            mediante un sistema informatizado que evalúa, entre otras cosas, la
            frecuencia y los sitios en los que aparece una noticia.
            Consecuentemente, las noticias se escogen independientemente de la
            ideología o el punto de vista político, y el usuario puede elegir de
            entre una amplia variedad de perspectivas sobre un mismo hecho. La
            promoción de este sitio asegura neutralidad en la selección de las
            noticias mostradas debido a que en la misma no existe intervención
            humana. La versión en inglés tiene más secciones que el resto de
            versiones, como la sección local y la de "Editors' Picks". La
            versión de España ha dejado de funcionar desde el 16 de diciembre de
            2014.1​ En 2014 se desarrolló la versión para móviles, la cual se
            incluía por defecto en Android Lollipop.
          </p>
        </div>
        <div className={styles["secondary"]}>
          <h3>Otras noticias</h3>
          <CardNews
            title="Noticia ejemplo"
            author="autor ejemplo"
            date="01/01/2021"
            short="descripcion ejemplo"
            url_img={Bq}
          />
          <CardNews
            title="Noticia ejemplo"
            author="autor ejemplo"
            date="01/01/2021"
            short="descripcion ejemplo"
            url_img={Bq}
          />
          <CardNews
            title="Noticia ejemplo"
            author="autor ejemplo"
            date="01/01/2021"
            short="descripcion ejemplo"
            url_img={Bq}
          />
          <CardNews
            title="Noticia ejemplo"
            author="autor ejemplo"
            date="01/01/2021"
            short="descripcion ejemplo"
            url_img={Bq}
          />
          <CardNews
            title="Noticia ejemplo"
            author="autor ejemplo"
            date="01/01/2021"
            short="descripcion ejemplo"
            url_img={Bq}
          />
        </div>
      </div>
    </div>
  );
};

export default News;
