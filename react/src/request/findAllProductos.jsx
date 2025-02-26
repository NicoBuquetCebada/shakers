import axios from "axios"
import config from '../../config.js'

export const findAllProductos = async () => {
	const response = await axios.get(`${config.API_BASE_URL}/productos`)
	return response.data
}