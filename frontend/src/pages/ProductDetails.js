import axios from 'axios'
import React, { useEffect, useState} from 'react'
import { Button, Col, Form, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { listProductDetails } from '../redux/actions/productAction'
import Loader from '../components/shared/Loader'
import Message from '../components/shared/Message'
//import Product from '../products'
import RatingPage from './RatingPage'

const ProductDetails = () => {
    const [qty, setQty] = useState(1);
    let {id} = useParams();
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const productDetails = useSelector(state => state.productDetails);
      const {loading,product,error} = productDetails
    useEffect(() => {
       dispatch(listProductDetails(id))
    },[])

    const addToCartHandler = ()=>{
        navigate(`/cart/${id} ? qty=${qty}`)
    }
    return (
        <div>
            <Link to='/' style={{ paddingLeft: 13, textDecoration: 'none' }} className="btn btn-light">
                <i className="fa fa-arrow-left"><b> Go Back</b></i>
            </Link> 
            {
                loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : <Row>
                <Col md={6}>
                    <Image src={product.image} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <RatingPage value={product.rating} text={`${product.numReviews} Reviews`} />
                        </ListGroupItem>
                        <ListGroupItem>
                            Price : ${product.price}
                        </ListGroupItem>
                        <ListGroupItem>
                            Description : {product.description}
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    status:
                                </Col>
                                <Col>
                                    {product.countInStock > 0 ? 'In stock' : 'out of stock'}
                                </Col>
                            </Row>
                        </ListGroupItem>
                        {
                            product.countInStock > 0 && (
                                <ListGroupItem>
                                    <Row>
                                        <Col>
                                        Qty
                                        </Col>
                                        <Form.Control as='select' value={qty} onChange={e=>setQty(e.target.value)}>
                                            {
                                                [...Array(product.countInStock).keys()].map((x)=>(
                                                    <option key={x+1} value={x+1}>
                                                        {x+1}
                                                    </option>
                                                ))
                                            }
                                        </Form.Control>
                                    </Row>
                                </ListGroupItem>
                            )
                        }
                        <ListGroupItem>
                            <Button className='btn-block mx-auto' type='submit' onClick={addToCartHandler}>
                                Add to card
                            </Button>
                        </ListGroupItem>
                    </ListGroup>
                </Col>

            </Row>
            }
            
            
        </div>
    )
}

export default ProductDetails