import { useState } from 'react'
import './App.css'
import Product from './Components/Product.jsx'

let user = {
  money: 100,
  products: [
    {
      'key': 1,
      'name': 'Keyboard',
      'price': 9.99,
      'stock': 0,
      'minStock': 1,
      'img': '../assets/product-imgs/keys.png'
    },
    {
      'key': 2,
      'name': 'Synth',
      'price': 6.99,
      'stock': 0,
      'minStock': 1,
      'img': '../assets/product-imgs/mpc.png'
    },

  ]
}
 
function App() {
  function listProducts(product){
    return (
      <Product
        name={product.name}
        price={product.price}
        stock={product.stock}
        minStock={product.minStock}
        img={product.img}
      />
    )
  }
  return (
    <>
      {user.products.map(listProducts)}
    </>
  )
}
export default App
