import React from 'react'
import { View, Text, Modal, Pressable } from 'react-native'
import { styles } from './style'

export const ModalWindow = (props) => {
	return (
		<Modal animationType="slide" transparent={true} visible={props.isOpenModal}>
			<View style={styles.modalContainer}>
				<View style={styles.wrapper}>
					<Text style={styles.titleText}>Do you want to {props.action} a card?</Text>
					<View style={styles.buttonContainer}>
						<Pressable onPress={() => props.accept()} style={styles.acceptButton}>
							<Text style={styles.acceptText}>Yes</Text>
						</Pressable>
						<Pressable onPress={() => props.cancel()} style={styles.cancelButton}>
							<Text style={styles.cancelText}>No</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	)
}
