import Navbar from '../../components/layout/NavBar'
import Styles from '../../css/Views/NewPlaces.module.css';
const NewPlace = () => {
    return (
        <>
            <Navbar color={1} />
            <form className={`row container-fluid mb-5 ${Styles['container']} `}>
                <h2 className='col-12 mb-5'>Añadir un nuevo sitio</h2>
                <div className='col-7 '>
                    <div className="mb-3 row">
                        <label for='name' className={`col-2 col-form-label`}>Nombre </label>
                        <div className='col-6'>
                            <input id='name' className='form-control'></input>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for='type' className={`col-2 col-form-label`}>Tipo </label>
                        <div className='col-4'>
                            <select id='type' className="form-select" aria-label="Default select example">
                                <option selected>...</option>
                                <option value="1">Restaurante</option>
                                <option value="2">Hotel</option>
                                <option value="3">Aereopuerto</option>
                                <option value="4">Centro Comercial</option>
                                <option value="5">Parque</option>
                                <option value="6">Gimnasio</option>
                                <option value="7">Bar</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for='subtype' className={`col-2 col-form-label`}>Subtipo </label>
                        <div className='col-4'>
                            <input id='subtype' className='form-control'></input>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for='phone' className={`col-2 col-form-label`}>Telefono </label>
                        <div className='col-3'>
                            <input id='phone' className='form-control'></input>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for='address' className={`col-2 col-form-label`}>Direccion </label>
                        <div className='col-3'>
                            <input id='address' className='form-control'></input>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for='web' className={`col-2 col-form-label`}>Pagina web </label>
                        <div className='col-6'>
                            <input id='web' className='form-control'></input>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label class="form-check-label col-2" for="delivery">Domicilio </label>
                        <div className="form-check form-switch col-4">
                            <input className="form-check-input " type="checkbox" id="delivery" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label class="form-check-label col-2" for="credit-card"> Tarjeta de credito </label>
                        <div className="form-check form-switch col-4">
                            <input className="form-check-input " type="checkbox" id="credit-card" />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Descripcion e informacion adicional</label>
                        <div className='col-8 offset-2'>
                            <textarea className="form-control" id="description" rows="7"></textarea>
                        </div>
                    </div>
                </div>
                <div className='col-5 '>
                    <div className="mb-5">
                        <div className=' col-6'>
                            <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" className={`${Styles['img-logo']} rounded float-star`} alt="Logo" />

                        </div>
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile04" />
                                <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                            </div>
                        </div>

                    </div>
                    <h3 className="col-12 mb-4" >Otros servicios</h3>
                    <div className="mb-3 row">
                        <div className="col-6">
                            <div className="form-check form-switch offset-2 col-8">
                                <label class="form-check-label " for="delivery">Wifi </label>
                                <input className="form-check-input " type="checkbox" id="delivery" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-check form-switch offset-2 col-8">
                                <label class="form-check-label " for="parqueadero">Parqueadero </label>
                                <input className="form-check-input " type="checkbox" id="parqueadero" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-check form-switch offset-2 col-8">
                                <label class="form-check-label " for="piscina">Piscina </label>
                                <input className="form-check-input " type="checkbox" id="piscina" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-check form-switch offset-2 col-8">
                                <label class="form-check-label " for="bar">Bar </label>
                                <input className="form-check-input " type="checkbox" id="bar" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-check form-switch offset-2 col-8">
                                <label class="form-check-label " for="reserva">Reserva </label>
                                <input className="form-check-input " type="checkbox" id="reserva" />
                            </div>
                        </div>
                    </div>

                    <h3 className=" col-12 mb-4text-left">Bioseguridad</h3>
                    <div className="mb-3 row">
                        <div className="col-6">
                            <div className="form-check form-switch offset-2 col-8">
                                <label class="form-check-label " for="Mascarilla">Mascarilla </label>
                                <input className="form-check-input " type="checkbox" id="Mascarilla" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-check form-switch offset-2 col-8">
                                <label class="form-check-label " for="Alcohol">Alcohol </label>
                                <input className="form-check-input " type="checkbox" id="Alcohol" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-check form-switch offset-2 col-8">
                                <label class="form-check-label " for="Temperarura">Tomar Temperarura </label>
                                <input className="form-check-input " type="checkbox" id="Temperarura" />
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="col-12 mb-5 mt-5" >Imagenes</h3>
                <div className='col-12 row'>
                    <div className='col-3'>
                        <div class="file-field">
                            <div class="z-depth-1-half mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" class={`${Styles['images']} img-fluid `}
                                    alt="example placeholder" />
                            </div>
                            <div class="d-flex justify-content-center">
                                <div class="btn btn-primary">
                                    <label for="img-1" >Choose file</label>
                                    <input id="img-1" className={Styles['input-file']} type="file" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div class="file-field">
                            <div class="z-depth-1-half mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" class={`${Styles['images']} img-fluid `}
                                    alt="example placeholder" />
                            </div>
                            <div class="d-flex justify-content-center">
                                <div class="btn btn-primary">
                                    <label for="img-1" >Choose file</label>
                                    <input id="img-1" className={Styles['input-file']} type="file" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div class="file-field">
                            <div class="z-depth-1-half mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" class={`${Styles['images']} img-fluid `}
                                    alt="example placeholder" />
                            </div>
                            <div class="d-flex justify-content-center">
                                <div class="btn btn-primary">
                                    <label for="img-1" >Choose file</label>
                                    <input id="img-1" className={Styles['input-file']} type="file" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div class="file-field">
                            <div class="z-depth-1-half mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" class={`${Styles['images']} img-fluid `}
                                    alt="example placeholder" />
                            </div>
                            <div class="d-flex justify-content-center">
                                <div class="btn btn-primary">
                                    <label for="img-1" >Choose file</label>
                                    <input id="img-1" className={Styles['input-file']} type="file" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div class="file-field">
                            <div class="z-depth-1-half mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" class={`${Styles['images']} img-fluid `}
                                    alt="example placeholder" />
                            </div>
                            <div class="d-flex justify-content-center">
                                <div class="btn btn-primary">
                                    <label for="img-1" >Choose file</label>
                                    <input id="img-1" className={Styles['input-file']} type="file" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>


        </>
    )
}

export default NewPlace
