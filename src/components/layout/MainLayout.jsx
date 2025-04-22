import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, User, Heart, Search, Menu, X } from 'lucide-react'

const MainLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    {
      title: '쇼핑',
      items: [
        { name: '전체상품', link: '/products', description: '다양한 상품을 만나보세요' },
        { name: '신상품', link: '/new-arrivals', description: '새로 입고된 최신 상품' },
        { name: '베스트', link: '/best', description: '인기 있는 상품 모음' },
      ]
    },
    {
      title: '브랜드',
      items: [
        { name: '브랜드몰', link: '/brand-zone', description: '프리미엄 브랜드관' },
        { name: '브랜드 랭킹', link: '/brand-ranking', description: '인기 브랜드 순위' },
      ]
    },
    {
      title: '마케팅',
      items: [
        { name: '파트너스', link: '/partners', description: '파트너스 전용 서비스' },
        { name: 'SNS 마케팅', link: '/social-marketing', description: '효과적인 마케팅 도구' },
      ]
    },
    {
      title: '고객지원',
      items: [
        { name: '공지사항', link: '/notice', description: '중요 소식을 확인하세요' },
        { name: '자주 묻는 질문', link: '/faq', description: '궁금한 점을 해결하세요' },
        { name: '고객센터', link: '/contact', description: '도움이 필요하시나요?' },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-kong-white relative">
      {/* 헤더 */}
      <header className="fixed top-0 left-0 right-0 bg-kong-white/95 backdrop-blur-sm z-[100] border-b border-kong-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* 좌측: 햄버거 메뉴와 로고 */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 hover:bg-kong-gray-100 rounded-full transition-colors"
              >
                <Menu size={24} />
              </button>
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-kong-black">KONGDOOMALL</span>
              </Link>
            </div>

            {/* 중앙: 주요 네비게이션 */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/brand-zone" 
                className="text-kong-gray-700 hover:text-kong-gold transition-colors font-medium"
              >
                브랜드몰
              </Link>
              <Link 
                to="/partners" 
                className="text-kong-gray-700 hover:text-kong-gold transition-colors font-medium"
              >
                파트너스
              </Link>
              <Link 
                to="/social-marketing" 
                className="text-kong-gray-700 hover:text-kong-gold transition-colors font-medium"
              >
                SNS마케팅
              </Link>
            </nav>

            {/* 우측 아이콘 메뉴 */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-kong-gray-700 hover:text-kong-gold transition-colors">
                <Search size={20} />
              </button>
              <Link to="/wishlist" className="p-2 text-kong-gray-700 hover:text-kong-gold transition-colors">
                <Heart size={20} />
              </Link>
              <Link to="/cart" className="p-2 text-kong-gray-700 hover:text-kong-gold transition-colors">
                <ShoppingBag size={20} />
              </Link>
              <Link to="/login" className="p-2 text-kong-gray-700 hover:text-kong-gold transition-colors">
                <User size={20} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 사이드 메뉴 */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110]"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-[330px] bg-white z-[120] overflow-y-auto"
            >
              <div className="p-4 border-b bg-gradient-to-r from-kong-gold/10 to-transparent">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">전체 메뉴</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-kong-gray-100 rounded-full"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              <div className="py-4">
                {menuItems.map((section, index) => (
                  <div key={section.title} className={index > 0 ? 'mt-6' : ''}>
                    <div className="px-4 py-2 bg-kong-gray-50 text-sm font-medium text-kong-gray-500">
                      {section.title}
                    </div>
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className="block px-4 py-3 hover:bg-kong-gray-50 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="font-medium text-kong-gray-900">{item.name}</div>
                        <div className="text-sm text-kong-gray-500 mt-0.5">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 메인 컨텐츠 */}
      <main className="pt-16 relative z-10">
        {children}
      </main>

      {/* 푸터 */}
      <footer className="bg-kong-black text-kong-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">KONGDOOMALL</h3>
              <p className="text-kong-gray-400">
                고급 브랜드몰 스타일의 쇼핑 경험을 제공하는 하이브리드 마켓플랫폼
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">고객센터</h4>
              <ul className="space-y-2 text-sm text-kong-gray-400">
                <li>전화: 010-7123-6612</li>
                <li>이메일: kojkhj614@naver.com</li>
                <li>운영시간: 평일 10:00 - 18:00</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">회사정보</h4>
              <ul className="space-y-2 text-sm text-kong-gray-400">
                <li>회사명: 콩두몰</li>
                <li>대표: 총민혁</li>
                <li>사업자등록번호: 123-45-67890</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">소셜 미디어</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-kong-gray-400 hover:text-kong-gold transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-kong-gray-400 hover:text-kong-gold transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-kong-gray-400 hover:text-kong-gold transition-colors">
                  YouTube
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-kong-gray-800 text-sm text-kong-gray-400">
            © 2024 KONGDOOMALL. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout 