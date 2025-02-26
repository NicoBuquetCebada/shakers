import axios from 'axios'
import config from '../../config.js'

export const devolver = async (compraId, cantidad) => {
	const response = await axios.post(`${config.API_BASE_URL}/historial/devolucion`, {
		compraId,
		cantidad
	})
	console.log(response.data)
	return response.data
}
