import React from 'react'
import { Text, View, Image, ScrollView, ImageBackground, Pressable } from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { MyPetsContainer } from './Profile/petsBlock/MyPetsContainer'
import { MyBooking } from './MyBooking'
import { MyReports } from './MyReports'
import { useNavigation } from '@react-navigation/native'

const images = {
	backGround: require('../../img/ProfileBG.png'),
	cat: require('../../img/cat1.jpg'),
	dog: require('../../img/dog1.jpg'),
	userPicture: require('../../img/ProfileUserPicture.jpg'),
}
export default images

export const MyProfile = () => {
	const navigation = useNavigation()
	const toSettings = () => {
		navigation.navigate('ProfileSettingsContainer')
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
						<View style={styles.uploadImageContainer}>
							<Pressable onPress={() => toSettings()}>
								<Icon style={styles.uploadUserPic} name="pen" size={13} />
							</Pressable>
						</View>
						<Text style={styles.userName}>Lisa</Text>
					</View>
				</ImageBackground>
				<View style={styles.main}>
					<MyPetsContainer />
					<MyBooking />
					<MyReports />
				</View>
			</View>
		</ScrollView>
	)
}
