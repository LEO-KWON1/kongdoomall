import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
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
      image: '/images/hero-1.jpg',
      title: '프리미엄 브랜드를 만나다',
      description: '최고의 품질과 스타일을 제공하는 콩두몰',
    },
    {
      id: 2,
      image: '/images/hero-2.jpg',
      title: '새로운 컬렉션 출시',
      description: '2024 봄/여름 신상품을 만나보세요',
    },
    {
      id: 3,
      title: '특별한 혜택',
      description: '신규 회원을 위한 다양한 할인 혜택',
      customBackground: true,
    },
  ];

  return (
    <>
      {/* 히어로 섹션 */}
      <section className="relative h-screen w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="h-full w-full"
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
        >
          {heroImages.map((slide) => (
            <SwiperSlide key={slide.id} className="relative w-full h-full">
              <div
                className={`absolute inset-0 w-full h-full ${!slide.customBackground ? 'bg-cover bg-center' : ''}`}
                style={!slide.customBackground ? { backgroundImage: `url(${slide.image})` } : {}}
              >
                {slide.customBackground ? (
                  // 특별한 혜택 슬라이드의 커스텀 배경
                  <div className="absolute inset-0">
                    {/* 기본 그라데이션 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-kong-gold/20 via-kong-black to-kong-black" />
                    
                    {/* 패턴 오버레이 */}
                    <div className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                      }}
                    />
                    
                    {/* 하이라이트 효과 */}
                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-kong-gold/10 blur-[100px] rounded-full" />
                      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-kong-gold/5 blur-[100px] rounded-full" />
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-black/30" />
                )}
                <div className="relative h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="text-white"
                    >
                      <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl mb-8">
                        {slide.description}
                      </p>
                      <Button size="lg" variant="primary">
                        쇼핑하기
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">추천 상품</h2>
          <Link
            to="/products"
            className="text-primary hover:text-primary-dark"
          >
            전체보기
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all overflow-hidden"
            >
              <Link to={`/products/${product.id}`}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500">{product.brand}</p>
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
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
      <section className="py-16 px-4 max-w-7xl mx-auto">
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
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Link to={`/category/${category.name}`}>
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex items-center">
                      <span className={`${category.color} p-3 rounded-2xl`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                        {category.name}
                      </h3>
                      <p className="text-white/80 text-sm group-hover:translate-x-2 transition-transform duration-300 delay-75">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home; 