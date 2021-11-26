import React, { useState, useEffect, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MyReports } from './MyReportsView'
import { useNavigation } from '@react-navigation/native'
import getReportsController from '../../../../controllers/reportsList/getReports'
import { setReportsList, setReports } from '../../../../redux/slices/reportsSlice'
import bookList from '../../../../controllers/authorization/BookListController'
import { Context } from '../../../../context'

export const MyReportsContainer = () => {
	const dispatch = useDispatch()
	const userID = useSelector((state) => state.user.id)
	const profileReportsList = useSelector((state) => state.reports.profileReportsList)
	const [checkState, setCheckState] = useState(false)
	const token = useContext(Context)
	const allReports = () => {
		getReportsController(userID, token).then((res) => {
			if (res.status === 200) {
				dispatch(setReportsList(res.data.reportRequest))
			}
		})
	}
	useEffect(() => {
		bookList(userID, token).then((res) => {
			if (res.status === 200) {
				dispatch(setReports(res.data.reportsInfo))
			}
		})
	}, [checkState])

	const navigation = useNavigation()
	const goToReportsList = () => {
		navigation.navigate('MyReportsContainer', { setCheckState: setCheckState })
		allReports()
	}
	return <MyReports goToReportsList={goToReportsList} reports={profileReportsList} />
}
