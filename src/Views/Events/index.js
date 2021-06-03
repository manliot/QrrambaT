import React, { useEffect, useState } from "react";
import SearchBar from "../../components/common/SearchBar";
import Navbar from "../../components/layout/NavBar";
import { getAllEvents } from '../../firebase/services/Firestorage'
import styles from "../../css/Views/Events.module.css";
import CardEvent from "../../components/common/Card_event";
import LoadinC from '../../components/common/Loading'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useInView } from "react-intersection-observer";

const Events = () => {
  const [events, setEvents] = useState(null)
  const [events_filter, setEvents_filter] = useState(null)
  const [busquedaTxt, setBusquedaTxt] = useState('')
  useEffect(() => {
    const fetchAllplaces = async () => {
      const events_ = await getAllEvents()
      setEvents(events_)
      setEvents_filter(events_)
    }
    fetchAllplaces()
  }, [])
  useEffect(() => {
    console.log(events)
  }, [events_filter])

  const filter_events = (filter_text) => {
    /* setUpdating(true) */
    setBusquedaTxt(filter_text)
    if (filter_text === '') {
      setEvents_filter(events)
    } else {
      const filter_result = events.filter(event => event.name.toLowerCase().includes(filter_text.toLowerCase()))
      setEvents_filter(filter_result)
    }
    /* setUpdating(false) */
  }

  const { ref, inView /* entry */ } = useInView({
    rootMargin: "-150px",
    /* threshold: 0.5, */
  });

  if (!events || !events_filter) {
    return (
      <div class="vh-100 vw-100 " >
        <LoadinC />
      </div>
    )
  }

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
        {console.log('hola', events_filter[0].name)}
        {
          events_filter.map((evento => {
            return (<section className={styles["column"]}>
              <CardEvent
                title={evento.name}
                time={evento.hour}
                place={evento.place}
                url_img={evento.photoURL}
              />
            </section>)
          }))

        }

      </div>
    </div>
  );
};

export default Events;
