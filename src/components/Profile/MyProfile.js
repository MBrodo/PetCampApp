import React, { useEffect } from 'react'
import { Text, View, Image, ScrollView, ImageBackground, Pressable } from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { MyPetsContainer } from './Profile/petsBlock/MyPetsContainer'
import { MyBookingContainer } from './Profile/myBooking/MyBookingContainer'
import { MyReports } from './MyReports'
import getSettingsController from '../../controllers/settings/getSettingsController'
import { setSettings } from '../../redux/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const images = {
	backGround: require('../../img/ProfileBG.png'),
	defaultImage: require('../../img/defaultImage.png'),
	userPicture: require('../../img/ProfileUserPicture.jpg'),
}
export default images

export const MyProfile = () => {
	const dispatch = useDispatch()
	const userID = useSelector((state) => state.user.id)

	useEffect(() => {
		getSettingsController(userID).then((res) => {
			if (res.status === 200) {
				console.log('successs')
				dispatch(setSettings(res.data.mySettingsInfo))
			} else {
				console.log('fail')
			}
		})
	}, [])

	return (
		<ScrollView>
			<View style={styles.wrapper}>
				<ImageBackground
					source={images.backGround}
					resizeMode="cover"
					style={styles.imageBackGround}
				>
					<View style={styles.userInfo}>
						<Image source={images.userPicture} style={styles.userPic} />
						<Text style={styles.userName}>Lisa</Text>
					</View>
				</ImageBackground>
				<View style={styles.main}>
					<MyPetsContainer />
					<MyBookingContainer />
					<MyReports />
				</View>
			</View>
		</ScrollView>
	)
}
