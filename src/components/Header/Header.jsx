import "./Header.css"
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div className="header-content">
            <div className="header_logo">
            <Link to="/" className="header_logo-link">
                    <span className="header_logo-link-setting">I</span>Alex
            </Link>
            </div>

            <nav className="header_nav">
                <ul className="header_nav-list">
                    <li className="header_nav-item">
                        <Link to="/iphones" className="header_nav-link">
                            IPhone
                        </Link>
                    </li>
                    <li className="header_nav-item">
                        <a href="/" className="header_nav-link">IPad</a>
                    </li>
                    <li className="header_nav-item">
                        <a href="/" className="header_nav-link">Mac</a>
                    </li>
                    <li className="header_nav-item">
                        <a href="/" className="header_nav-link">Гаджети</a>
                    </li>
                    <li className="header_nav-item">
                        <a href="/" className="header_nav-link">
                            <svg className="awesome-search" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6589 7.04847C12.6589 10.4189 10.0195 13.0969 6.82947 13.0969C3.63946 13.0969 1 10.4189 1 7.04847C1 3.67801 3.63946 1 6.82947 1C10.0195 1 12.6589 3.67801 12.6589 7.04847Z" stroke="white" stroke-width="2"/>
                                <path d="M10.9595 11.7144L11.5942 10.9958L18.2778 17.5002C18.4675 17.6848 18.4793 17.9954 18.304 18.1938C18.1287 18.3922 17.8328 18.4034 17.6431 18.2188L10.9595 11.7144Z" stroke="white" stroke-width="1.47937"/>
                            </svg>
                        </a>
                    </li>
                    <li className="header_nav-item">
                        <Link to="/cart" className="header_nav-link">
                            <svg className="awesome-favorites" width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 14.2596L20.0422 18.3975L20.2749 18.8689L20.7951 18.9445L25.3616 19.6081L22.0573 22.829L21.6808 23.196L21.7697 23.7141L22.5497 28.2622L18.4653 26.1149L18 25.8702L17.5347 26.1149L13.4503 28.2622L14.2303 23.7141L14.3192 23.196L13.9427 22.829L10.6384 19.6081L15.2049 18.9445L15.7251 18.8689L15.9578 18.3975L18 14.2596Z" stroke="white" stroke-width="2"/>
                                <path d="M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5Z" fill="#FFD325"/>
                                <path d="M9.10156 11H8.375V6.18359L6.91797 6.71875V6.0625L8.98828 5.28516H9.10156V11Z" fill="white"/>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;