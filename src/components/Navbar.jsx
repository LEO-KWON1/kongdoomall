import { Link } from 'react-router-dom'
import { ShoppingCart, Heart, User, Menu, X, ShoppingBag, Search } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ROUTES } from '../lib/constants'

const Navbar = () => {
  const { cart, wishlist } = useApp()
  const { user, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: '홈', href: ROUTES.HOME },
    { name: '상품', href: ROUTES.PRODUCTS },
    { name: '브랜드존', href: ROUTES.BRAND_ZONE },
    { name: '파트너스', href: ROUTES.PARTNERS },
    { name: '마케팅', href: ROUTES.MARKETING },
  ]

  const menuItems = [
    {
      title: '쇼핑',
      items: [
        { name: '홈', href: ROUTES.HOME },
        { name: '전체상품', href: ROUTES.PRODUCTS },
        { name: '베스트', href: ROUTES.PRODUCTS + '?category=best' },
        { name: '신상품', href: ROUTES.PRODUCTS + '?category=new' },
      ]
    },
    {
      title: '마이페이지',
      items: [
        { name: '장바구니', href: ROUTES.CART },
        { name: '찜한상품', href: ROUTES.WISHLIST },
        { name: '마이콩두', href: ROUTES.MY_KONGDOO },
      ]
    },
    {
      title: '파트너스',
      items: [
        { name: '파트너스 홈', href: ROUTES.PARTNERS },
        { name: '수익 현황', href: ROUTES.PARTNERS_EARNINGS },
        { name: '파트너스 상품', href: ROUTES.PARTNERS_PRODUCTS },
        { name: '마케팅 도구', href: ROUTES.SOCIAL_MARKETING },
      ]
    }
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            {/* 좌측: 로고와 메뉴 버튼 */}
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Menu className="h-6 w-6 text-black" />
              </button>
              <Link to="/" className="text-xl font-bold">
                KONGDOOMALL
              </Link>
            </div>

            {/* 중앙: 네비게이션 링크 */}
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="hover:text-gray-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* 우측: 아이콘들 */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <Link to="/wishlist" className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                <Heart className="h-5 w-5" />
              </Link>
              <Link to="/cart" className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                <ShoppingBag className="h-5 w-5" />
              </Link>
              <Link to="/profile" className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                <User className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 사이드 메뉴 */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-[300px] bg-white z-50 overflow-y-auto"
            >
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">전체 메뉴</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="py-4">
                {menuItems.map((section) => (
                  <div key={section.title}>
                    <div className="px-4 py-2 bg-gray-50 text-sm font-medium text-gray-500">
                      {section.title}
                    </div>
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2.5 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar 