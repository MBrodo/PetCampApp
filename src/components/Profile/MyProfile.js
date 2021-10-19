import React from 'react'
import { Text, View, Image, ScrollView, ImageBackground } from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { MyPets } from './MyPets'
import { MyBooking } from './MyBooking'
import { MyReports } from './MyReports'

const images = {
	backGround: require('../../img/ProfileBG.png'),
	cat: require('../../img/cat1.jpg'),
	dog: require('../../img/dog1.jpg'),
	userPicture: require('../../img/ProfileUserPicture.jpg'),
}
export default images

export const MyProfile = () => {
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
						<Icon style={styles.uploadUserPic} name="arrow-circle-up" size={30} />
						<Text style={styles.userName}>Lisa</Text>
					</View>
				</ImageBackground>
				<View style={styles.main}>
					<MyPets />
					<MyBooking />
					<MyReports />
				</View>
			</View>
		</ScrollView>
	)
}
