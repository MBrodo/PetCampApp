import jwt_decode from 'jwt-decode'

const checkToken = (token) => {
	const { exp } = jwt_decode(token)
	return exp > Math.round(Date.now() / 1000)
}

export default checkToken
