import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles, pickerSelectStyles } from './styles'
import { CheckBox } from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select'
import { useSelector, useDispatch } from 'react-redux'
import { setPetQuantity } from '../../redux/slices/fullPetsSlice'

export const Header = (props) => {
	const checkState = () => {
		props.setDog(props.dog == false ? true : false)
		props.setCat(props.cat == false ? true : false)
	}
	const [Quantity, setQuantity] = useState(false)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setPetQuantity(Quantity))
	}, [Quantity])
	const quant = useSelector((state) => state.pets.quantity)
	console.log(quant)
	return (
		<View>
			<View>
				<Text style={styles.bookArticle}>Book</Text>
			</View>

			<View style={styles.checkBoxContainer}>
				<CheckBox
					center
					title="Dog"
					checked={props.dog}
					onPress={() => {
						checkState()
					}}
					checkedColor="#4fa09285"
					containerStyle={styles.checkBox}
					textStyle={styles.checkBoxTextStyle}
					fontFamily="Bahianita-Regular"
				/>
				<CheckBox
					center
					title="Cat"
					checked={props.cat}
					onPress={() => {
						checkState()
					}}
					checkedColor="#4fa09285"
					containerStyle={styles.checkBox}
					textStyle={styles.checkBoxTextStyle}
				/>
				<View style={styles.headerQuantityContainer}>
					<View style={styles.headerQuantityInputContainer}>
						<RNPickerSelect
							placeholder={{}}
							style={pickerSelectStyles}
							useNativeAndroidPickerStyle={false}
							onValueChange={(value) => setQuantity(value)}
							fixAndroidTouchableBug={true}
							items={[
								{ label: '1', value: 1 },
								{ label: '2', value: 2 },
								{ label: '3', value: 3 },
								{ label: '4', value: 4 },
								{ label: '5', value: 5 },
								{ label: '6', value: 6 },
								{ label: '7', value: 7 },
								{ label: '8', value: 8 },
								{ label: '9', value: 9 },
								{ label: '10', value: 10 },
							]}
						/>
					</View>
					<Text style={styles.headerQuantityText}>Quantity</Text>
				</View>
			</View>
		</View>
	)
}
