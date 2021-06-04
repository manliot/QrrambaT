
import NavBar from '../../components/layout/NavBar'
import Images from '../../components/common/ImagesPlaces'
import Styles from '../../css/Views/PlaceDetails.module.css'
import ItemService from '../../components/common/Item_service'
import LoadinC from '../../components/common/Loading'
import CardContactPlace from '../../components/common/ContactCardPlace'

import { faClock, faHeadSideMask, faBicycle } from '@fortawesome/free-solid-svg-icons'
import { faWifi, faCar, faSwimmer, faBeer, faCalendar } from '@fortawesome/free-solid-svg-icons'

const iconsInfo = [faClock, faHeadSideMask, faBicycle]
const iconsServices = [faWifi, faCar, faSwimmer, faBeer, faCalendar]
const PlaceDetails = ({ location }) => {
	const Place = location.state.Place
	const score = 4.8
	const cant_reseñ = 1200
	const BiosegTxt = `Se requiere de ${Place.bioseguridad[0] ? 'Mascarilla' : ''} • ${Place.bioseguridad[1] ? 'alcohol' : ''} • ${Place.bioseguridad[2] ? 'tomar la temperatura' : ''}  `
	const infoService = [{
		title: 'Horario de servicio',
		content: Place.horas
	},
	{
		title: 'Bioseguridad',
		content: BiosegTxt
	},
	{
		title: 'Domicilio',
		content: `${Place.del ? 'Si' : 'No'}`
	}]
	const otherServicesNames = ['Wifi', 'Parqueadero', 'Piscina', 'Bar', 'Reserva']

	return (
		<>
			{Place && infoService
				? <>
					<NavBar color={1}></NavBar>
					<div className={` pt-5 ${Styles['container']}`}>
						<h2>{Place.type} {Place.name}</h2>
						<section className='col-12 pb-3 row'>
							<div className='col-8'>
								<span>{score}</span> <span>|{cant_reseñ} Reseñas</span>
							</div>
							<div className='col-4 d-flex justify-content-end'>
								<span>Guardar</span>
							</div>
						</section>
						<Images images={Place.imagesURL} />
						<section className='col-12 mt-5 row pb-5'>
							<div className='col-6 '>
								<section className='d-flex justify-content-between'>
									<div >
										<h3>{Place.type} {Place.name}</h3>
										<p>{Place.subtype}</p>
									</div>
									<img className={Styles['iconURL']} src={Place.iconURL} alt={`${Place.name}-img`} />
								</section>
								<hr></hr>
								<section>
									{
										infoService.map((info, index) => {
											return (
												<ItemService type='icon' key={info.title.split(' ').join()} iconURL={iconsInfo[index]} title={info.title} content={info.content} />
											)
										})}
								</section>
								<hr></hr>
								<section className='container p-4'>
									<h3 className='mb-4'>Descripcion e informacion adicional</h3>
									<p>
										{Place.description}
									</p>
								</section>
								<hr></hr>
								<section className='container p-4'>
									<h3 className='mb-4'>Otros servicios</h3>
									<div className='col-12 row'>
										{Place.otherServices.map((service, index) => {
											//TODO: CAMBIAR EL ICONO QUE SE MUESTRA
											if (service) {
												return (
													<div key={`${service.creador}+ ${index}`} className='col-6'>
														< ItemService type='icon' iconURL={iconsServices[index]} title={otherServicesNames[index]} content={'Si'} />
													</div>
												)
											} else {
												return <></>
											}
										})}
									</div>
								</section>
							</div>
							<div className='col-6 container-fluid p-5'>
								<CardContactPlace web={Place.web} imgURL={Place.iconURL} score={score} n_reseñas={100} address={Place.address} phone={Place.phone} Web={"google.com"} />
							</div>
						</section>
					</div>
				</>
				: <div className='vw-100 vh-100 '>
					<LoadinC />
				</div>
			}

		</>
	)
}

export default PlaceDetails
