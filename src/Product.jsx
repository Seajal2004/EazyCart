import React, {memo} from 'react';
import {Link} from "react-router-dom";
import Sale from "./images/sale.png"
function Product(data){
  return(
    <div className="pb-3 flex flex-col justify-between gap-3 border relative">
      {data.percentage>0 && <img className="absolute top-0 right-0 max-w-12" src={Sale} />}
      <img className="max-w-60 max-h-60" src={data.image} alt={"product "+ data.id}/>
      <div className='flex flex-col gap-3'>
      <h2 className="text-gray-400">{data.category}</h2>
      <h1 className="text-xl">{data.name}</h1>
      <h2 className="text-gray-800">Rating: {data.rate}/5</h2>
      <h2 className="text-gray-800">Price: ${data.price}</h2>
      <Link className="border rounded-md self-start px-3 bg-orange-500 text-white" to={"/product/"+ data.id}>Veiw</Link>
      </div>
    </div>
  );
}

export default memo(Product);