import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/slices/cartSlices';

const Card = (props) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div class="card mb-1" style={ { width: "18rem" } }>
                <img src={props.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.product}</h5>
                    <p class="card-text">Price : {props.price}</p>
                    <button onClick={(e)=> dispatch(addItem)} className='btn btn-primary'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card
