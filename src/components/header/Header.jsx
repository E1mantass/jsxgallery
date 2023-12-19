import {Link} from "react-router-dom"

const Header = ()=>{
    return(
        <div className="container">
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand">Gallery</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to ="/" className="nav-link active" aria-current="page">Pagrindinis</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" aria-current="page">Apie Projekta</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header;