import React from 'react'
import './BreadCrum.css'
import { Link } from 'react-router-dom'


const BreadCrum = (props) => {
  return (
    <div className='bread-crum'>
       <Link to={`/`}  style={{textDecoration:'none'}}> <p >HOME</p></Link> /
       <Link to={`/`}  style={{textDecoration:'none'}}><p>SHOP</p></Link>  / 
       <Link to={`/${props.product.category}`} style={{textDecoration:'none'}}>< p>{(props.product.category).toUpperCase()}</p> </Link> /
        <Link style={{textDecoration:'none'}}><p onClick={() => {window.location.reload();}}>{props.product.name}</p></Link>
    </div>
  )
}

export default BreadCrum