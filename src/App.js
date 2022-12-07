import './App.css';
import { NavBar, Footer } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, ProductPage, ProductsListPage, CartPage, ErrorPage } from './pages'

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        {/* <Route exact path='/about' element={<AboutPage/>}/> */}
        <Route exact path='/product' element={<ProductsListPage/>}/>
        <Route exact path='/products/:id' element={<ProductPage/>}/>
        <Route exact path='/cart' element={<CartPage/>}/>
        {/* <Route exact path='/checkout' element={<PrivateRoute><CheckOutPage/></PrivateRoute>}/> */}
        <Route exact path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
