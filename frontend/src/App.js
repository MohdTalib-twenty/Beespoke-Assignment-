
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Screens/Home';
import LogIn from './Screens/LogIn';

import { CartProvider } from './Components/ContextReducer';
import Cart from './Screens/Cart';
import Shipping from './Screens/Shipping';
import Footer from './Components/Footer';
import Register from './Screens/Register';
function App() {
  return (
   <CartProvider>
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/signup' element={<Register/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/shipping' element={<Shipping/>}/> 
      </Routes>
      <Footer/>
   </BrowserRouter>
   </CartProvider>
  );
}

export default App;
