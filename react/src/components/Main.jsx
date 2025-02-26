import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { findAllProductos } from '../request/findAllProductos'

function Main() {
	const navigate = useNavigate();
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

	function handleClick(id) {
		navigate(`/producto/${id}`)
	}

	return (
		<div className='pMain'>
			{productos.map((p)=>(
				<div className='pCarta' onClick={() => {handleClick(p.id)}}>
					<img className='pImg' src={p.imagen} />
					<h3 className='pP'>{p.nombre}</h3>
					<h4 className='pP'>{p.precio} €</h4>
				</div>
			))}
		</div>
	)
}

export default Main
