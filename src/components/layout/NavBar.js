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
              console.log("hola", res);
            })
            .catch((err) => {
              console.log(err);
            })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const logout = () => {
    contextAuth.logout()
  }
  return (
    <div className={`${styles['container']} ${color === 1 ? styles['dark'] : ''}`}>
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
            <Link to="#" className={styles['link']}>Servicios turisticos</Link>
            <hr className={`${styles['hr']} ${selected !== 3 ? styles['hide'] : ''}`} />
          </div>
          <div>
            <Link to="/thingstodo" className={styles['link']}>Cosas para hacer</Link>
            <hr className={`${styles['hr']} ${selected !== 3 ? styles['hide'] : ''}`} />
          </div>
          <div>
            <Link className={styles['link']}>Noticias</Link>
            <hr className={`${styles['hr']} ${selected !== 4 ? styles['hide'] : ''} `} />
          </div>
          <div>
            <Link className={styles['link']}>Comunidad</Link>
            <hr className={`${styles['hr']} ${selected !== 5 ? styles['hide'] : ''} `} />
          </div>
        </div>
      }
      <div className={styles['user-section']}>
        {contextAuth.user
          ? <>
            <div className="dropdown">
              <Link
                className={`dropdown-toggle ${styles['link']} ${styles['link-new']} ${color === 1 ? styles['yellow'] : ''}`}
                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
              >
                <span>+</span>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link class="dropdown-item" to="/new-place">Agregar nuevo sitio turistico</Link></li>
                <li><Link class="dropdown-item" to="/new-event">Agregar evento cultural</Link></li>
                <li><Link class="dropdown-item" to="/">Agregar un servicio</Link></li>
              </ul>
            </div>
            <div className="dropdown">
              <Link className={styles['link']}
                id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"
              >
                <img
                  src={contextAuth.user.profile_pic}
                  className={styles['user-pic']}
                  alt="foto de perfil"
                />
              </Link>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                <li><span class="dropdown-item">{contextAuth.user.name}  </span> </li>
                <br class="primary"></br>
                <li><Link class="dropdown-item" to="#">Perfil</Link></li>
                <li><Link onClick={logout} class="dropdown-item" to="#">Cerrar Sesion</Link></li>
              </ul>
            </div>
          </>
          : <Link onClick={login}  className={styles['rounded-btn']}>
            <span>Ingresa</span>
          </Link>
        }
      </div>

    </div>
  )
}

export default NavBar
