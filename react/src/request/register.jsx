import axios from 'axios'
import config from '../../config.js'

export const register = async (nombre, apellido, telefono, domicilio, nickname, password) => {
	const response = await axios.post(`${config.API_BASE_URL}/usuarios`, {
		nombre,
		apellido,
		nickname,
		password,
		telefono,
		domicilio
	})
	return response.data
}
