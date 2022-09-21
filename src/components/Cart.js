import React from 'react'

const Cart = ({  cartItems,onRemove, onAdd,remove}) => {

const t = cartItems.reduce((total, item)=>total+(item.price*item.qty),0)

  return (

    <div>
        <div>
                    {cartItems.length===0 && <h1 className="text-2xl text-black text-center mt-5">Cart is empty</h1>}
                  </div>
         {  cartItems.map((item) => {
                    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
              
                 
                const totalPrice = item.qty * item.price

                return (
                  <>
                 
                    <div classNames=''>
                    <div key={item.id} className='border-b-2 border-red-600 flex  mx-3 md:flex-row flex-col  justify-between '>
                  

                    <div className=' p-3 flex items-center md:flex-row flex-col gap-4'>
                    <img src={item.image} alt={item.name} className='object-cover' style={{width: '417px', height: '417px'}}/>
                    <div>
                    <p className='text-lg font-semibold ' style={{width:'324px'}}>{item.name}</p>
                    <p>Category: {item.category}</p>
                 
                      </div>
                   
                    
                    </div>

              <div className="flex w-96 item-center justify-center gap-3 p-3">
                <div className='flex justify-between  items-center'>
                  <button onClick={() => onAdd(item)} className="ml-3">
                <span className="text-lg text-center p-2 px-3" style={{background:'red'}}>+</span>
                 </button>
                 <span className='p-2'>{item.qty} </span>
                 <button onClick={() =>onRemove(item)} ><span className="text-lg text-center p-2 px-3" style={{background:'#C7C3C3'}}>-</span>
                 </button>
                </div>


                <div className="flex items-center  pl-16 justify-between w-full">
               <button onClick={() =>{remove(item)}}> <span className="text-lg text-center p-2 px-3 h-16" style={{background:'#C7C3C3'}}>X</span></button>
                <p className='text-lg  font-semibold mt-2'>₹{item.price}</p>
                </div>
             
                    </div>
             
           
             </div> 
               
           
                   
        </div>
      </>
                )
            })}

            <p className='text-2xl p-3 font-semibold'>Total: ₹{t}</p>
    </div>
  )
}

export default Cart
