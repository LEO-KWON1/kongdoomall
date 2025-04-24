import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ROUTES } from './lib/constants'

// Layouts
import MainLayout from './components/layout/MainLayout'

// Pages
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import BrandZone from './pages/BrandZone'
import BrandDetail from './pages/BrandDetail'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import NotFound from './pages/NotFound'
import MyKongDoo from './pages/MyKongDoo'

// Auth Pages
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'

// Partners Pages
import Partners from './pages/partners/Partners'
import PartnersGuide from './pages/partners/PartnersGuide'
import PartnersLinks from './pages/partners/PartnersLinks'
import PartnersEarnings from './pages/partners/PartnersEarnings'
import PartnersProducts from './pages/partners/PartnersProducts'

// Marketing Pages
import Marketing from './pages/marketing/Marketing'
import SocialMarketing from './pages/marketing/SocialMarketing'
import Agency from './pages/marketing/Agency'

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* Main Routes */}
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={`${ROUTES.PRODUCTS}/:id`} element={<ProductDetail />} />
          <Route path={ROUTES.BRAND_ZONE} element={<BrandZone />} />
          <Route path={`${ROUTES.BRAND_ZONE}/:id`} element={<BrandDetail />} />
          <Route path={ROUTES.CART} element={<Cart />} />
          <Route path={ROUTES.WISHLIST} element={<Wishlist />} />
          <Route path={ROUTES.MY_KONGDOO} element={<MyKongDoo />} />

          {/* Auth Routes */}
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />

          {/* Partners Routes */}
          <Route path={ROUTES.PARTNERS} element={<Partners />} />
          <Route path={ROUTES.PARTNERS_GUIDE} element={<PartnersGuide />} />
          <Route path={ROUTES.PARTNERS_LINKS} element={<PartnersLinks />} />
          <Route path={ROUTES.PARTNERS_EARNINGS} element={<PartnersEarnings />} />
          <Route path={ROUTES.PARTNERS_PRODUCTS} element={<PartnersProducts />} />

          {/* Marketing Routes */}
          <Route path={ROUTES.MARKETING} element={<Marketing />} />
          <Route path={ROUTES.SOCIAL_MARKETING} element={<SocialMarketing />} />
          <Route path={ROUTES.AGENCY} element={<Agency />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App 