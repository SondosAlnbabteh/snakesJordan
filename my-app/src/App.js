import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import MainDashboard from './pages/dashboard/MainDashboard.js';
import Home from './pages/home.js';
import Header from './component/header.js';
import Footer from './component/footer.js';
import "./index.js";
import Store from './pages/store.js';
import Posts from './pages/Posts.js';
import HelpCenter from './pages/HelpCenter.js';
import PostsAdmin from './pages/postsAdmin.js';
import ProductDetail from './pages/ProductDetail.js';
import AboutUs from './pages/AboutUs.js';
import Login from './pages/Login.js';
import SignUp from './pages/signUp.js';
import Payment from './pages/Payment.js';

function App() {

  
  return (
   
   
    <BrowserRouter>
    <div className='App'>
    <Header/> 
      <div>
        <Routes>
        
              <Route path='/MainDashboard' element={<MainDashboard/>}/>
              <Route path='/' element={<Home />}/>
              <Route path='/store' element={<Store />}/>
              <Route path='/Posts' element={<Posts />}/>
              <Route path='/HelpCenter' element={<HelpCenter/>}/>
              <Route path='/PostsAdmin' element={<PostsAdmin/>}/>
              <Route path='/ProductDetail' element={<ProductDetail/>}/>
              <Route path='/AboutUs' element={<AboutUs/>}/>
              <Route path='/Login' element={<Login/>}/>
              <Route path='/SignUp' element={<SignUp/>}/>
              <Route path='/Payment' element={<Payment/>}/>

              


              
            
        </Routes> 
      </div>
      <Footer/>
     
    </div> 
      </BrowserRouter>
  
  );
}

export default App;
