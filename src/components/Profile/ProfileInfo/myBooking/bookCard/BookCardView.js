import React from 'react'
import { View, Text, Image, Pressable, TextInput } from 'react-native'
import { styles } from '../style'
import { PetInfo } from '../../../../../common/petInfo/petInfo'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import Animated from 'react-native-reanimated'
import { DefaultButton } from '../../../../../common/buttons/defaultButton'

export const BookCardView = (props) => {
	const checkButton = () => {
		return props.showBookInfo ? 'sort-up' : 'sort-down'
	}

	const setSize = () => {
		if (props.showBookInfo) {
			props.progress.value = { width: 300, height: 220 }
			props.setShowBookInfo(!props.showBookInfo)
		} else {
			props.progress.value = { width: 300, height: 500 }
			props.setShowBookInfo(!props.showBookInfo)
		}
	}
	const petInfoBlock = () => (
		<>
			<PetInfo title={'Start date'} item={props.item.booking_start.substring(10, 0)} />
			<PetInfo title={'End date'} item={props.item.booking_end.substring(10, 0)} />
			<PetInfo title={'Paid'} item={props.item.paid} />
			<PetInfo title={'Cat/Dog'} item={props.item.type} />
			<PetInfo title={'Option'} item={props.item.vet_pasport} />
			<PetInfo title={'Additional'} item={props.item.vet_pasport} />
			<PetInfo title={'Video control'} item={props.item.vet_pasport} />

			<DefaultButton
				item={props.item.id}
				delete={props.deleteBookCard}
				animation={props.deleteBookAnimation}
				textButton={'Cancle'}
			/>
		</>
	)

	const checkBookCard = () => <>{props.showBookInfo ? petInfoBlock() : null}</>
	return (
		<Animated.View
			key={props.item.id}
			style={[styles.cardContainer, props.reanimatedStyle, props.deleteAnimation]}
		>
			<View style={styles.wrapper}>
				<View style={styles.myPetPhoto}>
					<Image style={styles.picture} source={props.checkImage(props.item)} />
					<View style={styles.nickNameBlock}>
						<Icon name={'paw'} size={20} color={'#75B158'} />
						<Text style={styles.myPetPhotoText}>{props.item.name}</Text>
					</View>
				</View>
				<PetInfo title={'Booking №'} item={props.item.id} />
				{checkBookCard()}
				<View style={styles.arrowContainer}>
					{
						<Pressable
							onPress={() => {
								setSize()
							}}
						>
							<Icon name={checkButton()} size={20} />
						</Pressable>
					}
				</View>
			</View>
		</Animated.View>
	)
}
