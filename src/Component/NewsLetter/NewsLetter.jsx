import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div  className='newsletter'>
        <h1>GET EXCLUSIVE OFFERS ON YOUR MAIL</h1>
        <p> SUBSCRIBE OUR NEWSLETTERS AND STAY UPDATED</p>

        <div >
            <input type='email' placeholder='abc@xyz.com' required/>
            <button>SUBSCRIBE</button>
        </div>
    </div>
  )
}

export default NewsLetter