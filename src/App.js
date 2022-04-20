import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ErrorPage from './pages/ErrorPage';
import { Route,Routes } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

const TopicDetail = () => (
  <div>
    <h1>
    TopicDetail PAGE
    </h1>
  </div>
);
function App() {
  return (
    
    
        <div>
        <Routes>
          <Route exact path='/' element={<HomePage />}/>
          <Route exact path='/shop' element={<ShopPage />}/>
          <Route path='/topics/:topicId' element={<TopicDetail />}/>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        </div>
      
    
  );
}

export default App;
