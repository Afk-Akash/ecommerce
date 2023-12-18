import React from 'react'
import popular_product_data from '../Assets/popular_data'
import Item from '../Item'
import './Popular.css'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN MEN</h1>
        <hr />
        <div className='popular-item'>
            {popular_product_data.map((item, i) => {
              return  <Item key={i} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image} />

            })
            }
        </div>
    </div>
  )
}

export default Popular