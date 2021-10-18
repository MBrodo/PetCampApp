import React from 'react'
import { Text, View, Image } from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

export const MyPets = () => {
	return (
		<View style={styles.container}>
			<View style={styles.containerHeader}>
				<Text style={styles.containerTitle}>My pets</Text>
				<View style={styles.containerLink}>
					<Text style={styles.containerLinkText}>See more</Text>
					<Icon style={styles.containerLinkIcon} name="arrow-right" size={15} />
				</View>
			</View>
			<View style={styles.containerMain}>
				<View style={styles.containerElement}>
					<View>
						<Image source={require('../../img/cat1.jpg')} style={styles.petPic} />
					</View>
					<View style={styles.elementMain}>
						<View style={styles.elementFloor}>
							<View style={styles.elementInfo}>
								<Text>Cat/Dog</Text>
								<Text style={styles.elementText}>Cat</Text>
							</View>
							<View style={styles.elementInfo}>
								<Text>Name</Text>
								<Text style={styles.elementText}>Felix</Text>
							</View>
							<View style={styles.elementInfo}>
								<Text>Age</Text>
								<Text style={styles.elementText}>10 years</Text>
							</View>
						</View>
						<View style={styles.elementFloor}>
							<View style={styles.elementInfo}>
								<Text>Gender</Text>
								<Text style={styles.elementText}>m</Text>
							</View>
							<View style={styles.elementInfo}>
								<Text>Vacinated</Text>
								<Icon name="check" size={20} style={{ color: '#5D5FEF' }} />
							</View>
						</View>
					</View>
				</View>
				<View
					style={{
						borderBottomColor: 'gray',
						borderBottomWidth: 1,
						marginVertical: 8,
					}}
				/>
				<View style={styles.containerElement}>
					<View style={styles.containerElement}>
						<View>
							<Image source={require('../../img/dog1.jpg')} style={styles.petPic} />
						</View>
						<View style={styles.elementMain}>
							<View style={styles.elementFloor}>
								<View style={styles.elementInfo}>
									<Text>Cat/Dog</Text>
									<Text style={styles.elementText}>Dog</Text>
								</View>
								<View style={styles.elementInfo}>
									<Text>Name</Text>
									<Text style={styles.elementText}>Milo</Text>
								</View>
								<View style={styles.elementInfo}>
									<Text>Age</Text>
									<Text style={styles.elementText}>3 years</Text>
								</View>
							</View>
							<View style={styles.elementFloor}>
								<View style={styles.elementInfo}>
									<Text>Gender</Text>
									<Text style={styles.elementText}>m</Text>
								</View>
								<View style={styles.elementInfo}>
									<Text>Vacinated</Text>
									<Icon name="check" size={20} style={{ color: '#5D5FEF' }} />
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	)
}
