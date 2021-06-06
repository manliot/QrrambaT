import styles from '../../css/componets/layout/NavBar.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import SearchBar from '../common/SearchBar'
import { useContext } from 'react'
import { Context } from '../../context/StaticContext'
import { LoginWithGoogle } from '../../firebase/services/GoogleAuth'
import { db } from '../../firebase/firebase_config'

function NavBar({ color, type, selected, valueSearchVar, Func }) {
  const contextAuth = useContext(Context)

  const login = async () => {
    LoginWithGoogle()
      .then(({ user, isNewUser, /* token */ }) => {

        const userLogged = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          phone: user.phoneNumber,
          profile_pic: user.photoURL
        }
        contextAuth.login(userLogged)
        if (isNewUser) {//saved in db
          db.collection('users').doc(user.uid).set(userLogged)
            .then((res) => {
              alert('Bienvenido a Qrramba, aqui encontraras todo lo necesario para tener una experiencia inolvidable en barranquilla. Ahora puedes añadir nuevos sitios, eventos o servicios')
            })
            .catch((err) => {
              alert(`error inesperado ${err}`);
            })
        } else {

          alert('Bienvenido nuevamente a Qrramba. Recuerda que puedes añadir nuevos sitios, eventos o servicios')
        }
      })
      .catch((err) => {
        alert(`error inesperado ${err}`);
      })
  }
  const logout = () => {
    contextAuth.logout()
  }
  return (
    <div className={`${styles['container']} ${color === 1 ? styles['dark'] : ''} ${type === 'search' ? styles['bg-y'] : ''}`}>
      <Link to="/">
        <img src={Logo} className={styles['logo-img']} alt='icono de qrramba' />
      </Link>
      { type === 'search'
        ? <div className={styles['search-container']}>
          <SearchBar Func={Func}
            valueTxt={valueSearchVar}
            searchTxt='Que lugar estas buscando'
          />
        </div>
        :
        <div className={styles['link-container']}>
          <div >
            <Link to="/places" className={styles['link']}>Hoteles, restaurantes y lugares</Link>
            <hr className={`${styles['hr']} ${selected !== 1 ? styles['hide'] : ''}`} />
          </div>
          <div>
            <Link to="/events" className={styles['link']}>Eventos Culturales</Link>
            <hr className={`${styles['hr']} ${selected !== 2 ? styles['hide'] : ''}`} />
          </div>
          <div>
            <Link to="/services" className={styles['link']}>Servicios turisticos</Link>
            <hr className={`${styles['hr']} ${selected !== 3 ? styles['hide'] : ''}`} />
          </div>
          <div>
            <Link to="/thingstodo" className={styles['link']}>Cosas para hacer</Link>
            <hr className={`${styles['hr']} ${selected !== 4 ? styles['hide'] : ''}`} />
          </div>
          <div>
            <Link to='/news' className={styles['link']}>Noticias</Link>
            <hr className={`${styles['hr']} ${selected !== 5 ? styles['hide'] : ''} `} />
          </div>
          <div>
            <Link to='#' className={styles['link']}>Comunidad</Link>
            <hr className={`${styles['hr']} ${selected !== 6 ? styles['hide'] : ''} `} />
          </div>
        </div>
      }
      <div className={styles['user-section']}>
        {contextAuth.user
          ? <>
            <div className="dropdown">
              <Link
                to='#'
                className={`dropdown-toggle ${styles['link']} ${styles['link-new']} ${color === 1 ? styles['yellow'] : ''}`}
                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
              >
                <span>+</span>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link className="dropdown-item" to="/new-place">Agregar nuevo sitio turistico</Link></li>
                <li><Link className="dropdown-item" to="/new-event">Agregar evento cultural</Link></li>
                <li><Link className="dropdown-item" to="/new-service">Agregar un servicio</Link></li>
              </ul>
            </div>
            <div className="dropdown">
              <Link to='#' className={styles['link']}
                id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"
              >
                <img
                  src={contextAuth.user.profile_pic}
                  className={styles['user-pic']}
                  alt="foto de perfil"
                />
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                <li><span className="dropdown-item">{contextAuth.user.name}  </span> </li>
                <br className="primary"></br>
                <li><Link className="dropdown-item" to="#">Perfil</Link></li>
                <li><Link onClick={logout} className="dropdown-item" to="#">Cerrar Sesion</Link></li>
              </ul>
            </div>
          </>
          : <Link to='#' onClick={login} className={styles['rounded-btn']}>
            <span>Ingresa</span>
          </Link>
        }
      </div>

    </div>
  )
}

export default NavBar
