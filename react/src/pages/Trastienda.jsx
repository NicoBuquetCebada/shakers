import '../styles/estilosTrastienda.css'
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { findAllProductos } from '../request/findAllProductos.jsx'
import { addProducto } from '../request/addProducto.jsx'
import { deleteProducto } from '../request/deleteProducto.jsx'

function Trastienda() {
	const [data, setData] = useState({nombre: "", descripcion: "", precio: '', imagen: "", stock: ''})
	const [error, setError] = useState("")
	const navigate = useNavigate()
	const [productos, setProductos] = useState([])
	useEffect(() => {
		async function fetchProductos() {
			try {
				const productosData = await findAllProductos()
				setProductos(productosData)
			} catch (error) {
				console.error('Error intentando obtener los productos:', error)
			}
		}

		fetchProductos()
	}, [])

	async function handleDelete(id) {
		try {
			await deleteProducto(id)
			window.location.reload()
		} catch (error) {
			console.log(error.response.data.error)
		}
	}

	function handleChange(e) {
		setData({
			...data,
			[e.target.name]: e.target.value
		})
	}

	async function handleSubmit(e) {
		e.preventDefault() // previene el reinicio
		setError("")
		try {
			const apiData = await addProducto(data.nombre, data.descripcion, data.precio, data.imagen, data.stock)
			setProductos({nombre: "", descripcion: "", precio: '', imagen: "", stock: ''})
			window.location.reload()
			console.log(apiData)
		} catch (error) {
			let errores = error.response.data
			let firstKey = Object.keys(errores)[0]
			let errorMessage = firstKey + ": " + errores[firstKey]
			console.log(errorMessage)
			setError(errorMessage)
		}
		
	}
	return (
		<>
			<form className='trastiendaForm' onSubmit={handleSubmit}> {/* El onSubmit hace que se ejecute la función al pulsar el botón */}
				<h2 className="loginFormTitulo">Añadir Producto</h2>
				<input
					className = "loginInput"
					type = "text" 
					placeholder = "Nombre"
					name = "nombre"
					value = {data.nombre}
					onChange = {handleChange}
				/>
				<input
					className = "loginInput"
					type = "text" 
					placeholder = "Descripción"
					name = "descripcion"
					value = {data.descripcion}
					onChange = {handleChange}
				/>
				<input
					className = "loginInput"
					type = "number"
					step={0.01}
					placeholder = "Precio"
					name = "precio"
					min={0.01}
					value = {data.precio}
					onChange = {handleChange}
				/>
				<input
					className = "loginInput"
					type = "text" 
					placeholder = "Imagen"
					name = "imagen"
					value = {data.imagen}
					onChange = {handleChange}
				/>
				<input
					className = "loginInput"
					type = "number" 
					placeholder = "Stock"
					name = "stock"
					min={1}
					value = {data.stock}
					onChange = {handleChange}
				/>
				<button className="loginButton" type="submit">añadir</button>
				<p className="error">{error}</p>
			</form>
			<p className='ghost'></p>
			<div className="trastienda">
				<h1 className="loginTitulo">Trastienda</h1>
				{productos.map((p) => (
					<div className="trasP">
						<img className="trasImg"  src={p.imagen} />
						<div className="trasInfo">
							<h2>{p.nombre}</h2>
							<p className='desc'>{p.descripcion}</p>
							<p>{p.precio}</p>
							<p>{p.stock}</p>
						</div>
							<svg onClick={() => {handleDelete(p.id)}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
								<path className='trashP' fill="#fff" d="M10.238 3.974L9.98 5.75h4.037l-.256-1.776c-.048-.167-.17-.224-.243-.224H10.48c-.073 0-.195.057-.243.224m5.296 1.776H19.5a.75.75 0 0 1 0 1.5h-.769l-.873 10.185c-.053.62-.096 1.13-.165 1.542c-.07.429-.177.813-.386 1.169a3.25 3.25 0 0 1-1.401 1.287c-.372.177-.764.25-1.198.284c-.417.033-.928.033-1.55.033h-2.316c-.623 0-1.133 0-1.55-.033c-.434-.034-.826-.107-1.198-.284a3.25 3.25 0 0 1-1.401-1.287c-.21-.356-.315-.74-.386-1.169c-.069-.413-.112-.922-.165-1.542L5.269 7.25H4.5a.75.75 0 0 1 0-1.5h3.966l.293-2.029l.011-.061c.182-.79.86-1.41 1.71-1.41h3.04c.85 0 1.528.62 1.71 1.41l.011.061z" />
							</svg>
					</div>
				))}
			</div>
		</>
	)
}

export default Trastienda
