import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { BookPetInfo } from '../../../../../common/petInfo/BookPetInfo'
import { images } from '../../../../Profile/ProfileInfo/addMyPet/AddMyPetContainer'
import { styles } from '../style'

export const PetCardView = (props) => {
	return (
		<View key={props.item.id} style={styles.myPetContainer}>
			<View>
				<Image style={styles.picture} source={images.defaultImage} />
			</View>
			<View style={styles.myPetOptionsContainer}>
				<View style={styles.myPetOptions}>
					<BookPetInfo title={'Cat/Dog:'} item={props.item.type.toLowerCase()} />
					<BookPetInfo title={'Name:'} item={props.item.name} />
					<BookPetInfo title={'Age:'} item={props.item.age} />
				</View>
				<View style={styles.genderOptionsContainer}>
					<View>
						<Text style={styles.optionArticle}>Gender</Text>
						<Text style={styles.optionName}>{props.item.gender}</Text>
					</View>
					<View style={styles.checkBoxOptions}>
						<Pressable
							style={props.checkChoice ? styles.chooseButtonActive : styles.chooseButtonInactive}
							onPress={() => {
								props.changeHandler(props.item)
							}}
							disabled={props.checkButton()}
						>
							<Text style={styles.chooseButtonText}>Choose</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</View>
	)
}
