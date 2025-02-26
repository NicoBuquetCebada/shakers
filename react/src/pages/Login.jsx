import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom" // redirecciones
import logo from '../assets/shakers.png'
import { login } from "../request/login.jsx"

function Login({ sesion, cerrar }) {
	const [data, setData] = useState({user: "", pass: ""})
	const [error, setError] = useState("")
	const navigate = useNavigate() // constante de redirección

	useEffect(cerrar, [])

	// input.onChange
	function handleChange(e) {
		setData({
			...data, // copia el estado del objeto, haciendo que no se pierdan los que no actualizas
			[e.target.name]: e.target.value
		})
	}

	// form.onSubmit
	async function handleSubmit(e) {
		e.preventDefault() // previene el reinicio
		setError("")

		try {
			const apiData = await login(data.user, data.pass)
			sesion(apiData)
			navigate("/index")
		} catch (error) {
			setData({user: "", pass: ""})
			setError(error.response.data.error)
		}
		
	}
	return (
		<>
			<form className='loginForm' onSubmit={handleSubmit}> {/* El onSubmit hace que se ejecute la función al pulsar el botón */}
				<h2 className="loginFormTitulo">Inicia sesion en shackers</h2>
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
				<p className="error">{error}</p>
				<button className="loginButton" type="submit">enviar</button>
				<p>¿No tienes cuenta? <a className="pRegistrate" href="/registro">Registrate</a></p>
			</form>
			<div className="loginDivLogo">
				<h1 className="loginTitulo">Nuestro pigmento, tu calidad</h1>
				<img className="loginImg" src={logo} />
			</div>
		</>
	)
}

export default Login
