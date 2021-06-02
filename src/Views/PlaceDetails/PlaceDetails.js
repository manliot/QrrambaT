import { useState, useEffect } from 'react'
import NavBar from '../../components/layout/NavBar'
import Images from '../../components/common/ImagesPlaces'
import Styles from '../../css/Views/PlaceDetails.module.css'
import { getPlacebyId } from '../../firebase/services/Firestorage'
import Item_service from '../../components/common/Item_service'
import Loadin_c from '../../components/common/Loading'
import CardContactPlace from '../../components/common/ContactCardPlace'
const defaulImg = 'https://mdbootstrap.com/img/Photos/Others/placeholder.jpg'
const DefaultImgs = { prin: defaulImg, sec1: defaulImg, sec2: defaulImg, sec3: defaulImg, sec4: defaulImg }

const PlaceDetails = ({ id_place = 'vbCDE7lfUj3YETnMSFLg' }) => {
	const [Place, setPlace] = useState(null)
	const [infoService, setInfoService] = useState(null)
	const score = 4.8
	const cant_reseñ = 1200
	const [keys, setkeys] = useState(null)
	useEffect(() => {
		const fetchData = async () => {
			const PlaceRes = await getPlacebyId(id_place)
			console.log(Object.keys(PlaceRes.services))
			setkeys(Object.keys(PlaceRes.services))
			const bioseg_txt = `Se requiere de ${PlaceRes.bioseg['alcohol'] ? 'alcohol' : ''} • ${PlaceRes.bioseg['mascarilla'] ? 'mascarilla' : ''} • ${PlaceRes.bioseg['temp'] ? 'tomar la temperatura' : ''}  `
			const info = [{
				title: 'Horario de servicio',
				content: PlaceRes.hours
			},
			{
				title: 'Bioseguridad',
				content: bioseg_txt
			},
			{
				title: 'Domicilio',
				content: `${PlaceRes.del ? 'Si' : 'No'}`
			}

			]
			setInfoService(info)
			setPlace(PlaceRes)
		}
		fetchData()
	}, [id_place])
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
						<Images images={Place == null ? DefaultImgs : Place.imagesURL} />
						<section className='col-12 mt-5 row pb-5'>
							<div className='col-6 '>
								<section className='d-flex justify-content-between'>
									<div >
										<h3>{Place.type} {Place.name}</h3>
										<p>{Place.subtype}</p>
									</div>
									<img className={Styles['iconURL']} src={Place.iconURL} />
								</section>
								<hr></hr>
								<section>
									{
										infoService.map((info, index) => {
											return (
												<Item_service key={info.title} iconURL={Place.iconURL} title={info.title} content={info.content} />
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
									<h3 className='mb-4'>Otors servicios</h3>
									<div className='col-12 row'>
										{keys.map((key) => {
											const service = Place.services[key]
											if (service) {
												return <div className='col-6'>
													< Item_service iconURL={Place.iconURL} title={key[0].toUpperCase() + key.slice(1)} content={'Si'} />
												</div>
											}
										})}
									</div>

								</section>
							</div>
							<div className='col-6 container-fluid p-5'>
								<CardContactPlace imgURL={Place.iconURL} score={score} n_reseñas={100} address={Place.address} phone={Place.phone} Web={"google.com"} />
							</div>
						</section>
					</div>
				</>
				: <div className='vw-100 vh-100 '>
					<Loadin_c />
				</div>

			}

		</>
	)
}

export default PlaceDetails
