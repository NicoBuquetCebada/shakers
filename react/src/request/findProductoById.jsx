import axios from "axios"
import config from '../../config.js'

export const findProductoById = async (id) => {
	const response = await axios.get(`${config.API_BASE_URL}/productos/${id}`)
	return response.data
}
