import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { Link } from 'react-router-dom';

function NavbarPage() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to={'/'}>
                    <Navbar.Brand href="#">QPICK</Navbar.Brand>
                </Link>
                <input type="text" className='form-control' />
                <div className='d-flex'>
                    <Link to={'/like'}>
                        <FcLike style={{ fontSize: "25px", margin: "5px" }} />
                    </Link>
                    <FaShoppingCart style={{ fontSize: "25px"  , margin:"5px"}} />
                </div>
            </Container>
        </Navbar>
    );
}

export default NavbarPage;