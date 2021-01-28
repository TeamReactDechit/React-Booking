
import Logo from "../images/Logo.svg"
import "../css/Header.css"
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

    return(
     <header>
         <nav className="navbar navbar-light bg-light p-0">
            <div className="container-fluid header-colors">
                <a className="navbar-brand">
                    <img className="img-item" src={Logo} alt="logo"/>
                </a>
                <span>
                    <FontAwesomeIcon className="me-2 fa-lg" icon={faUserCircle} />
                    <span className="fw-bold">LOGIN</span>

                    {/* PART FOR LOGGED */}
                    {/* <div className="dropdown">
                        <button className="header-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            Benvenuto NOME UTENTE!
                            <FontAwesomeIcon className="fa-lg mx-2" icon={faUserCircle} />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item fw-bold" href="#">Il Tuo Profilo</a></li>
                            <li><a className="dropdown-item fw-bold" href="#">Logout</a></li>
                        </ul>
                    </div> */}
                </span>
            </div>
        </nav>
    </header>
    );
}

export default Header;