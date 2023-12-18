import React, { useContext } from 'react'
import './ProductDisplay.css'
import SimilarProduct from '../SimilarProduct/SimilarProduct'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

  const {addToCart} = useContext(ShopContext)
  
  return (
    <>
    <div className='product-display'>
        <div className='product-display-left'>
            <div className='product-display-img-list'>
                <img src={props.product.image} alt='' />
                <img src={props.product.image} alt='' />
                <img src={props.product.image} alt='' />
                <img src={props.product.image} alt='' />
            </div>
            <div className='product-display-img'>
                <img className='product-display-img-main' src={props.product.image} alt=''></img>
            </div>
        </div>

        <div className='product-display-right'>
            <h1>{props.product.name}</h1>
            <div className='product-display-right-star' >
              <p>4.2★</p>
              <h5>321 ratings & 24 reviews</h5>
            </div>
            <div className="product-display-prices">
              <div className="product-display-newprice">
                ₹{props.product.new_price.toLocaleString()}
              </div>
              {
                props.product.old_price !== props.product.new_price ?
                <>
                  <div className="product-display-oldprice">
                    ₹{props.product.old_price.toLocaleString()}
                  </div>
                  <div className="product-display-discount">
                    {parseInt(100*((props.product.old_price-props.product.new_price)/props.product.old_price))}% off
                  </div>
                </>
                :
                <>
                </>
              }
            </div>
            
            <div className="productdisplay-right-size">
              <h1>Select Size</h1>
              <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
              </div>
            </div>
            <button onClick={()=>{addToCart(props.product.id)}}>Add to Cart</button>

            <div className="product-display-description">
                <p>Clothing production involves a complex process that transforms raw materials into finished garments. It begins with the design and selection of fabrics, followed by cutting patterns and sewing pieces together. Quality control checks ensure consistency, and finally, the garments are packaged and prepared for distribution.  Throughout this process, attention to detail, precision in craftsmanship , and adherence to industry standards are essential to create high-quality clothing products for consumers.</p>
            </div>

        </div>
    </div>
    <SimilarProduct product={props.product} />
    </>
  )
}

export default ProductDisplay