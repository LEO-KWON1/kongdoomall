import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, User, Heart, Search, Menu, X, ChevronRight } from 'lucide-react'
import Button from '../common/Button'
import { ROUTES } from '../../lib/constants'

const MainLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const menuItems = [
    {
      title: '쇼핑',
      items: [
        { name: '전체상품', link: ROUTES.PRODUCTS, description: '다양한 상품을 만나보세요' },
        { name: '신상품', link: ROUTES.PRODUCTS + '?category=new', description: '새로 입고된 최신 상품' },
        { name: '베스트', link: ROUTES.PRODUCTS + '?category=best', description: '인기 있는 상품 모음' },
      ]
    },
    {
      title: '브랜드',
      items: [
        { name: '브랜드몰', link: ROUTES.BRAND_ZONE, description: '프리미엄 브랜드관' },
        { name: '브랜드 랭킹', link: ROUTES.BRAND_ZONE + '/ranking', description: '인기 브랜드 순위' },
      ]
    },
    {
      title: '마케팅',
      items: [
        { name: '파트너스', link: ROUTES.PARTNERS, description: '파트너스 전용 서비스' },
        { name: 'SNS 마케팅', link: ROUTES.SOCIAL_MARKETING, description: '효과적인 마케팅 도구' },
      ]
    },
    {
      title: '고객지원',
      items: [
        { name: '공지사항', link: ROUTES.NOTICE, description: '중요 소식을 확인하세요' },
        { name: '자주 묻는 질문', link: ROUTES.FAQ, description: '궁금한 점을 해결하세요' },
        { name: '고객센터', link: ROUTES.CONTACT, description: '도움이 필요하시나요?' },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white relative">
      {/* 헤더 */}
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* 좌측: 햄버거 메뉴와 로고 */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                rounded
                onClick={() => setIsMenuOpen(true)}
                aria-label="메뉴 열기"
              >
                <Menu className="w-6 h-6" />
              </Button>
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold">KONGDOOMALL</span>
              </Link>
            </div>

            {/* 중앙: 주요 네비게이션 */}
            <nav className="hidden md:flex items-center space-x-4">
              <Link
                to={ROUTES.BRAND_ZONE}
                className="px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base inline-flex items-center justify-center font-medium transition-all hover:bg-gray-100 rounded-lg group"
              >
                <span className="relative">
                  브랜드몰
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
              </Link>
              <Link
                to={ROUTES.PARTNERS}
                className="px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base inline-flex items-center justify-center font-medium transition-all hover:bg-gray-100 rounded-lg group"
              >
                <span className="relative">
                  파트너스
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
              </Link>
              <Link
                to={ROUTES.SOCIAL_MARKETING}
                className="px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base inline-flex items-center justify-center font-medium transition-all hover:bg-gray-100 rounded-lg group"
              >
                <span className="relative">
                  SNS마케팅
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
              </Link>
            </nav>

            {/* 우측 아이콘 메뉴 */}
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                rounded
                aria-label="검색"
              >
                <Search className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                rounded
                as={Link}
                to={ROUTES.WISHLIST}
                aria-label="위시리스트"
              >
                <Heart className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                rounded
                as={Link}
                to={ROUTES.CART}
                aria-label="장바구니"
              >
                <ShoppingBag className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                rounded
                as={Link}
                to={ROUTES.LOGIN}
                aria-label="로그인"
              >
                <User className="w-5 h-5" />
              </Button>
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
              <div className="sticky top-0 z-10 bg-white">
                <div className="p-4 border-b bg-gradient-to-r from-primary/5 to-transparent">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">전체 메뉴</h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      rounded
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="메뉴 닫기"
                    >
                      <X className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="py-4">
                {menuItems.map((section, index) => (
                  <div key={section.title} className={index > 0 ? 'mt-6' : ''}>
                    <div className="px-4 py-2 bg-gray-50 text-sm font-medium text-gray-500">
                      {section.title}
                    </div>
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className="flex items-center justify-between px-4 py-4 w-full hover:bg-gray-50 group transition-colors"
                      >
                        <div className="text-left">
                          <div className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-500 mt-0.5">
                            {item.description}
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
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
      <main className="pt-16">
        {children}
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">KONGDOOMALL</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                고급 브랜드몰 스타일의 쇼핑 경험을 제공하는 하이브리드 마켓플랫폼
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">고객센터</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>전화: 010-7123-6612</li>
                <li>이메일: kojkhj614@naver.com</li>
                <li>운영시간: 평일 10:00 - 18:00</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">회사정보</h4>
              <div className="flex flex-col gap-2">
                <Link to={ROUTES.ABOUT} className="hover:underline">
                  회사소개
                </Link>
                <Link to={ROUTES.TERMS} className="hover:underline">
                  이용약관
                </Link>
                <Link to={ROUTES.PRIVACY} className="hover:underline">
                  개인정보처리방침
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">소셜 미디어</h4>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  as="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-gray-400 hover:!text-primary"
                >
                  Instagram
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  as="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-gray-400 hover:!text-primary"
                >
                  Facebook
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  as="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-gray-400 hover:!text-primary"
                >
                  YouTube
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400">
            <p>&copy; 2024 KONGDOOMALL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout 