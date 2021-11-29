import React, { useCallback } from 'react'
import { View, Text, Image, Pressable, TextInput, Modal, Linking } from 'react-native'
import { styles } from '../style'
import { PetInfo } from '../../../../../common/petInfo/petInfo'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import Animated from 'react-native-reanimated'
import { DefaultButton } from '../../../../../common/buttons/defaultButton'
import { images } from '../../addMyPet/AddMyPetContainer'
import { ModalWindow } from '../../../../../common/modal/modal'

export const BookCardView = (props) => {
	const petInfoBlock = () => (
		<>
			<PetInfo title={'Start date'} item={props.item.booking_start.substring(10, 0)} />
			<PetInfo title={'End date'} item={props.item.booking_end.substring(10, 0)} />
			<PetInfo title={'Paid'} item={props.item.paid} />
			<PetInfo title={'Cat/Dog'} item={props.item.type} />
			<PetInfo title={'Option'} item={'Standart'} />
			<PetInfo title={'Additional'} item={'Grooming, Transfer'} />
			<View style={styles.pointContainer}>
				<Text>Video control</Text>
				<Pressable onPress={() => Linking.openURL('https://www.youtube.com/embed/dQw4w9WgXcQ')}>
					<Text style={styles.pointText}>Link</Text>
				</Pressable>
			</View>

			{props.isDisable ? (
				<DefaultButton onPress={props.deleteBooking} textButton={'Delete'} />
			) : (
				<DefaultButton onPress={props.checkState} textButton={'Cancel'} />
			)}
		</>
	)
	return (
		<Animated.View key={props.item.id} style={[styles.cardContainer, props.reanimatedStyle]}>
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
						<Pressable
							onPress={() => props.changeBookState(props.item.id)}
							style={styles.acceptButton}
						>
							<Text style={styles.acceptText}>Yes</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
			<View style={styles.wrapper}>
				<View style={styles.myPetPhoto}>
					<Image style={styles.picture} source={images.defaultImage} />
					<View style={styles.nickNameBlock}>
						<Icon name={'paw'} size={20} color={props.isDisable ? 'gray' : '#75B158'} />
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
