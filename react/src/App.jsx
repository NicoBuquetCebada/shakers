import './styles/mediaQuery.css'
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './pages/Login.jsx'
import Index from './pages/Index.jsx'
import Registro from './pages/Registro.jsx'
import Producto from './pages/Producto.jsx'
import Trastienda from "./pages/Trastienda.jsx"
import MenuUsuario from "./pages/MenuUsuario.jsx"
import './App.css'

function App() {
	const [sesion, setUser] = useState(null)

	// Gestión de sesiones con react-router-dom
	useEffect(() => {
		// Cargar la sesión desde localStorage cuando la aplicación se monta
		const storedUser = localStorage.getItem('user');
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

		function inicioSesion(user) {
			setUser(user);
			localStorage.setItem('user', JSON.stringify(user)); // Guardar la sesión en localStorage
		}

		function cerrarSesion() {
			setUser(null);
			localStorage.removeItem('user'); // Eliminar la sesión de localStorage
		}

	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login sesion={inicioSesion} cerrar={cerrarSesion}/>}></Route>
				<Route path='/index' element={<Index />}></Route>
				<Route path='/registro' element={<Registro />}></Route>
				<Route path='/trastienda' element={<Trastienda />}></Route>
				<Route path='/menu' element={<MenuUsuario usuario={sesion}/>}></Route>
				<Route path='/producto/:id' element={<Producto usuario={sesion}/>}></Route>
			</Routes>
		</Router>
	)	
}

export default App
