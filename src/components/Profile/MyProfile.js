import React, { useState } from 'react'
import { Text, View, Image, ScrollView, ImageBackground } from 'react-native'
import { styles } from './style'
import { MyPetsContainer } from './Profile/petsBlock/MyPetsContainer'
import { MyBookingContainer } from './Profile/myBooking/MyBookingContainer'
import { MyReportsContainer } from './Profile/myReports/MyReportsContainer'
import { useSelector } from 'react-redux'
import { SignInContainer } from '../LogIn/SignIn/SignInContainer'
import { LogIn } from '../LogIn/LogIn'

const images = {
	backGround: require('../../img/ProfileBG.png'),
	defaultImage: require('../../img/defaultImage.png'),
	userPicture: require('../../img/ProfileUserPicture.jpg'),
}
export default images

export const MyProfile = () => {
	const profileInfo = useSelector((state) => state.user.settings)
	const ProfileView = () => (
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
				<View style={styles.main}>
					<MyPetsContainer />
					<MyBookingContainer />
					<MyReportsContainer />
				</View>
			</View>
		</ScrollView>
	)

	return useSelector((state) => state.user.id.length) === 0 ? <SignInContainer /> : <ProfileView />
}
