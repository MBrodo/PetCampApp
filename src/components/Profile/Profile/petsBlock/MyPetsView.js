import React from 'react'
import { Text, View, Pressable, Image } from 'react-native'
import { styles } from '../../style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import images from '../../MyProfile'

export const MyPets = (props) => {
	const petList = (item) => (
		<View key={item.id} style={styles.containerElement}>
			<View style={styles.containerWrapper}>
				<View>
					<Image source={images.defaultImage} style={styles.petPic} />
				</View>
				<View style={styles.elementMain}>
					<View style={styles.elementFloor}>
						<View style={styles.elementInfo}>
							<Text>Cat/Dog</Text>
							<Text style={styles.elementText}>{item.type.toLowerCase()}</Text>
						</View>
						<View style={styles.elementInfo}>
							<Text>Name</Text>
							<Text style={styles.elementText}>{item.name}</Text>
						</View>
						<View style={styles.elementInfo}>
							<Text>Age</Text>
							<Text style={styles.elementText}>{item.age} years</Text>
						</View>
					</View>
					<View style={styles.elementFloor}>
						<View style={styles.elementInfo}>
							<Text>Gender</Text>
							<Text style={styles.elementText}>{item.gender}</Text>
						</View>
						<View style={styles.elementInfo}>
							<Text style={styles.vetText}>Vet Passport</Text>
							<Text style={styles.elementText}>{item.vet_pasport}</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	)
	return (
		<View style={styles.container}>
			<View style={styles.containerHeader}>
				<Text style={styles.containerTitle}>My pets</Text>
				<Pressable onPress={() => props.goToPetList()} style={styles.containerLink}>
					<Text style={styles.containerLinkText}>See more</Text>
					<Icon style={styles.containerLinkIcon} name="arrow-right" size={15} />
				</Pressable>
			</View>
			<View style={styles.containerMain}>{props.pets.map((item) => petList(item))}</View>
		</View>
	)
}
