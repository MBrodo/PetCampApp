import React from 'react'
import { Text, View, Pressable, Image } from 'react-native'
import { styles } from '../../style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import images from '../../MyProfile'
import { ProfileRowInfo } from '../../../../common/petInfo/ProfileRowInfo'
import { ActivityIndicator } from 'react-native'

export const MyPets = (props) => {
	const petList = (item) => (
		<View key={item.id} style={styles.containerElement}>
			<View style={styles.containerWrapper}>
				<View>
					<Image source={images.defaultImage} style={styles.petPic} />
				</View>
				<View style={styles.elementMain}>
					<View style={styles.elementFloor}>
						<ProfileRowInfo item={item.type.toLowerCase()} title={'Cat/Dog'} />
						<ProfileRowInfo item={item.name} title={'Name'} />
						<ProfileRowInfo item={item.age} title={'Age'} />
					</View>
					<View style={styles.elementFloor}>
						<ProfileRowInfo item={item.gender} title={'Gender'} />
						<ProfileRowInfo item={item.vet_pasport} title={'Vet Passport'} />
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
			{props.isLoading ? (
				props.pets.length === 0 ? (
					<Text style={styles.alternativeText}>You dont have any pets yet</Text>
				) : (
					<View style={styles.containerMain}>{props.pets.map((item) => petList(item))}</View>
				)
			) : (
				<View style={styles.preloader}>
					<ActivityIndicator size="large" color="#5D5FEF" />
				</View>
			)}
		</View>
	)
}
