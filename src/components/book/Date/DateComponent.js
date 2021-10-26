import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { styles } from '../styles'
import DateTimePicker from '@react-native-community/datetimepicker'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

export const DateContainer = (props) => {
	return (
		<View>
			<View>
				<Text style={styles.bookSelectArticle}>Select a dates</Text>
			</View>

			<View style={styles.mainDateContainer}>
				<View>
					<TouchableOpacity onPress={() => props.showDatepicker()} style={styles.dateContainer}>
						<Text style={styles.dateText}>{props.dateText}</Text>
						<Icon name="calendar-alt" size={24} style={styles.dateIcon} />
					</TouchableOpacity>
				</View>

				<View style={styles.dateLineContainer}>
					<View style={styles.dateLine}></View>
				</View>

				<View>
					<TouchableOpacity onPress={() => props.showDatepickerEnd()} style={styles.dateContainer}>
						<Text style={styles.dateText}>{props.dateTextEnd}</Text>
						<Icon name="calendar-alt" size={24} style={styles.dateIcon} />
					</TouchableOpacity>
				</View>

				<View>
					{props.show && (
						<DateTimePicker
							testID="dateTimePicker"
							value={props.date}
							mode={props.mode}
							is24Hour={true}
							display="default"
							onChange={props.onChange}
						/>
					)}

					{props.dateshowEnd && (
						<DateTimePicker
							testID="dateTimePicker"
							value={props.datedateEnd}
							mode={props.datemodeEnd}
							is24Hour={true}
							display="default"
							onChange={props.onChangeEnd}
						/>
					)}
				</View>
			</View>

			<TouchableOpacity style={styles.footerButton}>
				<Text style={styles.footerButtonText}>Book</Text>
			</TouchableOpacity>
		</View>
	)
}
