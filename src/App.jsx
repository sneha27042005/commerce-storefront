import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from '@dr.pogodin/react-helmet';

import HomePage from "./home";
import ProductPage from "./product";
import Layout from "./Layout";
import './style.css';
import ProductContextProvider from "./CartContext.jsx";
import MyCart from "./cart";
import SignIn from "./SignIn";
import SelectAddress from "./SelectAddress";
import SearchResults from "./SearchResults"; // ✅ this must be correct

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <ProductContextProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<MyCart />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/signin" element={<SignIn />} /> {/* ✅ Added properly */}
              <Route path="/select-address" element={<SelectAddress />} />
               <Route path="/search" element={<SearchResults />} />
            </Routes>
          </Layout>
        </ProductContextProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
