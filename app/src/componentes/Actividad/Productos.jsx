import React from 'react';
import './Productos.css'

const Productos = ({props}) => {
    const { title , txt_card, txt_btn, image } = props
    //destructuring
    return(
        <>
        <div className="cards-container">
            <div className="product-card">
                <span className='product-card-izquierdo'>
                <h3 className='card-title'>{title}</h3>
                <p className='card-parrafo'>{txt_card}</p>
                <button className='btn'>{txt_btn}</button>
                </span>

                <span className='product-card-derecho'>
                <img src={image} alt="" className='card-image'/>
                </span>
            </div>
        </div>
        </>
    )
}

export { Productos }