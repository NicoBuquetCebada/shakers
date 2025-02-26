import axios from 'axios'
import config from '../../config.js'

export const addProducto = async (nombre, descripcion, precio, imagen, stock) => {
	const response = await axios.post(`${config.API_BASE_URL}/productos`, {
		nombre,
		descripcion,
		precio,
		imagen,
		stock
	})
	return response.data
}
