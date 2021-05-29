import styles from '../../css/componets/layout/NavBar.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import SearchBar from '../common/SearchBar'
import { useContext } from 'react'
import { Context } from '../../context/StaticContext'
import { LoginWithGoogle } from '../../firebase/services/GoogleAuth'

function NavBar({ color, type, selected }) {
    const contextAuth = useContext(Context)

    const login = async () => {
        LoginWithGoogle()
            .then(({ user, token }) => {

                const userLogged = {
                    id: 1,
                    name: user.displayName,
                    email: user.email,
                    username: 'elpillo',
                    profile_pic: user.photoURL
                }
                contextAuth.login(userLogged)
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
                    <SearchBar searchTxt='Que estas buscando' />
                </div>
                :
                <div className={styles['link-container']}>
                    <div >
                        <Link to="/places" className={styles['link']}>Sitios</Link>
                        <hr className={`${styles['hr']} ${selected !== 1 ? styles['hide'] : ''}`} />
                    </div>
                    <div>
                        <Link to="#" className={styles['link']}>Eventos Culturales</Link>
                        <hr className={`${styles['hr']} ${selected !== 2 ? styles['hide'] : ''}`} />
                    </div>
                    <div>
                        <Link to="#" className={styles['link']}>Servicios turisticos</Link>
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
                                <li><Link class="dropdown-item" href="#">Agregar nuevo sitio turistico</Link></li>
                                <li><Link class="dropdown-item" href="#">Agregar evento cultural</Link></li>
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
                                <li><Link class="dropdown-item" href="#">Perfil</Link></li>
                                <li><Link onClick={logout} class="dropdown-item" href="#">Cerrar Sesion</Link></li>
                            </ul>
                        </div>
                    </>
                    : <Link onClick={login} /* to='/login' */ className={styles['rounded-btn']}>
                        <span>Ingresa</span>
                    </Link>
                }
            </div>

        </div>
    )
}

export default NavBar
