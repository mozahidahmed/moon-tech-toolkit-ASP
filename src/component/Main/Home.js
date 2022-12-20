import React, { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { getProducts } from "../../features/product/productSlice";
import ProductsCard from "./ProductsCard";


const Home = () => {
  const {products}=useSelector((state)=> state.products)
  console.log(products)
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch("http://localhost:5000/products")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data.data));
    dispatch(getProducts());

  }, []);
  const activeClass = "text-white  bg-indigo-500 border-white";
   let content;

  
  if (products.length) {
    content = products.map((product) => (
      <ProductsCard key={product._id} product={product} />
    ));
  }

  

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
     {content}
      </div>
    </div>
  );
};

export default Home;