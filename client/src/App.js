import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Signup from './components/login/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './components/login/Signin';
import Profile from './components/login/Profile';
import HomePage from './components/pages/HomePage';
import Navbar from './components/nav/Navbar';
import ProductDetails from './components/products/ProductDetails';
import NewProduct from './components/products/NewProduct';
import About from './components/pages/About';
import EditProduct from './components/products/EditProduct';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/newProduct' element={<NewProduct />} />
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      {/* <Route path='/editProduct' element={<EditProduct />} /> */}
    </Routes>

    </BrowserRouter> 
    </div>
  );
}

export default App;
