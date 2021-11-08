import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'

import { styles } from '../styles'
import { setCamps } from '../../../redux/slices/petCampsSlise'
import { setPetInformation } from '../../../redux/slices/fullPetsSlice'
import mapListController from '../../../controllers/authorization/mapListController'
import { useSelector, useDispatch } from 'react-redux'

import { MapListView } from './MapListView'

export const MapListContainer = (props) => {
	const [country, setCountry] = useState(false)
	const showHotels = (item) => {
		return (
			<View style={{ marginBottom: 15 }}>
				<View style={{ marginLeft: 15 }}>
					<Text style={item.id === country ? styles.countryActive : styles.countryInactive}>
						{props.cat ? item.street : item.street}
					</Text>
				</View>
			</View>
		)
	}

	const [latitude, setLatitude] = useState(53.88852210035737)
	const [longitude, setLongitude] = useState(27.544550058168248)

	const checkDB = () => {
		return props.cat ? cats : dogs
	}
	const checkHotels = (item) => {
		if (item.id === country) {
			return showHotels(item)
		}
	}
	const [information, setInformation] = useState()
	const camps = useSelector((state) => state.camps.camps)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setPetInformation(information))
	}, [information])

	useEffect(() => {
		mapListController().then((res) => {
			if (res.status === 200) {
				dispatch(setCamps(res.data.petCamps))
			} else {
				console.log('Some trouble with server!')
			}
		})
	}, [])

	let cats = []
	let dogs = []
	const mapHotelsList = () => {
		camps.map((e) => {
			if (e.type === 'CAT') {
				cats.push(e)
			} else if (e.type === 'DOG') {
				dogs.push(e)
			}
		})
	}
	mapHotelsList()
	return (
		<MapListView
			latitude={latitude}
			setLatitude={setLatitude}
			longitude={longitude}
			setLongitude={setLongitude}
			checkDB={checkDB}
			checkHotels={checkHotels}
			cats={cats}
			dogs={dogs}
			setCountry={setCountry}
			showHotels={showHotels}
			map={props.map}
			setInformation={setInformation}
		/>
	)
}
