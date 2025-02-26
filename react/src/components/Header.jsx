import { useNavigate } from "react-router-dom"
import logo from '../assets/shakers.png'
import lettering from '../assets/lettering.png'

function Header() {
	return (
		<header className="header">
			<a className="aImg" href="/index"><img className="headerImg" src={logo} /><img className="headerL" src={lettering} /></a>
			<div className="enlaces">
				<a href="#tienda">
					<svg className="svg1" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24">
						<path fill="#fff" fill-rule="evenodd" d="M8.25 6.015V5a3.75 3.75 0 0 1 7.5 0v1.015c1.287.039 2.075.177 2.676.676c.833.692 1.053 1.862 1.492 4.203l.75 4c.617 3.292.925 4.938.026 6.022C19.794 22 18.119 22 14.77 22H9.23c-3.35 0-5.024 0-5.924-1.084s-.59-2.73.026-6.022l.75-4c.44-2.34.659-3.511 1.492-4.203c.601-.499 1.389-.637 2.676-.676M9.75 5a2.25 2.25 0 1 1 4.5 0v1h-4.5z" clip-rule="evenodd" />
					</svg>
				</a>
				<a href="/menu">
					<svg className="svg2 svg1" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24">
						<circle cx="12" cy="6" r="4" fill="#fff" />
						<path fill="#fff" d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5" />
					</svg>
				</a>
				<a href="/trastienda">
					<svg className="svg1" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24">
						<path fill="#fff" d="M16.528 2H7.472c-1.203 0-1.804 0-2.288.299c-.483.298-.752.836-1.29 1.912L2.491 7.76c-.325.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.538-1.076-.806-1.614-1.29-1.912C18.332 2 17.73 2 16.528 2" />
						<path fill="#fff" fill-rule="evenodd" d="M20 21.25h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h2V12.5c.744 0 1.433-.232 2-.627a3.5 3.5 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.5 3.5 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.5 3.5 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.5 3.5 0 0 0 2 .627zm-10.5 0h5V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.55c-.348-.2-.815-.2-1.75-.2s-1.402 0-1.75.2a1.5 1.5 0 0 0-.549.55c-.201.348-.201.815-.201 1.75z" clip-rule="evenodd" />
					</svg>
				</a>
			</div>
		</header>
	)
}

export default Header