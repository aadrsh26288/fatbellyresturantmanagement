import React from 'react'
import { FaCartPlus,FaDollarSign } from "react-icons/fa";
import{Link} from "react-router-dom"

const Header = ({countCartItems}) => {
  return (
    <div className="bg-red-600 p-6 flex w-full justify-between">
        <p className="text-2xl font-semibold text-white">Fat Belly</p>
        <div className="flex gap-3"> 
     <Link to="/cart" className='flex gap-1'> <FaCartPlus size={30}/><span className="text-white">{countCartItems}</span></Link>    
          <FaDollarSign size={30}/>

        </div>
    </div>
  )
}

export default Header