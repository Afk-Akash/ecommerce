import React, { useContext, useState } from 'react'
import './Navbar.css'
import cart from '../Assets/cart.png'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {totalInCart} = useContext(ShopContext)

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <Link to='/' style={{textDecoration:'none'}}><img src={logo} alt='' onClick={() => {setMenu("shop")}}/></Link>
            
        </div>
        <ul className='nav-menu'>
            <li onClick={() => {setMenu("shop")}} ><Link to='/' style={{textDecoration:'none'}}>Shop</Link> {menu === 'shop' ? <hr/> : <></>}</li>
            <li onClick={() => {setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none'}}>Mens</Link> {menu === 'mens' ? <hr/> : <></>}</li>
            <li onClick={() => {setMenu("womens")}}> <Link to='/womens' style={{textDecoration:'none'}}>Womens</Link> {menu === 'womens' ? <hr/> : <></>}</li>
            <li onClick={() => {setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link> {menu === 'kids' ? <hr/> : <></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/signin'><button>Login</button></Link>
            <Link to='/cart'><img src={cart} alt=''/></Link>
            <div className='nav-cart-count'>{totalInCart()}</div>
        </div>
    </div>
  )
}

export default Navbar