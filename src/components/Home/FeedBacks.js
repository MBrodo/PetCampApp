import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { styles } from './styles'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

export const FeedBacks = ({ navigation }) => {
	return (
		<View style={styles.feedBackContainer}>
			<Text style={styles.descriptionText}>
				When you need to be away, our hotel makes it easy to give your dog or cat a fun getaway for
				overnight or longer. Pet Camp offers dogs and cats of every age and stage of life a safe,
				comfortable home away from home. It is the perfect pet hotel to board your pets with
				Standard Guest Rooms where dogs can bunk with buddies, Apartments, and Kitty Cottages for
				your favorite felines.
			</Text>
			<Text style={styles.descriptionText}>
				Our Pet Camp includes 24/7 on-site care and access to an on-call veterinarian, plus
				twice-daily exercise walks and unlimited potty breaks. Cats enjoy daily individual playtime
				and complimentary SENTRY® calming pheromones. Bring your dog or cat's food and treats from
				home or we can feed them for an additional fee. Medication dispensing services are also
				available for an additional fee.
			</Text>
			<Text style={styles.descriptionText}>
				If your pet needs grooming services while they are with us, we can help facilitate that, too
				so they wll be well cared for and looking their best when it is time to go home.
			</Text>
			<Text style={styles.descriptionText}>
				For more information on our pet boarding services or to book your pet's stay at a Pet Camp
				find the nearest to you.
			</Text>
			<Text style={styles.descriptionText}>
				The safety, health and happiness of our customers, pets and associates are a top priority at
				Pet Camp.
			</Text>

			<View style={styles.socialContainer}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Agreement')
					}}
				>
					<Text style={styles.socialArticle}>Client Agreements</Text>
				</TouchableOpacity>
				<View style={styles.socialIconsContainer}>
					<Icon name="facebook" size={25} style={styles.socialIconFacebook} />
					<Icon name="instagram" size={25} style={styles.socialIconInstagram} />
				</View>
			</View>
		</View>
	)
}
