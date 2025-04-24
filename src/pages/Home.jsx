import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Shirt, Footprints, ShoppingBag, Gem } from 'lucide-react';
import Button from '../components/common/Button';

const Home = () => {
  const products = [
    {
      id: 1,
      name: '프리미엄 스웨터',
      brand: 'Brand A',
      price: 129000,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 2,
      name: '디자인 원피스',
      brand: 'Brand B',
      price: 189000,
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 3,
      name: '클래식 코트',
      brand: 'Brand C',
      price: 299000,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 4,
      name: '캐시미어 니트',
      brand: 'Brand D',
      price: 159000,
      image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const heroImages = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070',
      title: '프리미엄 브랜드를 만나다',
      description: '최고의 품질과 스타일을 제공하는 콩두몰',
      bgColor: 'bg-gray-100',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070',
      title: '새로운 컬렉션 출시',
      description: '2024 봄/여름 신상품을 만나보세요',
      bgColor: 'bg-gray-200',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070',
      title: '특별한 혜택',
      description: '신규 회원을 위한 다양한 할인 혜택',
      bgColor: 'bg-gray-300',
    },
  ];

  return (
    <>
      {/* 히어로 섹션 */}
      <section className="relative h-screen w-full">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ 
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop={true}
          className="h-full group"
        >
          {heroImages.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={`relative h-full w-full ${slide.bgColor}`}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                <div className="relative h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="text-white max-w-2xl"
                    >
                      <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-white/90">
                        {slide.description}
                      </p>
                      <Button 
                        size="lg" 
                        variant="primary"
                        className="hover:scale-105 transition-transform duration-300"
                      >
                        쇼핑하기
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev !text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="swiper-button-next !text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Swiper>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">추천 상품</h2>
            <p className="text-gray-600">콩두몰이 엄선한 프리미엄 상품</p>
          </div>
          <Link
            to="/products"
            className="text-primary hover:text-primary-dark transition-colors duration-300 font-medium flex items-center gap-2"
          >
            전체보기
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <Link to={`/products/${product.id}`} className="block">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                  <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-lg font-semibold text-primary mt-2">
                    {product.price.toLocaleString()}원
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">카테고리</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              다양한 카테고리의 상품들을 만나보세요
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                name: '의류',
                icon: Shirt,
                color: 'bg-[#FF6B6B]',
                description: '트렌디한 의류',
                image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070'
              },
              { 
                name: '신발',
                icon: Footprints,
                color: 'bg-[#4ECDC4]',
                description: '스타일리시한 신발',
                image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012'
              },
              { 
                name: '가방',
                icon: ShoppingBag,
                color: 'bg-[#45B7D1]',
                description: '품격있는 가방',
                image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935'
              },
              { 
                name: '악세서리',
                icon: Gem,
                color: 'bg-[#96CEB4]',
                description: '특별한 악세서리',
                image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1887'
              },
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <Link to={`/category/${category.name}`} className="block">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300" />
                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="flex items-center">
                        <span className={`${category.color} p-3 rounded-2xl backdrop-blur-sm bg-opacity-80`}>
                          <category.icon className="w-6 h-6 text-white" />
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                          {category.name}
                        </h3>
                        <p className="text-white/90 text-sm group-hover:translate-x-2 transition-transform duration-300 delay-75">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home; 