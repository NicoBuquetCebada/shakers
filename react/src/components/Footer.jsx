import React from 'react'
import logo from '../assets/shakers.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
			<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20">
				<path className='path' fill="#fff" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m2.274 6.634h-1.443c-.171 0-.361.225-.361.524V8.6h1.805l-.273 1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545v-.874c0-1.254.87-2.273 2.064-2.273h1.443z" />
			</svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
			<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20">
				<path className='path' fill="#fff" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z" />
			</svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
			<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20">
				<path className='path' fill="#fff" d="M10.015 9.949h-.03c-1.191 0-2.24-.303-2.861.268a1.57 1.57 0 0 0-.527 1.197c0 1.852 1.483 2.08 3.389 2.08h.029c1.905 0 3.389-.229 3.389-2.08c0-.443-.156-.856-.527-1.197c-.622-.571-1.671-.268-2.862-.268M8.393 12.48c-.363 0-.656-.408-.656-.91s.293-.908.656-.908s.657.406.657.908c.001.502-.293.91-.657.91m3.213 0c-.363 0-.657-.408-.657-.91s.294-.908.657-.908c.362 0 .656.406.656.908c.001.502-.293.91-.656.91M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m.876 13.539c-.172 0-.514 0-.876.002c-.362-.002-.704-.002-.876-.002c-.76 0-3.772-.059-3.772-3.689c0-.834.286-1.445.755-1.955c-.074-.184-.078-1.232.32-2.236c0 0 .916.1 2.301 1.051c.289-.081.781-.122 1.272-.122s.982.041 1.273.121c1.385-.951 2.301-1.051 2.301-1.051c.398 1.004.395 2.053.32 2.236c.469.51.755 1.121.755 1.955c-.001 3.632-3.013 3.69-3.773 3.69" />
			</svg>
        </a>
      </div>
      <div className="footer-main">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="">Sobre nosotros</a></li>
            <li><a href="">Contacto</a></li>
            <li><a href="">Política de privacidad</a></li>
            <li><a href="">Sobre nosotros</a></li>
            <li><a href="">Contacto</a></li>
            <li><a href="">Política de privacidad</a></li>
            <li><a href="">Contacto</a></li>
            <li><a href="">Política de privacidad</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer
