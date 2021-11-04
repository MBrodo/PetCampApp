import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import bookList from '../../controllers/authorization/BookListController'
import { useSelector, useDispatch } from 'react-redux'
import { setBook } from '../../redux/slices/bookSlice'

export const MyBooking = () => {
	const bookingList = useSelector((state) => state.book.book)
	const dispatch = useDispatch()
	const userID = useSelector((state) => state.user.user)

	useEffect(() => {
		bookList(userID).then((res) => {
			if (res.status === 200) {
				dispatch(setBook(res.data.bookingsInfo))
			} else {
				console.log('Some trouble with server!')
			}
		})
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.containerHeader}>
				<Text style={styles.containerTitle}>My booking</Text>
				<View style={styles.containerLink}>
					<Text style={styles.containerLinkText}>See more</Text>
					<Icon style={styles.containerLinkIcon} name="arrow-right" size={15} />
				</View>
			</View>
			<View>
				{bookingList.map((item) => (
					<View key={item.id} style={styles.containerMain}>
						<View style={styles.containerElement}>
							<View style={styles.elementMain}>
								<View style={styles.elementFloorAlt}>
									<View style={styles.elementInfoAlt}>
										<Text>Pet</Text>
										<Text style={styles.elementText}>{item.name}</Text>
									</View>
									<View style={styles.elementInfoAlt}>
										<Text>Adderss</Text>
										<Text style={styles.elementText}>{item.street}</Text>
									</View>
								</View>
								<View style={styles.elementFloorAlt}>
									<View style={styles.elementInfoDate}>
										<Text>Date</Text>
										<Text style={styles.elementText}>
											{item.booking_start.substring(10, 0)} - {item.booking_end.substring(10, 0)}
										</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
				))}
			</View>
		</View>
	)
}
