import jwt_decode from 'jwt-decode'

const getToken = (token) => jwt_decode(token)

export default getToken
