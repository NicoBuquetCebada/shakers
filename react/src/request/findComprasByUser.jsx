import axios from "axios"
import config from '../../config.js'

export const findComprasByUser = async (id) => {
	const response = await axios.get(`${config.API_BASE_URL}/historial/compras/${id}`)
	return response.data
}
