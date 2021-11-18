import React from 'react'
import { Text, View, Image, ScrollView, ImageBackground, Pressable, Button } from 'react-native'
import { styles } from './style'
import { MyPetsContainer } from './Profile/petsBlock/MyPetsContainer'
import { MyBookingContainer } from './Profile/myBooking/MyBookingContainer'
import { MyReports } from './MyReports'
import { useSelector } from 'react-redux'
import EncryptedStorage from 'react-native-encrypted-storage'

const images = {
	backGround: require('../../img/ProfileBG.png'),
	defaultImage: require('../../img/defaultImage.png'),
	userPicture: require('../../img/ProfileUserPicture.jpg'),
}
export default images

export const MyProfile = () => {
	const profileInfo = useSelector((state) => state.user.settings)
	async function removeUserSession() {
		try {
			await EncryptedStorage.removeItem('user_session')
		} catch (error) {}
	}

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
						<Text style={styles.userName}>
							{profileInfo.length === 0 ? 'Random' : profileInfo[0].name}
						</Text>
					</View>
				</ImageBackground>
				<Button onPress={() => removeUserSession()} title="test" />
				<View style={styles.main}>
					<MyPetsContainer />
					<MyBookingContainer />
					<MyReports />
				</View>
			</View>
		</ScrollView>
	)
}
