import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const loader = () => {
  return (
<Spinner animation="border" style={{width:'100px',height:"100px",margin:'auto',display:"block"}}/>
  )
}

export default loader