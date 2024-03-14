import React from 'react'

export default function product(props) {
  return (
    <div className="productCard">
      <section className="productLeft">
        <section className="productTop">
          <h2 className="product-name">{props.name}</h2>
          <h3 className="price">${props.price}</h3>
        </section> 
        <section className="productBottom">
          <p className="stock">Strock: {props.stock}</p>
          <p className="minsStock">Min: {props.minStock}</p>
        </section> 
      </section>
      
      <section className="productRight">
        <img className="product-img" src={props.img} alt={props.name} />
      </section>
      
    </div>
  )
}
