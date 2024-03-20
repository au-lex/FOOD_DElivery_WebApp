import React from 'react'
import HeaderFooter from "../HeaderFooter";
import Loader from '../Loader';

const Cart = () => {
  return (
    <>
    <Loader />
    {/* {isCartOpen && (
  <>
<div className='fixed top-0 left-0 w-full h-full bg-white  z-40'></div>

        <div
          className="bg-white min-h-[20rem] top-[4rem]   z-50 px-6 w-full fixed mb-[5rem] 
          act"
         
        > 
   <div className=''>
      <h1 className="text-xl font-meduim pt-4 mb-4">My Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">No items in the cart</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b border-gray-200 py-4"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-16 h-16">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div>
                  <h3 className="text-[12px] font-meduim">{item.name}</h3>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decreaseQuantity(index)}
                  className="text-gray-500 px-2 py-1 border border-gray-300 rounded"
                >
                  -
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(index)}
                  className="text-gray-500 px-2 py-1 border border-gray-300 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(index)}
              
              >
                   <RiCloseCircleFill className="text-[2rem]  text-red-500" />
              </button>
            </li>
          ))}

{cart.length > 0 && (
        <p className="text-lg font-bold mt-4">Total: ${total.toFixed(2)}</p>

      )}
       <div className="btnn pb-[2rem]"> 
       <Link to='/Check'>
  <button className="bg-orange-500 rounded-[10px] text-white w-full p-3 transition duration-300 ease-in-out hover:bg-orange-700">
    Checkout
  </button>
       </Link>
</div>

        </ul>
      )}

     

      
    </div>

        </div>
        </>
      )} */}

cart
    <HeaderFooter />
    </>
  )
}

export default Cart