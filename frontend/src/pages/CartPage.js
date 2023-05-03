import React, { useEffect } from 'react'
import { Col, Image, ListGroup, ListGroupItem, Row,Form, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Message from '../components/shared/Message';
import { addToCart, removeFromCart } from '../redux/actions/cartAction';

const CartPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty))
    }
  }, [dispatch, id, qty])

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart;
  console.log(cartItems, "data");

  const removeFromCartHandler = (id)=>{
  dispatch(removeFromCart(id))
  }

  const checkOut = ()=>{
    navigate("/login ? redirect=shipping")
  }

  return (
    <div>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {
            cartItems.length === 0 ? (
              <Message>Your cart is Empty !
                <Link to="/">Go Back</Link>
              </Message>
            ) : (<ListGroup variant='flush'>
              {
                cartItems.map((item, index) => {
                  return (
                    <ListGroupItem>
                      <Row>
                        <Col md={2}>
                          <Image src={item.image} alt={item.name} fluid rounded />
                        </Col>
                        <Col md={3}>
                          <Link to={`/product/${item.product}`}>{item.name}</Link>
                        </Col>
                        <Col md={2}>
                          ${item.price}
                        </Col>
                        <Col md={2}>
                          <Form.Control as='select' value={item.qty} onChange={(e) => dispatch(addToCart(item.product,Number(e.target.value)))}>
                            {
                              [...Array(item.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))
                            }
                          </Form.Control>
                          <Button type='button' variant='light' onClick={()=>removeFromCartHandler(item.product)}>
                            <i className='fa fa-trash'aria-hidden="true"></i>
                          </Button>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  )
                })
              }
            </ListGroup>)
          }
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <h2>subtotal ({cartItems.reduce((acc,item) => acc + item.qty,0)}) item</h2>
                <h4>Total price:${cartItems.reduce((acc,item)=>acc+item.qty * item.price,0).toFixed(2)}</h4>
              </ListGroupItem>
              <Button type='button' className='btn btn-block' disabled={cartItems.length === 0} onClick={checkOut}>Proceed to checkout</Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default CartPage