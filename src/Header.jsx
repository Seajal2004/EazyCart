import React, {memo} from 'react';
import { GrShop } from "react-icons/gr";
import { Link } from 'react-router-dom';
function Header({count,src}){
    return(
        <div id="header" className="flex justify-between py-4 sm:mx-16 h-18" >
        <img className="h-12" src={src} />
        <div className='relative mr-8'>
          <Link to="/my_cart">
        <GrShop className='absolute text-4xl text-orange-400'/>
        <p className='relative left-2.5 top-2.5 text-orange-400'>{count}</p>
        </Link>
        </div>
      </div>
    )
}
export default memo(Header);