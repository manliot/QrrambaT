import { useState, useContext } from 'react'
import Navbar from '../../components/layout/NavBar'
import InputTxt from '../../components/common/InputTxt'
import { Context } from '../../context/StaticContext'
import { db } from '../../firebase/firebase_config'
import ImageUpload from '../../components/common/ImageUpload'
import Sad from '../../assets/sad.svg'
import Styles from '../../css/Views/NewService.module.css';
import SwitchTxt from '../../components/common/SwitchTxt'

const NewService = (props) => {
    const context = useContext(Context)
    const [name, setName] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState('')
    const [negociable, setNegociable] = useState(false)
    const [phone, setPhone] = useState('')
    const [horario, sethorario] = useState('')
    const [photoURL, setPhotoURL] = useState('')
    const [type, settype] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        console.log({
            name, descripcion, precio, negociable, phone, horario, photoURL, type, creador: context.user.id
        })
        if (name !== '' && horario !== '' && type !== '' && descripcion !== '' && precio !== '' && photoURL !== '' && phone !== '') {
            const service = {
                name, descripcion, precio, negociable, phone, horario, photoURL, type, creador: context.user.id
            }
            db.collection('Services').add(service)
                .then(() => {
                    props.history.push('/')
                    alert('Se guardó correctamente')
                })
                .catch((e) => alert('Error'))

        } else {
            alert("debe llenar campos obligaorios e imagenes")
        }
    }

    return (
        <>
            <Navbar color={1} />
            <div className='vh-100 pb-5'>
                {
                    context.user
                        ? <form onSubmit={handleSubmit} className={`row container-fluid mb-5 ${Styles['container']} pb-5 `}>
                            <h2 className='col-12 mb-5'>Añadir un nuevo servicio</h2>
                            <div className='col-12 text-left'>
                                <p className='text-left'><span className='text-danger'>* </span>Campos obligatorios </p>
                            </div>
                            <div className='col-7 '>
                                <InputTxt text={'Nombre'} Fn={setName} required={true} n_margin={6} />
                                <InputTxt text={'Tipo'} Fn={settype} required={true} n_margin={4} />
                                <InputTxt text={'Precio'} Fn={setPrecio} required={true} n_margin={4} />
                                <InputTxt text={'Telefono'} Fn={setPhone} required={true} n_margin={4} />
                                <InputTxt text={'Horario'} Fn={sethorario} required={true} n_margin={4} />
                                <SwitchTxt title='Negociable' Fn={() => setNegociable(!negociable)}></SwitchTxt>

                                <div className="mb-3">
                                    <label for="description" className="form-label">Descripcion e informacion adicional <span className='text-danger'>*</span></label>
                                    <div className='col-8 offset-2'>
                                        <textarea onChange={event => setDescripcion(event.target.value)} className="form-control" id="description" rows="7"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='col-5 '>
                                <h3 className="col-12  mt-5" >Imagen promocional <span className='text-danger'>* </span></h3>
                                <ImageUpload Fn={setPhotoURL}></ImageUpload>
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

export default NewService
