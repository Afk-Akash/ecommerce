import React from 'react'
import all_collections from './../Component/Assets/all_collection'
import Item from '../Component/Item'
import './ShopCategory.css'

const ShopCategory = (props) => {
  return (
    <div className='shop-category'>
        <img className='shop-banner' src={props.banner} alt='' />
        <h2> All Products for {props.category} </h2>
      <div className='shop-category-item' >
        {
          all_collections.map( (item, i) => {
            if(item.category === props.category) {
              return <Item key={i} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image} />
            }
            else return <></>
          })
        }
      </div>
      <div className='shop-category-load'>
        Load More
      </div>
      
    </div>
  )
}

export default ShopCategory