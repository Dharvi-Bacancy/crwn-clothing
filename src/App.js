import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ErrorPage from './pages/ErrorPage';
import { Route,Routes } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />}/>
        <Route exact path='/shop' element={<ShopPage />}/>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>  
  );
}

export default App;
