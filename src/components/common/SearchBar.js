/* import { useContext } from 'react' */
import styles from '../../css/componets/common/SearchBar.module.css'
import LocationIcon from '../../assets/location.svg'

function SearchBar(props) {

    const { searchTxt } = props

    const changetext = (e) => {
        props.Func(e.target.value)
    }
    return (
        <div className={styles['container']}>
            <img src={LocationIcon} alt="location icon" />
            <input className={styles['input-txt']}
                type='text'
                value={props.valueTxt}
                placeholder={searchTxt}
                onChange={changetext}
            />
            <button className={styles['button']}>
                <span>Buscar</span>
            </button>
        </div>
    )
}


export default SearchBar
