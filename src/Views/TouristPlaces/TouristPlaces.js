import { useState, useEffect, useContext } from 'react'
import styles from '../../css/Views/TouristPlaces.module.css'
import Navbar from '../../components/layout/NavBar'
import SearchBar from '../../components/common/SearchBar'
import { Context } from '../../context/StaticContext'
import Map from '../../components/layout/Maps'
import CardPlaces from "../../components/common/Card_places";

import { useInView } from 'react-intersection-observer';
import { getAllPlaces } from '../../firebase/services/Firestorage'
import LoadinC from '../../components/common/Loading'

let center = {}

const getCenter = () => {
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    center = { lat: lat, lng: lng }
  });
}
getCenter()

const TouristPlaces = (props) => {
  const context = useContext(Context)
  const [places, setPlaces] = useState(null)
  const [busquedaTxt, setBusquedaTxt] = useState('')
  const [places_filter, setPlacesfilter] = useState(null)
  const [updating, setUpdating] = useState(false)

  //esa funcion guarda todos los places guardados en firebase en el estado del componente
  //solo se ejecuta la primera vez
  useEffect(() => {
    const fetchAllplaces = async () => {
      const places_ = await getAllPlaces()
      setPlaces(places_)
      setPlacesfilter(places_)
    }
    fetchAllplaces()
  }, [])
  /* console.log(props) */
  /* Esta funcion se la mandamos a la searchbar y ella se encarga de llamarla cuando
  el texto de busqueda cambia.
   */
  const filter_places = (filter_text) => {
    setUpdating(true)
    setBusquedaTxt(filter_text)
    if (filter_text === '') {
      setPlacesfilter(places)
    } else {
      const filter_result = places.filter(place => place.name.toLowerCase().includes(filter_text.toLowerCase()))
      setPlacesfilter(filter_result)
    }
    setUpdating(false)
  }

  const initial = {
    center: center,
    zoom: 11
  }
  //cuando el componte que se asignemos ref este a 150px de salir de la pantalla
  //la variable inView cambia su valor (puede tomar  true o false)
  const { ref, inView, /* entry */ } = useInView({
    rootMargin: '-150px',
  });
  const handlePlace = (place) => {
    props.history.push('/place-details', { Place: place })
    context.setPlace(place)
  }

  //si places es nulo (es decir estamos esperando la respuesta de la peticion a firebase)
  //renderiza un sniper indicando que esta cargando la pagina
  if (!places || !places_filter) {
    return (
      <div className="vh-100 vw-100 " >
        <LoadinC />
      </div>
    )
  }
  return (
    <div className={styles['container']}>
      <Navbar valueSearchVar={busquedaTxt}
        Func={filter_places}
        selected={1}
        type={`${inView ? '' : 'search'}`}
      />
      <header className={styles['header']}>
        <div ref={ref} className={styles['search-container']}>
          {inView &&
            <SearchBar Func={filter_places} valueTxt={busquedaTxt} searchTxt='Que lugar estas buscando' />
          }
        </div>
      </header>
      <div className={styles['two-columns']}>
        <section className={`${styles['column-one']} `}>
          {
            updating
              ? <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              //recorremos place_filter y oir cada elemeto (place) renderizamos
              //la card con sus daatos
              : <div className="px-5">
                {
                  places_filter.map((place, index) => {
                    return (
                      < div key={`${place.creador}+ ${index}`}
                        className={`${styles['btn card']} mt-5`}
                        onClick={() => handlePlace(place)}
                      >
                        <section key={`${place.creador}+ ${index}`} className={`${styles['column']} `}>
                          <CardPlaces
                            title={place.name}
                            cellp={place.phone}
                            type={place.type}
                            address={place.address}
                            url_img={place.imagesURL[0]}
                            score={(Math.random() * 5).toFixed(1)}
                          />

                        </section>
                        { //<h2>{place.name} </h2>
                          //<p><strong>Aqui va una card con la info del lugar.</strong> Shary dijo que lo haria . este componente es clickeable</p>
                        }
                      </div>
                    )
                  })
                }
              </div>
          }
        </section>
        <section className={styles['column-two']}>
          <Map initial={initial} places={places_filter} />
        </section>
      </div>
    </div>
  )
}

export default TouristPlaces
