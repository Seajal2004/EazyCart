import React from 'react';
import { GrShop } from "react-icons/gr";
import { Link } from 'react-router-dom';
function Header({count}){
    return(
        <div id="header" className="flex justify-between py-4 sm:mx-16 h-18" >
        <img className="h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwB9TDRnk6BYIAwNqhL3PstVV8kPkx0hLmqA&s"/>
        <div className='relative mr-8'>
          <Link to="/my_cart">
        <GrShop className='absolute text-4xl text-orange-400'/>
        <p className='relative left-2.5 top-2.5 text-orange-400'>{count}</p>
        </Link>
        </div>
      </div>
    )
}
export default Header;<q></q>