export const SITE_CONFIG = {
  name: 'KONGDOOMALL',
  description: '고급 브랜드몰 스타일의 쇼핑 경험을 제공하는 하이브리드 마켓플랫폼',
  contact: {
    phone: '010-7123-6612',
    email: 'kojkhj614@naver.com',
    hours: '평일 10:00 - 18:00'
  },
  company: {
    name: '콩두몰',
    representative: '권혁재',
    registrationNumber: '123-45-67890'
  },
  social: {
    instagram: '#',
    facebook: '#',
    youtube: '#'
  }
}

export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: (id: string) => `/products/${id}`,
  BRAND_ZONE: '/brand-zone',
  BRAND_DETAIL: (id: string) => `/brand-zone/${id}`,
  PARTNERS: '/partners',
  PARTNERS_GUIDE: '/partners/guide',
  PARTNERS_LINKS: '/partners/links',
  PARTNERS_EARNINGS: '/partners/earnings',
  PARTNERS_PRODUCTS: '/partners/products',
  MARKETING: '/marketing',
  SOCIAL_MARKETING: '/social-marketing',
  AGENCY: '/agency',
  CART: '/cart',
  WISHLIST: '/wishlist',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  MY_KONGDOO: '/my-kongdoo'
}

export const NAV_ITEMS = [
  {
    title: '쇼핑',
    items: [
      { name: '전체상품', path: ROUTES.PRODUCTS, description: '다양한 상품을 만나보세요' },
      { name: '신상품', path: '/new-arrivals', description: '새로 입고된 최신 상품' },
      { name: '베스트', path: '/best', description: '인기 있는 상품 모음' },
    ]
  },
  {
    title: '브랜드',
    items: [
      { name: '브랜드몰', path: ROUTES.BRAND_ZONE, description: '프리미엄 브랜드관' },
      { name: '브랜드 랭킹', path: '/brand-ranking', description: '인기 브랜드 순위' },
    ]
  },
  {
    title: '마케팅',
    items: [
      { name: '파트너스', path: ROUTES.PARTNERS, description: '파트너스 전용 서비스' },
      { name: 'SNS 마케팅', path: ROUTES.SOCIAL_MARKETING, description: '효과적인 마케팅 도구' },
    ]
  },
  {
    title: '고객지원',
    items: [
      { name: '공지사항', path: '/notice', description: '중요 소식을 확인하세요' },
      { name: '자주 묻는 질문', path: '/faq', description: '궁금한 점을 해결하세요' },
      { name: '고객센터', path: '/contact', description: '도움이 필요하시나요?' },
    ]
  }
] 