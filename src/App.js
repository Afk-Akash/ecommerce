import './App.css';
import Navbar from './Component/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Component/Footer/Footer';
import banner from './Component/Assets/banner.jpg'
import AboutUs from './Component/Footer/AboutUs';
import ContactUs from './Component/Footer/ContactUs';
import Offices from './Component/Footer/Offices';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner={banner} category="mens"/>}/>
          <Route path='/womens' element={<ShopCategory banner={banner} category="womens"/>}/>
          <Route path='/kids' element={<ShopCategory banner={banner} category="kids"/>}/>
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>

          <Route path='/cart' element ={<Cart />} />
          <Route path='/signin' element={<LoginSignup />} />

          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/offices' element={<Offices />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

