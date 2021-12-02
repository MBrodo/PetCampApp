import React from 'react'
import { Text, View, Pressable, Image } from 'react-native'
import { styles } from '../../style'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import images from '../../MyProfile'
import { ProfileRowInfo } from '../../../../common/petInfo/ProfileRowInfo'
import { Loader } from '../../../../common/Loader/Loader'
import { EmptyContent } from '../../../../common/petInfo/EmptyContent'

export const MyReports = (props) => {
	const reportsCheck = () => {
		return props.reports.length === 0 ? (
			<EmptyContent text={'reports'} />
		) : (
			<View style={styles.containerMain}>{props.reports.map((item) => reportsList(item))}</View>
		)
	}
	const reportsList = (item) => (
		<View key={item.id} style={styles.containerElement}>
			<View style={styles.containerWrapper}>
				<View>
					<Image source={images.defaultImage} style={styles.petPic} />
					<Icon style={styles.myReportsIcon} name="paw" size={20} />
					<Icon style={styles.myReportsCamera} name="camera" size={20} />
				</View>
				<View style={styles.elementMain}>
					<View style={styles.elementFloor}>
						<ProfileRowInfo item={item.pet_name} title={'Name'} />
						<ProfileRowInfo item={item.booking} title={'Booking №'} />
					</View>
					<View style={styles.elementFloor}>
						<ProfileRowInfo
							item={item.name + ' ' + item.surname.substring(1, 0) + '.'}
							title={'Manager'}
						/>
						<ProfileRowInfo item={item.write_time.substring(10, 0)} title={'Date'} />
					</View>
				</View>
			</View>
		</View>
	)
	return (
		<View style={styles.container}>
			<View style={styles.containerHeader}>
				<Text style={styles.containerTitle}>My reports</Text>
				<Pressable onPress={() => props.goToReportsList()} style={styles.containerLink}>
					<Text style={styles.containerLinkText}>See more</Text>
					<Icon style={styles.containerLinkIcon} name="arrow-right" size={15} />
				</Pressable>
			</View>
			{props.isLoading ? Loader() : reportsCheck()}
		</View>
	)
}
