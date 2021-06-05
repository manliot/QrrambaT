import { useState, useContext } from 'react'
import Navbar from '../../components/layout/NavBar'
import InputTxt from '../../components/common/InputTxt'
import { Context } from '../../context/StaticContext'
import Styles from '../../css/Views/NewPlaces.module.css';
import { db } from '../../firebase/firebase_config'
import ImageUpload from '../../components/common/ImageUpload'
import Sad from '../../assets/sad.svg'

const NewEvent = (props) => {
    const contextAuth = useContext(Context)
    const [name, setname] = useState('')
    const [hour, sethour] = useState('')
    const [place, setplace] = useState('')
    const [date, setdate] = useState('')
    const [description, setdescription] = useState('')
    const [photoURL, setphotoURL] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        /* console.log({
            name, date, hour, place, description, photoURL, creador: contextAuth.user.id
        }) */
        if (name !== '' && hour !== '' && place !== '' && photoURL !== '') {
            const event = {
                name, date, hour, place, description, photoURL, creador: contextAuth.user.id
            }
            db.collection('Events').add(event)
                .then(() => {
                    props.history.push('/events')
                    alert('Se guardó correctamente')
                })
                .catch((e) => alert('Error'))

        } else {
            alert("debe llenar campos obligatorios e imagenes")
        }
    }
    return (
        <>
            <Navbar color={1} />
            <div className='vh-100 pb-5'>

                {
                    contextAuth.user
                        ? <form onSubmit={handleSubmit} className={`row container-fluid mb-5 ${Styles['container']} pb-5`}>
                            <h2 className='col-12 mb-5'>Añadir un nuevo evento</h2>
                            <div className='col-12 text-left'>
                                <p className='text-left'><span className='text-danger'>* </span>Campos obligatorios </p>
                            </div>
                            <div className='col-7 '>
                                <InputTxt text={'Nombre'} Fn={setname} required={true} n_margin={6} />
                                <InputTxt text={'Lugar'} Fn={setplace} required={true} n_margin={4} />
                                <InputTxt text={'Fecha'} Fn={sethour} required={true} n_margin={3} />
                                <InputTxt text={'Hora'} Fn={setdate} required={true} n_margin={3} />
                                <div className="mb-3">
                                    <label for="description" className="form-label">Descripcion e informacion adicional <span className='text-danger'>*</span></label>
                                    <div className='col-8 offset-2'>
                                        <textarea onChange={event => setdescription(event.target.value)} className="form-control" id="description" rows="7"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='col-5 '>
                                <h3 className="col-12  mt-5" >Imagen promocional <span className='text-danger'>* </span></h3>
                                <ImageUpload Fn={setphotoURL}></ImageUpload>
                            </div>
                            <input className="btn btn-success mt-5 col-2 offset-5" value='Listo' type="submit" />
                        </form>
                        : <div className={`row container-fluid mb-5 vh-100 ${Styles['container']} `}>
                            <img className='h-50' alt='sad' src={Sad}></img>
                            <h3>Tienes que autenticarte bell@ :)</h3>
                        </div>
                }
            </div>
        </>
    )
}

export default NewEvent
