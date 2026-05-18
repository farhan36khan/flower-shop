import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Cart from "./components/Cart";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [detailProduct, setDetailProduct] = useState(null);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.history.pushState({ page }, "", `#${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.history.replaceState({ page: "home" }, "", "#home");

    const handleBackButton = () => {
      const page = window.history.state?.page || "home";
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  const pages = {
    home: (
      <Home
        setCurrentPage={navigateTo}
        setDetailProduct={setDetailProduct}
      />
    ),
    products: (
      <Products
        setCurrentPage={navigateTo}
        setDetailProduct={setDetailProduct}
      />
    ),
    detail: detailProduct ? (
      <ProductDetail
        product={detailProduct}
        setCurrentPage={navigateTo}
      />
    ) : (
      <Home
        setCurrentPage={navigateTo}
        setDetailProduct={setDetailProduct}
      />
    ),
    contact: <Contact />,
    dashboard: <Dashboard />,
    cart: <Cart setCurrentPage={navigateTo} />,
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf8f3] font-sans">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={navigateTo}
      />

      <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6">
        {pages[currentPage] || pages.home}
      </main>

      <Footer />
    </div>
  );
};

export default App;