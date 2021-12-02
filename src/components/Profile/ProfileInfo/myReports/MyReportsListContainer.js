import React, { useContext } from 'react'
import { MyReportsListView } from './MyReportsListView'
import { useSelector, useDispatch } from 'react-redux'
import getReportsController from '../../../../controllers/reportsList/getReports'
import { setReportsList, setReports } from '../../../../redux/slices/reportsSlice'
import bookList from '../../../../controllers/authorization/BookListController'

export const MyReportsListContainer = () => {
	const userID = useSelector((state) => state.user.id)
	const reports = useSelector((state) => state.reports.all)
	const dispatch = useDispatch()

	const allReports = () => {
		getReportsController(userID).then((res) => {
			if (res.status === 200) {
				dispatch(setReportsList(res.data.reportRequest))
			}
		})
	}
	const updateReport = () => {
		bookList(userID).then((res) => {
			if (res.status === 200) {
				dispatch(setReports(res.data.reportsInfo))
			}
		})
	}

	return <MyReportsListView allReports={allReports} reports={reports} updateReport={updateReport} />
}
