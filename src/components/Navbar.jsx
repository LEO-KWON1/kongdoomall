import { Link } from 'react-router-dom'
import { ShoppingCart, Heart, User, Menu, X, ShoppingBag, Settings, HelpCircle, LogOut, Home, Package, Users, TrendingUp, Gift, Bell, Bookmark, Star, Coffee, Search } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './common/Button'

const Navbar = () => {
  const { cart, wishlist } = useApp()
  const { user, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    {
      title: '쇼핑',
      items: [
        { name: '홈', icon: Home, link: '/', description: '최신 트렌드와 특별한 상품을 만나보세요' },
        { name: '전체상품', icon: Package, link: '/products', description: '다양한 카테고리의 상품을 둘러보세요' },
        { name: '베스트', icon: Star, link: '/best', description: '인기 있는 상품을 확인하세요' },
        { name: '신상품', icon: Gift, link: '/new', description: '새로 입고된 최신 상품' },
      ]
    },
    {
      title: '마이페이지',
      items: [
        { name: '장바구니', icon: ShoppingBag, link: '/cart', description: '담아둔 상품을 확인하세요' },
        { name: '찜한상품', icon: Heart, link: '/wishlist', description: '관심있는 상품을 모아보세요' },
        { name: '주문내역', icon: Package, link: '/orders', description: '주문하신 상품의 배송현황을 확인하세요' },
        { name: '알림', icon: Bell, link: '/notifications', description: '중요한 소식을 확인하세요' },
      ]
    },
    {
      title: '파트너스',
      items: [
        { name: '파트너스 홈', icon: Users, link: '/partners', description: '파트너스 전용 서비스를 이용해보세요' },
        { name: '수익 현황', icon: TrendingUp, link: '/partners/earnings', description: '실시간 수익을 확인하세요' },
        { name: '파트너스 상품', icon: Coffee, link: '/partners/products', description: '파트너스 전용 특별 상품' },
        { name: '마케팅 도구', icon: Bookmark, link: '/partners/marketing', description: '효과적인 마케팅 도구 제공' },
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
              <Link to="/brand" className="hover:text-gray-600 transition-colors">
                브랜드몰
              </Link>
              <Link to="/partners" className="hover:text-gray-600 transition-colors">
                파트너스
              </Link>
              <Link to="/marketing" className="hover:text-gray-600 transition-colors">
                SNS 마케팅
              </Link>
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
                    ✕
                  </button>
                </div>
              </div>

              <div className="py-4">
                <div className="px-4 py-2 bg-gray-50 text-sm font-medium text-gray-500">쇼핑</div>
                <Link
                  to="/products"
                  className="block px-4 py-2.5 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  전체상품
                </Link>
                <Link
                  to="/new-arrivals"
                  className="block px-4 py-2.5 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  신상품
                </Link>
                <Link
                  to="/best"
                  className="block px-4 py-2.5 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  베스트
                </Link>

                <div className="px-4 py-2 mt-4 bg-gray-50 text-sm font-medium text-gray-500">브랜드</div>
                <Link
                  to="/brand"
                  className="block px-4 py-2.5 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  브랜드몰
                </Link>
                <Link
                  to="/brand-ranking"
                  className="block px-4 py-2.5 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  브랜드 랭킹
                </Link>

                <div className="px-4 py-2 mt-4 bg-gray-50 text-sm font-medium text-gray-500">마케팅</div>
                <Link
                  to="/partners"
                  className="block px-4 py-2.5 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  파트너스
                </Link>
                <Link
                  to="/marketing"
                  className="block px-4 py-2.5 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SNS 마케팅
                </Link>

                <div className="px-4 py-2 mt-4 bg-gray-50 text-sm font-medium text-gray-500">고객지원</div>
                <Link
                  to="/notice"
                  className="block px-4 py-2.5 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  공지사항
                </Link>
                <Link
                  to="/faq"
                  className="block px-4 py-2.5 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  자주 묻는 질문
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2.5 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  고객센터
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar 