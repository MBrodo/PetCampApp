import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { styles } from './style'
import { ReportsCardContainer } from './ReportsCard/ReportsCardContainer'

export const MyReportsListView = (props) => {
	return (
		<ScrollView style={styles.mainScroll} showsHorizontalScrollIndicator={false}>
			<View style={styles.mainBlock}>
				{props.reports.map((item) => (
					<ReportsCardContainer
						allReports={props.allReports}
						updateReport={props.updateReport}
						key={item.id}
						checkImage={props.checkImage}
						item={item}
					/>
				))}
			</View>
		</ScrollView>
	)
}
