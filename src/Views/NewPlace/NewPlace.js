import { useState, useContext } from 'react'
import Navbar from '../../components/layout/NavBar'
import Styles from '../../css/Views/NewPlaces.module.css';
import { Context } from '../../context/StaticContext'
import { db } from '../../firebase/firebase_config'
import InputTxt from '../../components/common/InputTxt'
import ImageUpload from '../../components/common/ImageUpload'
import SwitchTxt from '../../components/common/SwitchTxt'
const NewPlace = () => {
    const contextAuth = useContext(Context)
    const [name, setname] = useState('')
    const [type, setType] = useState('')
    const [subtype, setSubtype] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [web, setWeb] = useState('')
    const [del, setDel] = useState(false)
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const [horas, setHoras] = useState('')
    const [card, setCard] = useState(false)
    const [description, setDescription] = useState('')
    const [iconURL, setIconURL] = useState('')
    //other services ---> [wifi,parqueadero, piscina, bar,reserva]
    const [otherServices, setOtherServices] = useState([false, false, false, false, false])
    //other Bioseguridad ---> [Mascarilla,Alcohol,Temperatura]
    const [bioseguridad, setbioseguridad] = useState([false, false, false])

    const [imagesURL, setimagesURL] = useState(['', '', '', '', ''])
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log({
            address, bioseguridad, otherServices, lat, lon, horas, card, del, description, iconURL, imagesURL, name, phone, subtype, type, web, creador: contextAuth.user.id
        })
        if (name !== '' && horas !== '' && type !== '...' && subtype !== '' && phone !== '' && address !== '' && lat !== '' && lon !== '' && description !== '' && iconURL !== '' && imagesURL['prin'] !== ('') && imagesURL['sec1'] !== ('') && imagesURL['sec2'] !== ('') && imagesURL['sec3'] !== ('') && imagesURL['sec4'] !== ('')) {
            const place = {
                address, bioseguridad, otherServices, lat, lon, horas, card, del, description, iconURL, imagesURL, name, phone, subtype, type, web, creador: contextAuth.user.id
            }
            console.log("lugar a guardar : ", place)
            db.collection('Places').add(place)
                .then(() => {
                    alert('Se guardó correctamente')
                })
                .catch((e) => alert('Error'))

        } else {
            alert("debe llenar campos obligaorios e imagenes")
        }
    }

    const updateBioseg = (index) => {
        bioseguridad[index] = !bioseguridad[index]
        setbioseguridad(bioseguridad)
        console.log(bioseguridad)
    }
    const updateOtherServices = (index) => {
        otherServices[index] = !otherServices[index]
        setOtherServices(otherServices)
        console.log(otherServices)
    }
    const updateImagesURL = (url, index) => {
        imagesURL[index] = url
        setimagesURL(imagesURL)
        console.log(imagesURL)
    }
    return (
        <>
            <Navbar color={1} />
            <div className='h-100'>
                {contextAuth.user
                    ? <>
                        <form onSubmit={handleSubmit} className={`row container-fluid mb-5 ${Styles['container']} pb-5`}>
                            <h2 className='col-12 mb-5'>Añadir un nuevo sitio</h2>
                            <div className='col-12 text-left'>
                                <p className='text-left'><span className='text-danger'>* </span>Campos obligatorios </p>
                            </div>
                            <div className='col-7 '>
                                <InputTxt text={'Nombre'} Fn={setname} required={true} n_margin={6} />
                                <div className="mb-3 row">
                                    <label for='type' className={`col-2 col-form-label`}>Tipo<span className='text-danger'>*</span></label>
                                    <div className='col-4'>
                                        <select id='type' onChange={event => { setType(event.target.value) }} className="form-select" aria-label="Default select example">
                                            <option value='...'>...</option>
                                            <option value="Restaurante">Restaurante</option>
                                            <option value="Hotel">Hotel</option>
                                            <option value="Aereopuerto">Aereopuerto</option>
                                            <option value="Centro comercial">Centro Comercial</option>
                                            <option value="Parque">Parque</option>
                                            <option value="Gimnasio">Gimnasio</option>
                                            <option value="Bar">Bar</option>
                                        </select>
                                    </div>
                                </div>
                                <InputTxt text={'Subtipo'} Fn={setSubtype} required={true} n_margin={6} />
                                <InputTxt text={'Telefono'} Fn={setPhone} required={true} n_margin={4} />
                                <InputTxt text={'Horario'} Fn={setHoras} required={true} n_margin={4} />
                                <InputTxt text={'Direccion'} Fn={setAddress} required={true} n_margin={4} />
                                <InputTxt text={'Latitud'} Fn={setLat} required={true} n_margin={3} />
                                <InputTxt text={'Longitud'} Fn={setLon} required={true} n_margin={3} />
                                <InputTxt text={'PaginaWeb'} Fn={setWeb} required={false} n_margin={6} />
                                <SwitchTxt title='Domicilio' Fn={() => setDel(!del)} orientacion='lr' />
                                <SwitchTxt title='Tarjeta de credito' Fn={() => setCard(!card)} orientacion='lr' />

                                <div className="mb-3 mt-5">
                                    <label for="description" className="form-label">Descripcion e informacion adicional <span className='text-danger'>*</span></label>
                                    <div className='col-8 offset-2'>
                                        <textarea onChange={event => setDescription(event.target.value)} className="form-control" id="description" rows="7"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='col-5 '>
                                <div className="mb-5">
                                    <h3 className='mb-3'>Logo del Sitio <span className='text-danger'>* </span></h3>
                                    <ImageUpload Fn={setIconURL}></ImageUpload>
                                </div>
                                <h3 className="col-12 mb-4" >Otros servicios</h3>
                                <div className="mb-3 row">
                                    <div className="col-6">
                                        <SwitchTxt title='Wifi' Fn={() => updateOtherServices(0)} orientacion='rl' />
                                    </div>
                                    <div className="col-6">
                                        <SwitchTxt title='Parqueadero' Fn={() => updateOtherServices(1)} orientacion='rl' />
                                    </div>
                                    <div className="col-6">
                                        <SwitchTxt title='Piscina' Fn={() => updateOtherServices(2)} orientacion='rl' />
                                    </div>
                                    <div className="col-6">
                                        <SwitchTxt title='Bar' Fn={() => updateOtherServices(3)} orientacion='rl' />
                                    </div>
                                    <div className="col-6">
                                        <SwitchTxt title='Reserva' Fn={() => updateOtherServices(4)} orientacion='rl' />
                                    </div>
                                </div>

                                <h3 className=" col-12 mb-4text-left">Bioseguridad requerida</h3>
                                <div className="mb-3 row">
                                    <div className="col-6">
                                        <SwitchTxt title='Mascarilla' Fn={() => updateBioseg(0)} orientacion='rl' />
                                    </div>
                                    <div className="col-6">
                                        <SwitchTxt title='Alcohol' Fn={() => updateBioseg(1)} orientacion='rl' />
                                    </div>
                                    <div className="col-6">
                                        <SwitchTxt title='Alcohol' Fn={() => updateBioseg(2)} orientacion='rl' />
                                    </div>
                                </div>
                            </div>
                            <h3 className="col-12  mt-5" >Imagenes <span className='text-danger'>* </span></h3>
                            <p className="col-12 mb-5 ">Debe añadir 5 imagenes</p>
                            <div className='col-12 row'>
                                <div className='col-3 mb-4'>
                                    <ImageUpload Fn={(url) => { updateImagesURL(url, 0) }} name='sec1'></ImageUpload>
                                </div>
                                <div className='col-3 mb-4'>
                                    <ImageUpload Fn={(url) => { updateImagesURL(url, 1) }} name='sec2'></ImageUpload>
                                </div>
                                <div className='col-3 mb-4'>
                                    <ImageUpload Fn={(url) => { updateImagesURL(url, 2) }} name='sec3'></ImageUpload>
                                </div>
                                <div className='col-3 mb-4'>
                                    <ImageUpload Fn={(url) => { updateImagesURL(url, 3) }} name='sec4'></ImageUpload>
                                </div>
                                <div className='col-3 mb-4'>
                                    <ImageUpload Fn={(url) => { updateImagesURL(url, 4) }} name='sec5'></ImageUpload>
                                </div>
                            </div>
                            <input className="btn btn-success mt-5 col-2 offset-5" id="img-1" value='Listo' type="submit" />
                        </form>
                    </>
                    : <div className={`row container-fluid mb-5 ${Styles['container']} `}>
                        <h3>Tienes que autenticarte bell@ :)</h3>
                    </div>

                }
            </div>
        </>
    )
}

export default NewPlace
