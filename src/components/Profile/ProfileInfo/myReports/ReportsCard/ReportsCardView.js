import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { styles } from '../style'
import { PetInfo } from '../../../../../common/petInfo/petInfo'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import Animated from 'react-native-reanimated'
import { DefaultButton } from '../../../../../common/buttons/defaultButton'
import { images } from '../../addMyPet/AddMyPetContainer'

export const ReportsCardView = (props) => {
	const petInfoBlock = () => (
		<>
			<PetInfo title={'Booking №'} item={props.item.booking} />
			<PetInfo title={'Date'} item={props.item.write_time.substring(10, 0)} />
			<PetInfo title={'Room'} item={'Room ' + props.item.room_number} />
			<PetInfo title={'Stress level'} item={props.item.stress_level} />
			<PetInfo title={'Appetite'} item={props.item.appetite + ' appetite'} />
			<PetInfo title={'Play time'} item={props.item.play_time} />
			<View style={styles.imagesContainer}>
				<Image style={styles.cameraImage} source={images.cameraImage} />
				<Image style={styles.cameraImage} source={images.cameraImage} />
				<Image style={styles.cameraImage} source={images.cameraImage} />
			</View>
			<PetInfo
				title={'Manager'}
				item={props.item.name + ' ' + props.item.surname.substring(1, 0) + '.'}
			/>

			<DefaultButton textButton={'Delete'} />
		</>
	)
	return (
		<Animated.View
			key={props.item.id}
			style={[styles.cardContainer, props.reanimatedStyle, props.deleteAnimation]}
		>
			<View style={styles.wrapper}>
				<View style={styles.myPetPhoto}>
					<Image style={styles.picture} source={images.defaultImage} />
					<View style={styles.nickNameBlock}>
						<Icon name={'paw'} size={20} color={'#75B158'} />
						<Text style={styles.myPetPhotoText}>{props.item.pet_name}</Text>
					</View>
				</View>
				<PetInfo title={'Report №'} item={props.item.report_number} />
				{props.showReportInfo ? petInfoBlock() : null}
				<View style={styles.arrowContainer}>
					<Pressable
						onPress={() => {
							props.showReportInfo
								? (props.progress.value = { width: 300, height: 220 })
								: (props.progress.value = { width: 300, height: 550 })
							props.setShowReportInfo(!props.showReportInfo)
						}}
					>
						<Icon name={props.showReportInfo ? 'sort-up' : 'sort-down'} size={20} />
					</Pressable>
				</View>
			</View>
		</Animated.View>
	)
}
