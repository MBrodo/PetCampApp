import React from 'react'
import { Text, View, Image } from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

export const MyReports = () => {
	return (
		<View style={styles.container}>
			<View style={styles.containerHeader}>
				<Text style={styles.containerTitle}>My reports</Text>
				<View style={styles.containerLink}>
					<Text style={styles.containerLinkText}>See more</Text>
					<Icon style={styles.containerLinkIcon} name="arrow-right" size={15} />
				</View>
			</View>
			<View style={styles.containerMain}>
				<View style={styles.containerElement}>
					<View>
						<Image source={require('../../img/dog1.jpg')} style={styles.petPic} />
						<Icon style={styles.myReportsIcon} name="paw" size={20} />
						<Icon style={styles.myReportsCamera} name="camera" size={20} />
					</View>
					<View style={styles.elementMain}>
						<View style={styles.elementFloor}>
							<View style={styles.elementInfo}>
								<Text>Name</Text>
								<Text style={styles.elementText}>Milo</Text>
							</View>
							<View style={styles.elementInfo}>
								<Text>Booking №</Text>
								<Text style={styles.elementText}>1012</Text>
							</View>
						</View>
						<View style={styles.elementFloor}>
							<View style={styles.elementInfo}>
								<Text>Manager</Text>
								<Text style={styles.elementText}>Alex Gurbo</Text>
							</View>
							<View style={styles.elementInfo}>
								<Text>Date</Text>
								<Text style={styles.elementText}>10.10.2021</Text>
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
							<Icon style={styles.myReportsIcon} name="paw" size={20} />
							<Icon style={styles.myReportsCamera} name="camera" size={20} />
						</View>
						<View style={styles.elementMain}>
							<View style={styles.elementFloor}>
								<View style={styles.elementInfo}>
									<Text>Date</Text>
									<Text style={styles.elementText}>Milo</Text>
								</View>
								<View style={styles.elementInfo}>
									<Text>Booking №</Text>
									<Text style={styles.elementText}>1000</Text>
								</View>
							</View>
							<View style={styles.elementFloor}>
								<View style={styles.elementInfo}>
									<Text>Manager</Text>
									<Text style={styles.elementText}>Alex Gurbo</Text>
								</View>
								<View style={styles.elementInfo}>
									<Text>Date</Text>
									<Text style={styles.elementText}>10.08.2021</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	)
}
