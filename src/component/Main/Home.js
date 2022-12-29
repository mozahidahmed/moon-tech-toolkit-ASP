import React, { useEffect,useState } from "react";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import ProductCard from "./ProductsCard";



const Home = () => {
 
  const {data,isLoading,isError}=useGetProductsQuery();
  console.log(data)
  const products =data?.data;
  if(isLoading){
  return <h1>products data is loading .................
  </h1>
}
if(isError){
  return <h1>something wrong .................
  </h1>
}
  
 const activeClass = "text-white  bg-indigo-500 border-white";

 



  
 

  

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${activeClass} `}
        >
          In Stock
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold`}>
          AMD
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold`}>
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
      {products?.map((product) => (
          <ProductCard key={product.model} product={product} />
        ))}
      </div>
     
    </div>
  );
};

export default Home;