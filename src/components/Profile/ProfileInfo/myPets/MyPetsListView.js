import React from 'react'
import { View, ScrollView, Text, Pressable } from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

export const MyPetsListView = (props) => {
	return (
		<ScrollView style={styles.mainScroll} showsHorizontalScrollIndicator={false}>
			<View style={styles.mainBlock}>
				{props.pets.map((item) => props.petsCards(item))}
				<View style={styles.addCardContainer}>
					<View style={styles.addPetContainer}>
						<Pressable onPress={() => props.addButton()} style={styles.addPetButton}>
							<Icon name="plus" size={50} style={styles.addPetIcon} />
						</Pressable>
						<Text style={styles.addPetText}>Add a pet</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	)
}
