import styles from '../../css/componets/common/SearchBar.module.css'
import LocationIcon from '../../assets/location.svg'

function SearchBar(props) {
    const { searchTxt } = props
    return (
        <div className={styles['container']}>
            <img src={LocationIcon} alt="location icon" />
            <input className={styles['input-txt']} type='text' placeholder={searchTxt}></input>
            <button className={styles['button']}>
                <span>Buscar</span>
            </button>
        </div>
    )
}


export default SearchBar
