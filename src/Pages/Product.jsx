import React, { useContext } from 'react'
import BreadCrum from '../Component/BreadCrums/BreadCrum'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay'

const Product = (props) => {
  const all_product = useContext(ShopContext).all_collections
  const productId = useParams().productId;
  const product = all_product.find((e) => e.id === Number(productId))

  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product} />

    </div>
  )
}

export default Product