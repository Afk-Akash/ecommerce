import React, { useContext } from 'react'
import './SimilarProduct.css'
import { ShopContext } from '../../Context/ShopContext'
import Item from '../Item'

const SimilarProduct = (props) => {
  const all_collections = useContext(ShopContext).all_collections


  return (
    <div className='similar-product'>
        <hr />
        <h2>You might be interested in</h2>
    <div className="similar-product-item">
    {
        (() => {
            let foundItems = 0;
            return all_collections.map((item, i) => {
                if (foundItems >= 6) {
                    return null; // If 5 items are found, return null to skip rendering
                }
                if (item.category === props.product.category && item.id !== props.product.id) {
                    foundItems++;
                    return <Item key={i} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image} />;
                } else {
                    return null;
                }
            });
        })()
    }
</div>

        
    </div>
  )
}

export default SimilarProduct