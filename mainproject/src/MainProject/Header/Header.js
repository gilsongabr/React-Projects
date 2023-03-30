import 'bootstrap/dist/css/bootstrap.css'
import './header.css'
// import Button from 'react-bootstrap/Button'

export function Header() {
    return <div>
        <nav className="navbar bg-body-tertiary p-3 mb-2 bg-secondary bg-gradient">
            <div className="container-fluid ">
                <a className="navbar-brand me-0" href="#">icone_List</a>
                <a className="navbar-brand me-0" href="#">Nome do sistema</a>
                <a className="navbar-brand me-0" href="#">icone_Logout</a>
            </div>
        </nav>
    </div>
}

export default Header