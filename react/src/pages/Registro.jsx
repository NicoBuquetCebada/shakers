import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from '../assets/shakers.png'
import { register } from '../request/register.jsx'

function Registro() {
	const [data, setData] = useState({nombre: "", apellido: "", telefono: "", domicilio: "", user: "", pass: ""})
	const [error, setError] = useState("")
	const navigate = useNavigate()

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
			const apiData = await register(data.nombre, data.apellido, data.telefono, data.domicilio, data.user, data.pass)
			navigate("/")
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
			<form className='registerForm' onSubmit={handleSubmit}> {/* El onSubmit hace que se ejecute la función al pulsar el botón */}
				<h2 className="loginFormTitulo">Registrate en shackers</h2>
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
					placeholder = "Apellido"
					name = "apellido"
					value = {data.apellido}
					onChange = {handleChange}
				/>
				<input
					className = "loginInput"
					type = "text" 
					placeholder = "Télefono"
					name = "telefono"
					value = {data.telefono}
					onChange = {handleChange}
				/>
				<input
					className = "loginInput"
					type = "text" 
					placeholder = "Domicilio"
					name = "domicilio"
					value = {data.domicilio}
					onChange = {handleChange}
				/>
				<input
					className = "loginInput"
					type = "text" 
					placeholder = "Usuario"
					name = "user"
					value = {data.user}
					onChange = {handleChange}
				/>
				<input
					className = "loginInput"
					type = "password" 
					placeholder = "Contraseña"
					name = "pass"
					value = {data.pass}
					onChange = {handleChange}
				/>
				<button className="loginButton" type="submit">enviar</button>
				<p className="error">{error}</p>
			</form>
			<div className="loginDivLogo">
				<h1 className="loginTitulo">Nuestro pigmento, tu calidad</h1>
				<img className="loginImg" src={logo} />
			</div>
		</>
	)
}

export default Registro
