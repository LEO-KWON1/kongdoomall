import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { AuthProvider } from './context/AuthContext'
import MainLayout from './components/layout/MainLayout'
import './index.css'

// Pages
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Category from './pages/Category'
import BrandZone from './pages/BrandZone'
import BrandDetail from './pages/BrandDetail'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import MyKongDoo from './pages/MyKongDoo'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import NotFound from './pages/NotFound'

// Partners
import Partners from './pages/Partners'
import PartnersGuide from './pages/PartnersGuide'
import PartnersLinks from './pages/PartnersLinks'
import PartnersEarnings from './pages/PartnersEarnings'
import PartnersProducts from './pages/PartnersProducts'

// Marketing
import Marketing from './pages/Marketing'
import SocialMarketing from './pages/SocialMarketing'

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppProvider>
          <MainLayout>
            <Routes>
              {/* 메인 페이지 */}
              <Route path="/" element={<Home />} />
              
              {/* 상품 관련 */}
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/category/:id" element={<Category />} />
              
              {/* 브랜드 관련 */}
              <Route path="/brand-zone" element={<BrandZone />} />
              <Route path="/brand/:id" element={<BrandDetail />} />
              
              {/* 사용자 관련 */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/my-kongdoo" element={<MyKongDoo />} />
              
              {/* 인증 관련 */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              
              {/* 파트너스 관련 */}
              <Route path="/partners" element={<Partners />} />
              <Route path="/partners/guide" element={<PartnersGuide />} />
              <Route path="/partners/links" element={<PartnersLinks />} />
              <Route path="/partners/earnings" element={<PartnersEarnings />} />
              <Route path="/partners/products" element={<PartnersProducts />} />
              
              {/* 마케팅 관련 */}
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/marketing/social" element={<SocialMarketing />} />
              
              {/* 404 페이지 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainLayout>
        </AppProvider>
      </Router>
    </AuthProvider>
  )
}

export default App 