import axios from 'axios'
import config from '../../config.js'

export const comprar = async (usuarioId, productoId, cantidad, descripcion) => {
	const response = await axios.post(`${config.API_BASE_URL}/historial/compra`, {
		usuarioId,
		productoId,
		cantidad,
		descripcion
	})
	return response.data
}
