//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main className='my-3'>
          <Container>
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/product/:id' element={<ProductDetails/>}/>
              <Route path='/cart/:id?' element={<CartPage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/register' element={<RegisterPage/>}/>
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

