import axios from "axios"
import config from '../../config.js'

export const deleteProducto = async (id) => {
	const response = await axios.delete(`${config.API_BASE_URL}/productos/${id}`)
}