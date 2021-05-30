import { useState, useContext } from 'react'
import Navbar from '../../components/layout/NavBar'
import Styles from '../../css/Views/NewPlaces.module.css';
import { Context } from '../../context/StaticContext'
const NewPlace = () => {
    const contextAuth = useContext(Context)
    const [name, setname] = useState('')
    const [type, setType] = useState('')
    const [subtype, setSubtype] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [web, setWeb] = useState('')
    const [del, setDel] = useState(false)
    const [card, setCard] = useState(false)
    const [description, setDescription] = useState('')
    const [icon, setIcon] = useState('')
    const [images, setimages] = useState({ prin: '', sec1: '', sec2: '', sec3: '', sec4: '' })
    const [services, setservices] = useState({
        bar: false,
        parqueadero: false,
        piscina: false,
        reserva: false,
        wifi: false,
    })
    const [bioseg, setBioseg] = useState({
        alcohol: false,
        mascarilla: false,
        temp: false,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name !== '' && type !== '...' && subtype !== '' && phone !== '' && address !== '' && description !== '' && icon !== '' && !images.includes('')) {
            const place = {
                address,
                bioseg,
                card,
                del,
                description,
                icon,
                images,
                name,
                phone,
                services,
                subtype,
                type,
                web,
                creador:contextAuth.user.id
            }
            console.log("lugar a guardar : ", place)
        } else {
            alert("debe llenar campos obligaorios e imagenes")
        }
    }
    const changeValueArray = (prop, array) => {
        array[prop] = !array[prop]
        return (array)
    }
    return (
        <>
            <Navbar color={1} />
            <form onSubmit={handleSubmit} className={`row container-fluid mb-5 ${Styles['container']} `}>
                <h2 className='col-12 mb-5'>Añadir un nuevo sitio</h2>
                <div className='col-12 text-left'>
                    <p className='text-left'><span className='text-danger'>* </span>Campos obligatorios </p>
                </div>
                <div className='col-7 '>
                    <div className="mb-3 row">
                        <label for='name' className={`col-2 col-form-label`}>Nombre <span className='text-danger'>*</span> </label>
                        <div className='col-6'>
                            <input id='name' onChange={event => setname(event.target.value)} className='form-control'></input>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for='type' className={`col-2 col-form-label`}>Tipo <span className='text-danger'>*</span></label>
                        <div className='col-4'>
                            <select id='type' onChange={event => { setType(event.target.value) }} className="form-select" aria-label="Default select example">
                                <option selected>...</option>
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
                    <div className="mb-3 row">
                        <label for='subtype' className={`col-2 col-form-label`}>Subtipo <span className='text-danger'>*</span></label>
                        <div className='col-4'>
                            <input id='subtype' onChange={event => setSubtype(event.target.value)} className='form-control'></input>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for='phone' className={`col-2 col-form-label`}>Telefono <span className='text-danger'>*</span></label>
                        <div className='col-3'>
                            <input id='phone' onChange={event => setPhone(event.target.value)} className='form-control'></input>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for='address' className={`col-2 col-form-label`}>Direccion <span className='text-danger'>*</span></label>
                        <div className='col-3'>
                            <input id='address' onChange={event => setAddress(event.target.value)} className='form-control'></input>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for='web' className={`col-2 col-form-label`}>Pagina web </label>
                        <div className='col-6'>
                            <input id='web' onChange={event => setWeb(event.target.value)} className='form-control'></input>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="form-check-label col-2" for="delivery">Domicilio </label>
                        <div className="form-check form-switch col-4">
                            <input onChange={() => setDel(!del)} className="form-check-input " type="checkbox" id="delivery" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="form-check-label col-2" for="credit-card">Acepta Tarjeta de credito </label>
                        <div className="form-check form-switch col-4">
                            <input onChange={() => setCard(!card)} className="form-check-input " type="checkbox" id="credit-card" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="description" className="form-label">Descripcion e informacion adicional <span className='text-danger'>*</span></label>
                        <div className='col-8 offset-2'>
                            <textarea onChange={event => setDescription(event.target.value)} className="form-control" id="description" rows="7"></textarea>
                        </div>
                    </div>
                </div>
                <div className='col-5 '>
                    <div className="mb-5">
                        <h3 className='mb-3'>Logo del Sitio <span className='text-danger'>* </span></h3>
                        <div className='d-flex justify-content-start'>
                            <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" className={`${Styles['img-logo']} rounded float-star`} alt="Logo" />
                        </div>
                        <div className="d-flex justify-content-start">
                            <div className="btn btn-primary">
                                <label for="img-1" >Choose file</label>
                                <input id="img-1" className={Styles['input-file']} type="file" />
                            </div>
                        </div>
                    </div>
                    <h3 className="col-12 mb-4" >Otros servicios</h3>
                    <div className="mb-3 row">
                        <div className="col-6">
                            <div className="form-check form-switch offset-2 col-8">
                                <label className="form-check-label " for="delivery">Wifi </label>
                                <input onChange={() => setservices(changeValueArray('wifi', services))}
                                    className="form-check-input "
                                    type="checkbox" id="delivery"
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-check form-switch offset-2 col-8">
                                <label className="form-check-label " for="parqueadero">Parqueadero </label>
                                <input onChange={() => setservices(changeValueArray('parqueadero', services))} className="form-check-input " type="checkbox" id="parqueadero" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-check form-switch offset-2 col-8">
                                <label className="form-check-label " for="piscina">Piscina </label>
                                <input onChange={() => setservices(changeValueArray('piscina', services))} className="form-check-input " type="checkbox" id="piscina" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-check form-switch offset-2 col-8">
                                <label className="form-check-label " for="bar">Bar </label>
                                <input onChange={() => setservices(changeValueArray('bar', services))} className="form-check-input " type="checkbox" id="bar" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-check form-switch offset-2 col-8">
                                <label className="form-check-label " for="reserva">Reserva </label>
                                <input onChange={() => setservices(changeValueArray('reserva', services))} className="form-check-input " type="checkbox" id="reserva" />
                            </div>
                        </div>
                    </div>

                    <h3 className=" col-12 mb-4text-left">Bioseguridad</h3>
                    <div className="mb-3 row">
                        <div className="col-6">
                            <div className="form-check form-switch offset-2 col-8">
                                <label className="form-check-label " for="Mascarilla">Mascarilla </label>
                                <input onChange={() => setBioseg(changeValueArray('mascarilla', bioseg))} className="form-check-input " type="checkbox" id="Mascarilla" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-check form-switch offset-2 col-8">
                                <label className="form-check-label " for="Alcohol">Alcohol </label>
                                <input onChange={() => setBioseg(changeValueArray('alcohol', bioseg))} className="form-check-input " type="checkbox" id="Alcohol" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-check form-switch offset-2 col-8">
                                <label className="form-check-label " for="Temperarura">Tomar Temperarura </label>
                                <input onChange={() => setBioseg(changeValueArray('temp', bioseg))} className="form-check-input " type="checkbox" id="Temperarura" />
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="col-12  mt-5" >Imagenes <span className='text-danger'>* </span></h3>
                <p className="col-12 mb-5 ">Debe añadir 5 imagenes</p>
                <div className='col-12 row'>
                    <div className='col-3'>
                        <div className="file-field">
                            <div className="z-depth-1-half mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" className={`${Styles['images']} img-fluid `}
                                    alt="example placeholder" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="btn btn-primary">
                                    <label for="img-1" >Choose file</label>
                                    <input id="img-1" className={Styles['input-file']} type="file" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="file-field">
                            <div className="z-depth-1-half mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" className={`${Styles['images']} img-fluid `}
                                    alt="example placeholder" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="btn btn-primary">
                                    <label for="img-1" >Choose file</label>
                                    <input id="img-1" className={Styles['input-file']} type="file" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="file-field">
                            <div className="z-depth-1-half mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" className={`${Styles['images']} img-fluid `}
                                    alt="example placeholder" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="btn btn-primary">
                                    <label for="img-1" >Choose file</label>
                                    <input id="img-1" className={Styles['input-file']} type="file" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="file-field">
                            <div className="z-depth-1-half mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" className={`${Styles['images']} img-fluid `}
                                    alt="example placeholder" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="btn btn-primary">
                                    <label for="img-1" >Choose file</label>
                                    <input id="img-1" className={Styles['input-file']} type="file" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="file-field">
                            <div className="z-depth-1-half mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" className={`${Styles['images']} img-fluid `}
                                    alt="example placeholder" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="btn btn-primary">
                                    <label for="img-1" >Choose file</label>
                                    <input id="img-1" className={Styles['input-file']} type="file" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <input className="btn btn-success mt-5 col-2 offset-5" id="img-1" value='Listo' type="submit" />
            </form>


        </>
    )
}

export default NewPlace