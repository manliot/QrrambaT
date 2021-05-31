import { useContext } from 'react'
import styles from '../../css/componets/common/SearchBar.module.css'
import LocationIcon from '../../assets/location.svg'
import { Context } from '../../context/StaticContext'
function SearchBar(props) {
    const context = useContext(Context)
    const { searchTxt } = props

    const changetext = (e) => {
        context.setSearchText(e.target.value)
    }
    return (
        <div className={styles['container']}>
            <img src={LocationIcon} alt="location icon" />
            <input className={styles['input-txt']}
                type='text'
                value={context.searchText}
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
