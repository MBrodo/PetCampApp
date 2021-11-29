import React from 'react'
import { Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { priceImages } from './PriceListContainer'
import { styles } from './styles'

export const PriceListView = () => {
	return (
		<ScrollView style={styles.background}>
			<View style={styles.main}>
				<Text style={styles.header}>Pricing & Conditions</Text>
				<View style={styles.petBlock}>
					<Text style={styles.titleText}>CATS</Text>
					<Image source={priceImages.CatImage} style={styles.image} />
					<Text style={styles.petDescription}>
						Access to 24/7 care with a veterinarian call if necessary. An individual temperature
						regime with a separate ventilation system for dogs and cats is provided. Collars for
						cats with calming function, individual playtime for cats, trays for cats in a special
						area are also are included in the standard price. Feeding: Royal Canin food according to
						the breed of a pet. Food can be provided by the owner in separate containers with the
						name of the pet on it
					</Text>
					<Text style={styles.titleText}>Types of Rooms:</Text>
					<View style={styles.petBlockFooter}>
						<Text style={styles.roomText}>Standard room</Text>
						<View style={styles.priceBlock}>
							<Text style={styles.priceTitle}>PRICE: </Text>
							<Text style={styles.priceText}> $ 12 / day</Text>
						</View>
					</View>
					<View style={styles.line} />
				</View>
				<>
					<Text style={styles.titleText}>DOGS</Text>
					<Image source={priceImages.DogImage} style={styles.image} />
					<Text style={styles.petDescription}>
						Access to 24/7 care with a veterinarian call if necessary. An individual temperature
						regime with a separate ventilation system for dogs and cats is provided. Dog walking
						twice a day, including play exercises. Unlimited access for dogs to the toilet. Feeding:
						Royal Canin food according to the breed of a pet. Food can be provided by the owner in
						separate containers with the name of the pet on it.
					</Text>
					<Text style={styles.titleText}>Types of Rooms:</Text>
					<View style={styles.petBlockFooter}>
						<Text style={styles.roomText}>Standard room</Text>
						<View style={styles.priceBlock}>
							<Text style={styles.priceTitle}>PRICE: </Text>
							<Text style={styles.priceText}> $ 10 / day</Text>
						</View>
					</View>
					<Text style={styles.petDescription}>
						Standard room - an open atrium, equipped with a hypoallergenic couch. Daily cleaning and
						sanitation.
					</Text>
					<View style={styles.petBlockFooter}>
						<Text style={styles.roomText}>Apartment </Text>
						<View style={styles.priceBlock}>
							<Text style={styles.priceTitle}>PRICE: </Text>
							<Text style={styles.priceText}> $ 15 / day</Text>
						</View>
					</View>
					<Text style={styles.petDescription}>
						Apartment - a large room, located separately from the standard rooms, suitable for
						accommodating several dogs from one owner. Equipped with a dog bed and TV tuned to
						animal programs. Daily cleaning and sanitation.
					</Text>
					<View style={styles.line} />
				</>
				<View style={styles.optionsBlock}>
					<Text style={styles.titleText}>Options:</Text>
					<>
						<View style={styles.petBlockFooter}>
							<Text style={styles.roomText}>Option 1 - Silver </Text>
							<View style={styles.priceBlock}>
								<Text style={styles.priceTitle}>PRICE: </Text>
								<Text style={styles.priceText}> $ 10 / day</Text>
							</View>
						</View>
						<Text style={styles.petDescription}>
							Games and delicacies: 4 hours of games, socialization, and additional training or up
							to 30 minutes of one-on-one games.
						</Text>
						<View style={styles.petBlockFooter}>
							<Text style={styles.roomText}>Option 2 - Gold </Text>
							<View style={styles.priceBlock}>
								<Text style={styles.priceTitle}>PRICE: </Text>
								<Text style={styles.priceText}> $ 15 / day</Text>
							</View>
						</View>
						<Text style={styles.petDescription}>
							Games and delicacies: 6 hours of games, socialization, and additional training or up
							to 60 minutes of one-on-one games.
						</Text>
						<View style={styles.petBlockFooter}>
							<Text style={styles.roomText}>Option 3 - Platinum </Text>
							<View style={styles.priceBlock}>
								<Text style={styles.priceTitle}>PRICE: </Text>
								<Text style={styles.priceText}> $ 20 / day</Text>
							</View>
						</View>
						<Text style={styles.petDescription}>
							Games and delicacies: 8 hours of games, socialization, and additional training or up
							to 60 minutes of one-on-one games.
						</Text>
					</>
				</View>
				<View style={styles.optionsBlock}>
					<Text style={styles.titleText}>Additional options:</Text>
					<>
						<View style={styles.petBlockFooter}>
							<Text style={styles.roomText}>Pet transfer </Text>
							<View style={styles.priceBlock}>
								<Text style={styles.priceTitle}>PRICE: </Text>
								<Text style={styles.priceText}> $ 5</Text>
							</View>
						</View>
						<Text style={styles.petDescription}>
							The client can book a hotel transfer by choosing this option during the booking
							process. In this case, the hotel administrator contacts the client and selects the
							most convenient time.
						</Text>
						<View style={styles.petBlockFooter}>
							<Text style={styles.roomText}>Grooming </Text>
							<View style={styles.priceBlock}>
								<Text style={styles.priceTitle}>PRICE: </Text>
								<Text style={styles.priceText}> $ 2</Text>
							</View>
						</View>
						<Text style={styles.petDescription}>
							Comprehensive care, which includes a haircut at the request of the owner or in the
							breed lines, shaving the hair between the pads of the paws, cutting the intimate area,
							washing with shampoo using a hair conditioner, drying with a hairdryer, cleaning the
							auricle, trimming the nails.
						</Text>
					</>
				</View>
			</View>
		</ScrollView>
	)
}
