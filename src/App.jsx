import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import MyKongDoo from './pages/MyKongDoo'
import Agency from './pages/Agency'
import BrandZone from './pages/BrandZone'
import BrandDetail from './pages/BrandDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import SocialMarketing from './pages/SocialMarketing'
import Partners from './pages/Partners'
import PartnersProducts from './pages/PartnersProducts'
import PartnersEarnings from './pages/PartnersEarnings'
import PartnersLinks from './pages/PartnersLinks'
import PartnersGuide from './pages/PartnersGuide'
import Category from './pages/Category'
import './index.css'
import MainLayout from './components/layout/MainLayout'

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/my-kongdoo" element={<MyKongDoo />} />
              <Route path="/agency" element={<Agency />} />
              <Route path="/brand-zone" element={<BrandZone />} />
              <Route path="/brand/:id" element={<BrandDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/social-marketing" element={<SocialMarketing />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/partners/products" element={<PartnersProducts />} />
              <Route path="/partners/earnings" element={<PartnersEarnings />} />
              <Route path="/partners/links" element={<PartnersLinks />} />
              <Route path="/partners/guide" element={<PartnersGuide />} />
              <Route path="/category/:category" element={<Category />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainLayout>
        </AppProvider>
      </Router>
    </AuthProvider>
  )
}

export default App 