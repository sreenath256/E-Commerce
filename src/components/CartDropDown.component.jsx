import React from 'react'

const CartDropDown = () => {
  return (
    <div className='absolute w-64 h-96 flex flex-col p-5  bg-white top-20 right-10 z-20'>
      <div className=' drop-down w-full h-72  bg-red-400 flex flex-col overflow-scroll '>
      </div>
        <button className='mt-auto bg-yellow-300 w-full h-12 hover:bg-gray-700 hover:text-white'>GO TO CHECKOUT</button>
    </div>
  )
}

export default CartDropDown
