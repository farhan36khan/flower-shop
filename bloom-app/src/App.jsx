import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [detailProduct, setDetailProduct] = useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            setCurrentPage={setCurrentPage}
            setDetailProduct={setDetailProduct}
          />
        );

      case 'products':
        return (
          <Products
            setCurrentPage={setCurrentPage}
            setDetailProduct={setDetailProduct}
          />
        );

      case 'detail':
        return (
          <ProductDetail
            product={detailProduct}
            setCurrentPage={setCurrentPage}
          />
        );

      case 'contact':
        return <Contact />;

      case 'dashboard':
        return <Dashboard />;

      default:
        return (
          <Home
            setCurrentPage={setCurrentPage}
            setDetailProduct={setDetailProduct}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf8f3] font-sans">

      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="flex-1">{renderPage()}</main>

      <Footer />
    </div>
  );
};

export default App;