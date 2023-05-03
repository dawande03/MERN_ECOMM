import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RatingPage from './RatingPage'

const ProductPages = ({ product }) => {
    return (
        <div>
            <Card className='my-4 p-3'>
                <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} />
                </Link>
                <Card.Body>
                    <Link to={`/product/${product._id}`}>
                        <Card.Title as ="div">
                            <strong>
                                {product.name}
                            </strong>
                        </Card.Title>
                    </Link>
                    <Card.Text as='div'>
                        <div className='my-3'>
                            <RatingPage value = {product.rating} text= {`${product.numReviews} reviews `}/>
                        </div>
                    </Card.Text>
                    <Card.Text as='div'>
                        ${product.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductPages