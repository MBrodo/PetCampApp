import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { styles } from '../styles'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

export const DateView = (props) => {
	return (
		<View>
			<View>
				<Text style={styles.bookSelectArticle}>Select a dates</Text>
			</View>

			<View style={styles.mainDateContainer}>
				<View>
					<TouchableOpacity onPress={() => props.showDatepicker()} style={styles.dateContainer}>
						<Text style={styles.dateText}>{props.dateInfo.startDate}</Text>
						<Icon name="calendar-alt" size={24} style={styles.dateIcon} />
					</TouchableOpacity>
				</View>

				<View style={styles.dateLineContainer}>
					<View style={styles.dateLine}></View>
				</View>

				<View>
					<TouchableOpacity onPress={() => props.showDatepickerEnd()} style={styles.dateContainer}>
						<Text style={styles.dateText}>{props.dateInfo.endDate}</Text>
						<Icon name="calendar-alt" size={24} style={styles.dateIcon} />
					</TouchableOpacity>
				</View>
				<View>
					{props.dateInfo.show && (
						<RNDateTimePicker
							minimumDate={new Date()}
							testID="dateTimePicker"
							value={props.dateInfo.date}
							mode={props.dateInfo.mode}
							is24Hour={true}
							display="default"
							onChange={props.onChange}
						/>
					)}

					{props.dateInfo.showEnd && (
						<RNDateTimePicker
							minimumDate={new Date()}
							testID="dateTimePicker"
							value={props.dateInfo.dateEnd}
							mode={props.dateInfo.modeEnd}
							is24Hour={true}
							display="default"
							onChange={props.onChangeEnd}
						/>
					)}
				</View>
			</View>

			<TouchableOpacity
				disabled={props.dateInfo.startDate && props.dateInfo.endDate === 'yyyy/mm/dd'}
				onPress={() => props.StartBookProcess()}
				style={styles.footerButton}
			>
				<Text style={styles.footerButtonText}>Book</Text>
			</TouchableOpacity>
		</View>
	)
}
