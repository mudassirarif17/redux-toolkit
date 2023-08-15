import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div class="card mb-1" style={ { width: "18rem" } }>
                <img src={props.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.product}</h5>
                    <p class="card-text">Price : {props.price}</p>
                    <button className='btn btn-primary'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card
