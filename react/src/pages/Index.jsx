import Header from '../components/Header.jsx'
import Carousel from "../components/Carousel.jsx"
import Main from "../components/Main.jsx"
import Footer from '../components/Footer.jsx'

function Index() {

	
	return (
		<div className="indexMain">
			<Header />
			<Carousel />
			<h1 className="tiendaTitulo" id="tienda">Productos de Shakers</h1>
			<Main />
			<Footer />
		</div>
	)
}

export default Index