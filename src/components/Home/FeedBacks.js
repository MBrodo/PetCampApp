import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { styles } from './styles'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

import { feedbacks } from './config'

export const FeedBacks = ({ navigation }) => {
	return (
		<View style={styles.feedBackContainer}>
			<View style={styles.feedBackHeader}>
				<Text style={styles.feedBackArticle}>FeedBacks</Text>
				<View style={styles.feedBackVotes}>
					<Icon name="star" size={15} solid style={styles.feedBackStarIcon} />
					<Text style={styles.feedBackVotesCounter}>4.9</Text>
					<Text style={styles.feedbackText}>(543 votes)</Text>
				</View>
			</View>

			{feedbacks.map((props) => (
				<View key={props.key}>
					<View style={styles.headerFeedBack}>
						<Text style={styles.feedBackName}>{props.name}</Text>
						<Text style={styles.dateFeedBack}>{props.date}</Text>
					</View>
					<Text style={styles.feedbackText}>{props.text}</Text>
				</View>
			))}

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
