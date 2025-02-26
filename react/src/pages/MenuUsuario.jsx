import '../styles/estilosTrastienda.css'
import { useState, useEffect } from 'react'
import { findComprasByUser } from '../request/findComprasByUser.jsx'
import { devolver } from '../request/devolver.jsx'
import { findDevolucionesByUser } from '../request/findDevolucionesByUser.jsx'
import { useNavigate } from 'react-router-dom'

function MenuUsuario({ usuario }) {
	if (!usuario) {
		return <h2>Cargando...</h2>
	}
	const navigate = useNavigate();
	const [compras, setCompras] = useState([])
	const [tipo, setTipo] = useState(true)
	const [devoluciones, setDevoluciones] = useState([])
	const [cantidad, setCantidad] = useState('')
	useEffect(() => {
		async function fetchCyD(id) {
			try {
				const apiCompras = await findComprasByUser(id)
				const apiDevoluciones = await findDevolucionesByUser(usuario.id)
				console.log(apiDevoluciones)
				setCompras(apiCompras)
				setDevoluciones(apiDevoluciones)
			} catch (error) {
				console.error(error.response.data.error)
			}
		}

		fetchCyD(usuario.id)
	}, [])

	async function handleClick(id, cantidad) {
		try {
			await devolver(id, cantidad)
			window.location.reload()
		} catch (error) {
			alert(error.response.data.error)
		}
	}

	function handleChange(e) {
		setCantidad(e.target.value)
	}
	function goLogin() {
		navigate('/')
	}

	function handleTipo(e) {
		e.preventDefault()
		setTipo(prevState => !prevState)
		document.getElementById('tcp')
		if (tipo) {
			tcp.innerHTML = "devoluciones"
		} else {
			tcp.innerHTML = "compras"
		}
	}
	return (
		<>
			<form className='trastiendaForm'>
				<h2 className="loginFormTitulo">Menú de usuario</h2>
				<button className="loginButton" onClick={handleTipo}>historial de devoluciones</button>
				<button className="loginButton" onClick={goLogin}>cerrar sesión</button>
			</form>
			<p className='ghost'></p>
			<div className="trastienda">
				<h1 id='tcp' className="loginTitulo">Compras</h1>
				{(compras.length === 0) ?
				(<p className='error'>El historial de compras esta vacío.</p>) : (
				tipo ? (compras.map((p) => (
					<div className="trasP">
						<img className="trasImg"  src={p.imagen} />
						<div className="trasInfo">
							<h2></h2>
							<p className='histP'>{p.fechaCompra}</p>
							<p className='histP'>{p.cantidad}</p>
							<p className='histP'>{p.stock}</p>
						</div>
						<input type="number" placeholder='cantidad' min={1} value={cantidad} onChange={handleChange}/>
						<a className='dSvg' onClick={() => handleClick(p.id, cantidad)}>
							<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
								<path fill="currentColor" d="M11.825 13H15q.425 0 .713-.288T16 12t-.288-.712T15 11h-3.175l.9-.9Q13 9.825 13 9.413t-.3-.713q-.275-.275-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.688.287t.712-.287q.275-.275.275-.7t-.275-.7zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H19q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm7-16.75q.325 0 .538-.213t.212-.537t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212" />
							</svg>
						</a>
					</div>
				))) : (devoluciones.map((p) => (
					<div className="trasP">
						<img className="trasImg"  src={p.imagen} />
						<div className="dInfo">
							<h2></h2>
							<p className='histP'>{p.fechaCompra}</p>
							<p className='histP'>{p.cantidad}</p>
							<p className='histP'>{p.stock}</p>
						</div>
					</div>)))
				)}
			</div>
		</>
	)
}

export default MenuUsuario
