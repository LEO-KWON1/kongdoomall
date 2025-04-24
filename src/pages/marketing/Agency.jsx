import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const Agency = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    productType: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 폼 제출 처리
    console.log(formData)
  }

  const portfolioItems = [
    {
      id: 1,
      title: '브랜드 A 마케팅 캠페인',
      image: '/images/portfolio1.jpg',
      description: '인스타그램 리그램 캠페인으로 200% 매출 증가',
    },
    {
      id: 2,
      title: '브랜드 B 콘텐츠 제작',
      image: '/images/portfolio2.jpg',
      description: 'TikTok 쇼츠 제작으로 50만 뷰 달성',
    },
    {
      id: 3,
      title: '브랜드 C SNS 운영',
      image: '/images/portfolio3.jpg',
      description: '6개월간 팔로워 300% 증가',
    },
  ]

  return (
    <div className="container-custom py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">콩두 에이전시</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          SNS 마케팅 전문가들이 함께하는 성공적인 브랜드 마케팅 솔루션
        </p>
      </section>

      {/* Services */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">서비스</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">콘텐츠 제작</h3>
            <p className="text-gray-600">
              전문적인 촬영과 편집으로 브랜드의 아이덴티티를 살린
              고퀄리티 콘텐츠를 제작합니다.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">SNS 운영</h3>
            <p className="text-gray-600">
              브랜드의 목표에 맞는 맞춤형 SNS 운영 전략을 수립하고
              지속적인 관리로 성과를 창출합니다.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">인플루언서 마케팅</h3>
            <p className="text-gray-600">
              브랜드와 어울리는 인플루언서를 발굴하고 협업하여
              효과적인 마케팅을 진행합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">포트폴리오</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
        >
          {portfolioItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="border rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Contact Form */}
      <section>
        <h2 className="text-2xl font-bold mb-8">문의하기</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 mb-2">이름</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">이메일</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">연락처</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">예산</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">선택해주세요</option>
                <option value="100-300">100-300만원</option>
                <option value="300-500">300-500만원</option>
                <option value="500-1000">500-1000만원</option>
                <option value="1000+">1000만원 이상</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">상품 종류</label>
            <input
              type="text"
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="예: 뷰티, 푸드, 리빙 등"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">문의 내용</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32"
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            문의하기
          </button>
        </form>
      </section>
    </div>
  )
}

export default Agency 