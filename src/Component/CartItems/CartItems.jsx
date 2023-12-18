import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {
    const {all_collections, cartItems, removeFromCart, totalCartValue} = useContext(ShopContext)


  return (
    <div className='cart-items'>
        <div className="cart-items-format-main">
            <p>Products</p>
            <p>Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total Price</p>
            <p>Remove</p>
        </div>
        <hr />
            {
                all_collections.map((e) => {
                    if(cartItems[e.id] > 0)
                    {
                        return <div>
                                    <div className="cartitems-format cart-items-format-main">
                                        <img src={e.image} alt='product-icon' />
                                        <p>{e.name}</p>
                                        <p>₹{e.new_price}</p>
                                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                        <p>₹{cartItems[e.id]*e.new_price}</p>
                                        <button onClick={() => {removeFromCart(e.id)}} className='remove-button'> Remove </button>
                                    </div>
                                    <hr />
                                </div>
                    }
                    return <></>
                })

            }

            <div className="cartitems-total">
                <div className='cartitems-div2'>
                    <h1>Total Cart</h1>
                    <div>
                        <div className="total-cart-items">
                            <p>Subtotal</p>
                            <p>₹{totalCartValue()}</p>
                        </div>
                        
                        <div className="total-cart-items">
                            <p>Shipping fee</p>
                            <p>free</p>
                        </div>
                        <hr />
                        <div className="total-cart-items">
                            <p>Total price</p>
                            <p>₹{totalCartValue()}</p>
                        </div>
                    </div>
                        <button className='total-cart-checkout'>Proceed To Checkout</button>
                </div>

                <div className="total-cart-coupon">
                    <p>If you have any coupon code, Enter Here</p>
                    <input type='text' placeholder='Enter Coupon here' />
                    <button>Apply</button>
                </div>
            </div>
        
    </div>
  )
}

export default CartItems