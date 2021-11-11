import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { View, Text, ScrollView, ImageBackground, Pressable, Image } from 'react-native'
import { styles } from './style'

const images = {
	backGround: require('../../img/ProfileBG.png'),
	userPicture: require('../../img/ProfileUserPicture.jpg'),
}

export const MySettingsView = (props) => {
	return (
		<ScrollView style={styles.mainContainer}>
			<View style={styles.wrapper}>
				<ImageBackground
					source={images.backGround}
					resizeMode="cover"
					style={styles.imageBackGround}
				>
					<View style={styles.uploadBGContainer}>
						<Pressable>
							<Icon style={styles.uploadBG} name="pen" size={13} />
						</Pressable>
					</View>
					<View style={styles.userInfo}>
						<Image source={images.userPicture} style={styles.userPic} />
						<View style={styles.uploadImageContainer}>
							<Pressable>
								<Icon style={styles.uploadUserPic} name="pen" size={13} />
							</Pressable>
						</View>
					</View>
				</ImageBackground>
				<View style={styles.main}>
					<Text style={styles.title}>My Settings</Text>
					<View style={styles.settingsContainer}>
						<View style={styles.keyContainer}>
							<Text style={styles.text}>Name</Text>
							<Text style={styles.text}>Middle name</Text>
							<Text style={styles.text}>Surname</Text>
							<Text style={styles.text}>E-mail</Text>
							<Text style={styles.text}>City</Text>
							<Text style={styles.text}>Street, bld</Text>
							<Text style={styles.text}>Mobile phone</Text>
						</View>
						{props.checkSettings()}
					</View>
					<View style={styles.buttonsContainer}>{props.checkButton()}</View>
				</View>
			</View>
		</ScrollView>
	)
}
