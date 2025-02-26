import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { findProductoById } from '../request/findProductoById.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { comprar } from '../request/compra.jsx'

function Producto({ usuario }) {
	const navigate = useNavigate();
	const { id } = useParams(); // Recoge el dato especificado en la url
	const [producto, setProducto] = useState(null)
	const [value, setValue] = useState('')
	const [error, setError] = useState("")
	useEffect(() => {
		async function fetchProducto(id) {
			try {
				const apiData = await findProductoById(id)
				setProducto(apiData)
			} catch(error) {
				console.error(error.message)
			}
		}
		fetchProducto(id)
	}, [])

	function handleChange(e) {
		setValue(e.target.value)
	}

	async function handleSubmit(e) {
		e.preventDefault()
		setError("")
		try {
			const apiData = await comprar(usuario.id, producto.id, value, producto.descripcion)
			alert("!Compra realizada con exito!")
			navigate("/index")
		} catch (error) {
			setError(error.response.data.error)
		}
	}
	
	if (!producto) {
		return <h2>cargando...</h2>
	}
	return (
		<div className='indexMain'>
			<Header />
			<div className='cProducto'>
				<div className='cImg'><img src={producto.imagen} /></div>
				<div className='cInfo'>
					<h1>{producto.nombre}</h1>
					<p>{producto.descripcion}</p>
					<h4>{producto.precio} €</h4>
					<form onSubmit={handleSubmit}>
						<input placeholder="Cantidad" type="number" min={1} value={value} onChange={handleChange}/>
						<button type='submit'>comprar</button>
					</form>
					<p className="error">{error}</p>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Producto