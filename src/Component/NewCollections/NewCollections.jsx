import React from 'react'
import new_collection_product from '../Assets/new-collection-data'
import Item from '../Item'
import './NewCollections.css'



const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr/>
        <div className='new-collections-item'>
            {new_collection_product.map((item, index) => {
                return <Item key={index} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections