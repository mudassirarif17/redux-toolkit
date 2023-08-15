import React from 'react'
import data from "../Products.json"
import Card from './Card'


const Items = () => {
  return (
    <div className='container mx-auto mt-5'>
      <div className='row'>
      {data.map((a)=><div className='col-md-4'>
        <Card id={a.id} product={a.productName} img={a.image} price={a.price}/>
      </div>
      )}
      </div>
    </div>
  )
}

export default Items
