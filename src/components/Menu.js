import React,{useState} from 'react'
import banner from './assets/logo.png'
const Menu = ({data,onAdd}) => {
  const [menu,setmenu] =useState(data)

  function Filteritem(type){
    const NewMenu = data.filter((category)=>{
    return category.category===type
    })

setmenu(NewMenu)
  }
  return (
    <div className="pb-5">
      <div className='w-full flex items-center justify-center'>
       <img src={banner} alt="banner" style={{width: '300px',height: '300px'}} className="mt-5"/>
      </div>

      <div className="justify-center gap-3 w-full flex mt-7">
        <button className="p-2 px-4 bg-red-500 text-white rounded-lg hover:bg-white duration-300 hover:text-black hover:border-2" onClick={()=>{Filteritem('Burger')}}>Burgers</button>
        <button className="p-2 px-4 bg-red-500 text-white rounded-lg hover:bg-white duration-300 hover:text-black hover:border-2" onClick={()=>{Filteritem('Grilled')}}>Grilled</button>
        <button className="p-2 px-4 bg-red-500 text-white rounded-lg hover:bg-white duration-300 hover:text-black hover:border-2" onClick={()=>{Filteritem('Salad')}}>Salad</button>
        <button className="p-2 px-4 bg-red-500 text-white rounded-lg hover:bg-white duration-300 hover:text-black hover:border-2" onClick={()=>{Filteritem('Sides')}}>Sides</button>
        <button className="p-2 px-4 bg-red-500 text-white rounded-lg hover:bg-white duration-300 hover:text-black hover:border-2" onClick={()=>{Filteritem('Soba')}}>Soba</button>
        <button className="p-2 px-4 bg-red-500 text-white rounded-lg hover:bg-white duration-300 hover:text-black hover:border-2" onClick={()=>{Filteritem('Drinks')}}>Drinks</button>
      </div>

      <div className="grid grid-cols-3 justify-items-center p-3  w-full gap-4 mt-5 ">
        {
          menu.map((product)=>{
            const {id,name,price,image,category} = product;
            return (
              <div key={id} className=" border-2 shadow-lg rounded-lg flex flex-col justify-center p-2 items-center " style={{width: '300px'}}>
                
              <p className='text-lg font-semibold'>{name}</p>
              <p>{category}</p>
              <div>
                <img src={image} alt={image} style={{width:'200px', height:'200px'}}/>
              </div>
              <p className='text-lg font-semibold'>₹{price}</p>
            <button className="p-2 px-4 bg-red-500 text-white rounded-lg" onClick={() => onAdd(product)}>Add to cart</button>
              

              </div>
            )

          })
        }

      </div>

<button onClick={()=>{setmenu(data)}} className="bg-red-500 text-white rounded-lg p-2 px-6 ml-3 text-center ">Back</button>
    </div>
  )
}

export default Menu