import axios from "axios"
import config from '../../config.js'

export const findDevolucionesByUser = async (id) => {
	const response = await axios.get(`${config.API_BASE_URL}/historial/devoluciones/${id}`)
	return response.data
}
