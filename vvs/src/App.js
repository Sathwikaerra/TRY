
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/navbar/footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/navbar/Home';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import SingleMovie from './components/singlemovie/SingleMovie';
import BookingSeat from './components/bookingseat/BookingSeat';
import Payments from './components/payments/payments';
import Main from './components/HomePage/Main';
import UpCommingMovies from './components/upcommng/UpCommingMovies';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/upcommingmovies' element={<UpCommingMovies/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home/:user' element={<Home/>}/>
      <Route path='/home/:user/:id' element={<SingleMovie/>}/>
       <Route path='/book/:user/:id' element={<BookingSeat/>}/>
       <Route path='/payment/:user/:id' element={<Payments/>}/>
 
      
    </Routes>
    <Footer/>
    
    </BrowserRouter>

     
   
    
    </>
  
  );
}

export default App;
