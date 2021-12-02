import { styles } from './style'

const checkValidation = (item, field, state) => {
	return item[field]
		? styles.validPassword
		: item[state].length === 0
		? styles.passwordDefault
		: styles.inValidPassword
}

export default checkValidation
