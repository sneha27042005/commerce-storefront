import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from '@dr.pogodin/react-helmet';

import HomePage from "./home";
import ProductPage from "./product";
import Layout from "./Layout";
import './style.css';

const App = () => {

  return (
      // Use BrowserRouter as the main router for your application
      <BrowserRouter>
          <HelmetProvider>
              {/* The Layout component will wrap all your routes, meaning it will always be present */}
              <Layout>
                  {/* Routes component is used to group individual Route components */}
                  <Routes>
                      {/* Define a route for the home page */}
                      <Route path="/" element={<HomePage />} />

                      {/* Define a route for the product page with a dynamic 'id' parameter
                        this `id` will be accessible from the <ProductPage /> component
                        using the `useParms` hook
                  */}
                      <Route path="/product/:id" element={<ProductPage />} />

                      {/* You can add more routes here as needed */}
                  </Routes>
              </Layout>
          </HelmetProvider>
      </BrowserRouter>
  )
}

export default App
