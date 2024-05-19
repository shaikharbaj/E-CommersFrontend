import { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Loginpage } from './Routes.js'
import { RegisterPage } from './Routes.js'
import Popup from './components/Popup.jsx';
import Home from './feature/Home/Home.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserAsync } from './feature/Auth/authSlice.js';
import ProtectedRoute from './utils/ProtectedRoute.jsx';
import ProductPage from './pages/ProductPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import Profilepage from './pages/Profilepage.jsx';
import BestSellingPage from './pages/BestSellingPage.jsx';
import FAQPage from './pages/faqPage.jsx';
import ShopCreatePage from './pages/ShopCreatePage.jsx';
import ShopLoginPage from './pages/ShopLoginPage.jsx';
import ShopHomePage from './pages/ShopHomePage.jsx';
import { loadSeller } from './feature/Shop/ShopAuth/shopSlice.jsx';
import SellerProtectedRoute from './utils/SellerProtectedRoute.jsx';
import ShopDashboardPage from './pages/ShopDashboardPage.jsx';
import ShopAllProductPage from './pages/ShopAllProductPage.jsx';
import ShopCreateProductPage from './pages/ShopCreateProductPage.jsx';
import { loadAllProducts } from './feature/Product/ProductSlice.jsx';
function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(loadUserAsync());
    dispatch(loadSeller());
    dispatch(loadAllProducts());
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/best-selling' element={<BestSellingPage />} />
        <Route path='/faq' element={<FAQPage />} />
        <Route path='/product/:id' element={<ProductDetailPage />} />
        <Route path='/profile' element={
          <ProtectedRoute>
            <Profilepage />
          </ProtectedRoute>
        } />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/register' element={<RegisterPage />} />


        {/*    shop routes     */}
        <Route path='/shop-create' element={<ShopCreatePage />} />
        <Route path='/shop-login' element={<ShopLoginPage />} />
        <Route path='/dashboard' element={<SellerProtectedRoute>
          <ShopDashboardPage />
        </SellerProtectedRoute>} />
        <Route path='/shop/:id' element={
          <SellerProtectedRoute>
            <ShopHomePage />
          </SellerProtectedRoute>
        } />
        <Route path='/dashboard-products' element={<SellerProtectedRoute>
          <ShopAllProductPage />
        </SellerProtectedRoute>}></Route>
        <Route path='/dashboard-create-product' element={<SellerProtectedRoute>
          <ShopCreateProductPage />
        </SellerProtectedRoute>}></Route>
        {/* <Route path='/dashboard-events'></Route>
        <Route path='/dashboard-create-event'></Route>
        <Route path='/dashboard-coupouns'></Route>
        <Route path='/settings'></Route> */}
      </Routes>
      <Popup />
    </>
  )
}

export default App
