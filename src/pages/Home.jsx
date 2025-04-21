import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import ProductCard from '../components/ProductCard'

const Home = () => {
  // 배너 데이터
  const heroBanners = [
    { 
      id: 1, 
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=400&q=80', 
      title: '봄맞이 뷰티 특가전' 
    },
    { 
      id: 2, 
      image: 'https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=400&q=80', 
      title: '건강한 식탁 기획전' 
    },
    { 
      id: 3, 
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=400&q=80', 
      title: '인테리어 신상품전' 
    },
  ]

  const popularProducts = [
    { 
      id: 1, 
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80', 
      name: '달바 화이트 트러플 세럼', 
      price: 45000, 
      brand: '달바' 
    },
    { 
      id: 2, 
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80', 
      name: '제주 녹차 말차 라떼', 
      price: 28000, 
      brand: '오설록' 
    },
    { 
      id: 3, 
      image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80', 
      name: '모던 원목 테이블 조명', 
      price: 89000, 
      brand: '오픈클로젯' 
    },
    { 
      id: 4, 
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80', 
      name: '비건 콜라겐 앰플', 
      price: 35000, 
      brand: '아떼' 
    },
  ]

  const categories = [
    { 
      id: 1, 
      name: '뷰티', 
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80' 
    },
    { 
      id: 2, 
      name: '푸드', 
      image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80' 
    },
    { 
      id: 3, 
      name: '리빙', 
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80' 
    },
  ]

  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <section className="relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="h-[400px] md:h-[500px]"
        >
          {heroBanners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative h-full">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h2 className="text-white text-3xl md:text-5xl font-bold">{banner.title}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Popular Products */}
      <section className="container-custom">
        <h2 className="text-2xl font-bold mb-6">실시간 인기 상품</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* KongDoo Pick */}
      <section className="container-custom">
        <h2 className="text-2xl font-bold mb-6">콩두 Pick</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...popularProducts].reverse().map((product) => (
            <ProductCard key={`pick-${product.id}`} product={product} />
          ))}
        </div>
      </section>

      {/* Category Banners */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="relative h-48 rounded-xl overflow-hidden group">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SNS Influencer Pick */}
      <section className="container-custom">
        <h2 className="text-2xl font-bold mb-6">SNS 인플루언서 Pick</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularProducts.slice(0, 4).map((product) => (
            <ProductCard key={`sns-${product.id}`} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home 