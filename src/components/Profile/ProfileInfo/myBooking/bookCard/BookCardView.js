import React, { useCallback } from 'react'
import { View, Text, Image, Pressable, TextInput, Modal } from 'react-native'
import { styles } from '../style'
import { PetInfo } from '../../../../../common/petInfo/petInfo'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import Animated from 'react-native-reanimated'
import { DefaultButton } from '../../../../../common/buttons/defaultButton'
import { images } from '../../addMyPet/AddMyPetContainer'
import { ModalWindow } from '../../../../../common/modal/modal'

export const BookCardView = (props) => {
	const openModal = () => {
		props.chechState()
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

			<DefaultButton onPress={openModal} textButton={'Cancel'} />
		</>
	)

	return (
		<Animated.View
			key={props.item.id}
			style={[styles.cardContainer, props.reanimatedStyle, props.deleteAnimation]}
		>
			<ModalWindow
				isOpenModal={props.isOpenModal}
				accept={props.showNotificationModal}
				cancel={props.chechState}
			/>

			<Modal animationType="slide" transparent={true} visible={props.successDelete}>
				<View style={styles.modalContainer}>
					<View style={styles.modalWrapper}>
						<Text style={styles.titleText}>
							Pet camp manager will contact you to start cancelation process
						</Text>
						<Pressable onPress={() => props.changeBookState()} style={styles.acceptButton}>
							<Text style={styles.acceptText}>Yes</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
			<View style={styles.wrapper}>
				<View style={styles.myPetPhoto}>
					<Image style={styles.picture} source={images.defaultImage} />
					<View style={styles.nickNameBlock}>
						<Icon name={'paw'} size={20} color={'#75B158'} />
						<Text style={styles.myPetPhotoText}>{props.item.name}</Text>
					</View>
				</View>
				<PetInfo title={'Booking №'} item={props.item.id} />
				{props.showBookInfo ? petInfoBlock() : null}
				<View style={styles.arrowContainer}>
					<Pressable
						onPress={() => {
							props.showBookInfo
								? (props.progress.value = { width: 300, height: 220 })
								: (props.progress.value = { width: 300, height: 500 })
							props.setShowBookInfo(!props.showBookInfo)
						}}
					>
						<Icon name={props.showBookInfo ? 'sort-up' : 'sort-down'} size={20} />
					</Pressable>
				</View>
			</View>
		</Animated.View>
	)
}
