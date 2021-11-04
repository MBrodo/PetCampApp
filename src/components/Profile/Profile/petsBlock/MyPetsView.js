import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { styles } from '../../style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

export const MyPets = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.containerHeader}>
				<Text style={styles.containerTitle}>My pets</Text>
				<Pressable onPress={() => props.goToPetList()} style={styles.containerLink}>
					<Text style={styles.containerLinkText}>See more</Text>
					<Icon style={styles.containerLinkIcon} name="arrow-right" size={15} />
				</Pressable>
			</View>
			<View style={styles.containerMain}>{props.pets.map((item) => props.petList(item))}</View>
		</View>
	)
}
