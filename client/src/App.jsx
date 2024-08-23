import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
