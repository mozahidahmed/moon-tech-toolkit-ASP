
import './App.css';
import { Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import store from './app/store';
import Home from './component/Main/Home';
import Cart from './component/Main/Cart';
import Navbar from './component/shared/Navbar';
import Dashboard from './component/Layout/Dashboard/Dashboard';
import AddProduct from './component/shared/Pages/AddProduct';
import ProductList from './component/shared/Pages/ProductList';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="px-6 ">
      <Toaster/>
  <Provider store={store}>
    <Navbar/>
 <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/cart" element={<Cart/>}></Route>



  <Route path='dashboard' element={<Dashboard></Dashboard>}>

<Route index element={<ProductList/>}></Route>
<Route path="add-product" element={<AddProduct/>}></Route> 




</Route>


  </Routes>
  </Provider>

    </div>
 
     
   
       
  
  );
}

export default App;
