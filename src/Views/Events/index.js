import React, { useEffect, useState } from "react";
import SearchBar from "../../components/common/SearchBar";
import Navbar from "../../components/layout/NavBar";
import { Link } from "react-router-dom";
import { getAllEvents } from "../../firebase/services/Firestorage";
import styles from "../../css/Views/Events.module.css";
import CardEvent from "../../components/common/Card_event";
import LoadinC from "../../components/common/Loading";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useInView } from "react-intersection-observer";

const Events = (props) => {
  const [events, setEvents] = useState(null);
  const [events_filter, setEvents_filter] = useState(null);
  const [busquedaTxt, setBusquedaTxt] = useState("");
  useEffect(() => {
    const fetchAllplaces = async () => {
      const events_ = await getAllEvents();
      setEvents(events_);
      setEvents_filter(events_);
    };
    fetchAllplaces();
  }, []);

  const filter_events = (filter_text) => {
    /* setUpdating(true) */
    setBusquedaTxt(filter_text);
    if (filter_text === "") {
      setEvents_filter(events);
    } else {
      const filter_result = events.filter((event) =>
        event.name.toLowerCase().includes(filter_text.toLowerCase())
      );
      setEvents_filter(filter_result);
    }
    /* setUpdating(false) */
  };

  const openDetails = (evento) => {
    props.history.push('/event-details',{Event:evento})
    console.log(evento)
  }

  const { ref, inView /* entry */ } = useInView({
    rootMargin: "-150px",
    /* threshold: 0.5, */
  });

  if (!events || !events_filter) {
    return (
      <div className="vh-100 vw-100 ">
        <LoadinC />
      </div>
    );
  }

  return (
    <div className={styles["container"]}>
      <Navbar
        Func={filter_events}
        valueSearchVar={busquedaTxt}
        selected={2}
        type={`${inView ? "" : "search"}`}
      />
      <header className={styles["header"]}>
        <div ref={ref} className={styles["search-container"]}>
          {inView && (
            <SearchBar
              Func={filter_events}
              valueTxt={busquedaTxt}
              searchTxt="Que estas buscando"
            />
          )}
        </div>
      </header>
      <div className={styles["container"]}>
        <div className={styles["title"]}>
          <h2>Eventos Culturales</h2>
        </div>
        <div className={styles["three-columns"]}>
          {events_filter.map((evento, index) => {
            return (
              <div className={styles["column"]} onClick={() => {openDetails(evento)}}>
                <section
                  key={`${evento.creador}+ ${index}`}
                  
                >
                  <CardEvent
                    title={evento.name}
                    time={evento.hour}
                    place={evento.place}
                    url_img={evento.photoURL}
                  />
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
