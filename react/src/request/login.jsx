import axios from "axios"
import config from '../../config.js'

export const login = async (nickname, password) => {
	const response = await axios.post(`${config.API_BASE_URL}/usuarios/login`, {
		nickname,
		password
	})
	return response.data
}