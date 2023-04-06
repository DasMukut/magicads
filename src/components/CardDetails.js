import React from 'react'
import { useSelector } from "react-redux"
import Header from './Header';
const CardDetails = () => {
  const cartData = useSelector((state) => state.cartReducer.carts);
  // console.log("cart details", cartData)
  return (
    <>
      <Header />
      <h4 className='text-center'> Find Your Cart Items</h4>
      <div className="cart-page-container">
        <table>
          <thead>
            <td>Name</td>
            <td>ID</td>
            <td>Price</td>
          </thead>
          {
            cartData.map((item) => <tr key={item.key}>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>{item.price}</td>
            </tr>)
          }
        </table>
      </div>

    </>
  )
}

export default CardDetails