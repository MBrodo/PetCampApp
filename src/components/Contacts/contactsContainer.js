import React from 'react'
import { ContactsView } from './contactsView'
import { useSelector } from 'react-redux'

export const ContactsContainer = () => {
	const camps = useSelector((state) => state.camps.camps)

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
	return <ContactsView camps={camps} cats={cats} dogs={dogs} camps={camps} />
}
