import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/userAction';

function Header() {
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin;

  const logoutHandler =()=>{
    dispatch(logout())
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>Online Shop</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fa-solid fa-cart-shopping"></i>
                &nbsp; CART
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to="/profile">
                  <NavDropdown.Item>
                    Profile
                  </NavDropdown.Item>

                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                
              </NavDropdown>
            ) : (<LinkContainer to='login'>
              <Nav.Link eventKey={2} href="#memes">
                <i className="fa-solid fa-user"></i>
                &nbsp; SIGNIN
              </Nav.Link>
            </LinkContainer>)}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;