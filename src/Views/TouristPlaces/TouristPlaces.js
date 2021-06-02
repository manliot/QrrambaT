import { useState, useEffect, useContext } from 'react'
import styles from '../../css/Views/TouristPlaces.module.css'
import Navbar from '../../components/layout/NavBar'
import SearchBar from '../../components/common/SearchBar'
import { Context } from '../../context/StaticContext'
import Map from '../../components/layout/Maps'

import { useInView } from 'react-intersection-observer';
import { getAllPlaces } from '../../firebase/services/Firestorage'
import Loadin_c from '../../components/common/Loading'


const TouristPlaces = (props) => {
  const context = useContext(Context)
  const [places, setPlaces] = useState(null)
  const [busquedaTxt, setBusquedaTxt] = useState(null)
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
    center: {
      lat: 10.86,
      lng: -74.77
    },
    zoom: 100
  }
  //cuando el componte que se asignemos ref este a 150px de salir de la pantalla
  //la variable inView cambia su valor (puede tomar  true o false)
  const { ref, inView, /* entry */ } = useInView({
    rootMargin: '-150px',
  });
  const handlePlace = (place) => {
    console.log('handle', props.history)
    context.setPlace(place)
    props.history.push('/place-details', { Place: place })

  }

  //si places es nulo (es decir estamos esperando la respuesta de la peticion a firebase)
  //renderiza un sniper indicando que esta cargando la pagina
  if (!places || !places_filter) {
    return (
      <div class="vh-100 vw-100 " >
        <Loadin_c />
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
        <section className={styles['column-one']}>
          {
            updating
              ? <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              //recorremos place_filter y oir cada elemeto (place) renderizamos
              //la card con sus daatos
              : places_filter.map((place) => {
                return <div onClick={() => handlePlace(place)}>
                  <h2>{place.name} Aqui va el compónente de los sitios</h2>
                </div>
              })
          }
        </section>
        <section className={styles['column-two']}>
          <Map initial={initial} />
        </section>
      </div>
    </div>
  )
}

export default TouristPlaces
