import "./Footer.css"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="wrapper">
                    <div className="footer__content">
                        <div className="footer__content-contacts">
                            <div className="footer__content-logo">
                                <span className="footer_logo">I</span>Alex
                            </div>

                            <div className="footer__content-soc">
                                <p className="footer__title">Ми в соцмережах:</p>

                                <div className="social-media">
                                    <a href="#!" className="sm-link">
                                        <svg className="sm" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29 1H8C4.13401 1 1 4.13401 1 8V29C1 32.866 4.13401 36 8 36H29C32.866 36 36 32.866 36 29V8C36 4.13401 32.866 1 29 1ZM8 0C3.58172 0 0 3.58172 0 8V29C0 33.4183 3.58172 37 8 37H29C33.4183 37 37 33.4183 37 29V8C37 3.58172 33.4183 0 29 0H8ZM18.5 26C22.6421 26 26 22.6421 26 18.5C26 14.3579 22.6421 11 18.5 11C14.3579 11 11 14.3579 11 18.5C11 22.6421 14.3579 26 18.5 26ZM18.5 27C23.1944 27 27 23.1944 27 18.5C27 13.8056 23.1944 10 18.5 10C13.8056 10 10 13.8056 10 18.5C10 23.1944 13.8056 27 18.5 27ZM30 7.78378C30.5523 7.78378 31 7.34817 31 6.81081C31 6.27345 30.5523 5.83784 30 5.83784C29.4477 5.83784 29 6.27345 29 6.81081C29 7.34817 29.4477 7.78378 30 7.78378Z" fill="white"/>
                                        </svg>

                                    </a>
                                </div>
                                <div className="social-media">
                                    <a href="#!" className="sm-link">
                                        <svg className="sm" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 1H30C33.3137 1 36 3.68629 36 7V30C36 33.3137 33.3137 36 30 36H7C3.68629 36 1 33.3137 1 30V7C1 3.68629 3.68629 1 7 1ZM0 7C0 3.13401 3.13401 0 7 0H30C33.866 0 37 3.13401 37 7V30C37 33.866 33.866 37 30 37H7C3.13401 37 0 33.866 0 30V7ZM26 17.9226L27 18.5L26 19.0774L15.25 25.2839L14.25 25.8612V24.7065V12.2935V11.1388L15.25 11.7161L26 17.9226ZM15.25 12.8708L25 18.5L15.25 24.1292V12.8708Z" fill="white"/>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="footer__menu-container">
                            <div className="footer__menu">
                                <div className="footer__menu-item">
                                    <Link to="/iphones">
                                        <h2 className="footer__menu-item-title iphone-logo">
                                            IPhone
                                        </h2>
                                    </Link>

                                    <ul className="footer__menu-list">
                                        <li className="footer_menu-item"><a href="#!" className="footer__menu-link">IPhone
                                            13 Pro Max</a></li>
                                        <li className="footer_menu-item"><a href="#!" className="footer__menu-link">IPhone
                                            13 Pro</a></li>
                                        <li className="footer_menu-item"><a href="#!" className="footer__menu-link">IPhone
                                            12 Pro Max</a></li>
                                        <li className="footer_menu-item"><a href="#!" className="footer__menu-link">IPhone
                                            12 Pro</a></li>
                                        <li className="footer_menu-item"><a href="#!" className="footer__menu-link">IPhone
                                            11 Pro Max</a></li>
                                        <li className="footer_menu-item"><a href="#!" className="footer__menu-link">IPhone
                                            11 Pro</a></li>
                                    </ul>
                                </div>

                                <div className="footer__menu-item">
                                    <h2 className="footer__menu-item-title ipad-logo">
                                        IPad
                                    </h2>

                                    <ul className="footer__menu-list">
                                        <li className="footer_menu-item"><a href="#!" className="footer__menu-link">IPad
                                            mini</a></li>
                                        <li className="footer_menu-item"><a href="#!" className="footer__menu-link">IPad
                                            pro</a></li>
                                        <li className="footer_menu-item"><a href="#!" className="footer__menu-link">IPad
                                            air</a></li>
                                    </ul>
                                </div>

                                <div className="footer__menu-item">
                                    <h2 className="footer__menu-item-title mac-logo">
                                        Mac
                                    </h2>

                                    <ul className="footer__menu-list">
                                        <li className="footer_menu-item"><a href="#!" className="footer__menu-link">MacBook
                                            Pro</a></li>
                                        <li className="footer_menu-item"><a href="#!" className="footer__menu-link">MacBook
                                            Air</a></li>
                                        <li className="footer_menu-item"><a href="#!" className="footer__menu-link">Mac
                                            Pro</a></li>
                                        <li className="footer_menu-item"><a href="#!" className="footer__menu-link">Mac
                                            Air</a></li>
                                    </ul>
                                </div>

                                <div className="footer__menu-item">
                                    <h2 className="footer__menu-item-title gadgets-logo">
                                        Гаджети
                                    </h2>

                                    <ul className="footer__menu-list">
                                        <li className="footer_menu-item"><a href="#!" className="footer__menu-link">Apple
                                            AirPods</a></li>
                                        <li className="footer_menu-item"><a href="#!" className="footer__menu-link">Apple
                                            Watch</a></li>
                                        <li className="footer_menu-item"><a href="#!" className="footer__menu-link">Apple
                                            AirTag</a></li>
                                        <li className="footer_menu-item"><a href="#!" className="footer__menu-link">Apple
                                            TV</a></li>
                                        <li className="footer_menu-item"><a href="#!" className="footer__menu-link">Інше</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="footer-info">
                <div className="wrapper">
                    <div className="footer-info__content">
                        <div className="footer-info__info">
                            <div className="footer-info__logo">
                                <span className="footer-info__logo-setting">I</span>Alex
                            </div>

                            <div className="footer-info__contacts">
                                <p className="footer-info__contact">
                                    <a href="#!" className="footer-info__link">info@iAlex.ua</a>
                                </p>
                                <p className="footer-info__contact">
                                    <a href="#!" className="footer-info__link">+380989107538</a>
                                </p>

                            </div>
                        </div>

                        <h2 className="location">
                            Ужгород 2021
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;