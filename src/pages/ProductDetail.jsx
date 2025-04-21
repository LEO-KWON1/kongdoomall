import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'

const ProductDetail = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  // 임시 데이터
  const product = {
    id: 1,
    images: [
      '/images/product1.jpg',
      '/images/product2.jpg',
      '/images/product3.jpg',
    ],
    brand: '브랜드명',
    name: '상품명',
    price: 15000,
    discount: 20,
    description: '상품 상세 설명이 들어갑니다.',
    reviews: [
      {
        id: 1,
        user: '사용자1',
        rating: 5,
        content: '좋은 상품이에요!',
        images: ['/images/review1.jpg'],
        date: '2024-03-01',
      },
    ],
  }

  const discountedPrice = product.price * (1 - product.discount / 100)

  return (
    <div className="container-custom py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <Swiper
            modules={[Navigation, Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            navigation
            className="mb-4"
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Thumbs]}
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            slidesPerView={4}
            className="h-24"
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6">
            <p className="text-gray-500 mb-2">{product.brand}</p>
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-3xl font-bold text-primary">
                {discountedPrice.toLocaleString()}원
              </span>
              {product.discount > 0 && (
                <>
                  <span className="text-gray-500 line-through">
                    {product.price.toLocaleString()}원
                  </span>
                  <span className="text-primary font-bold">{product.discount}%</span>
                </>
              )}
            </div>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">수량</label>
            <div className="flex items-center space-x-4">
              <button
                className="w-8 h-8 border rounded-full flex items-center justify-center"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                className="w-8 h-8 border rounded-full flex items-center justify-center"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="btn-primary flex-1 flex items-center justify-center space-x-2">
              <FiShoppingCart />
              <span>장바구니에 담기</span>
            </button>
            <button className="btn-secondary flex-1">바로 구매하기</button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">리뷰</h2>
        <div className="space-y-6">
          {product.reviews.map((review) => (
            <div key={review.id} className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-medium">{review.user}</p>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="mb-4">{review.content}</p>
              {review.images && (
                <div className="flex space-x-4">
                  {review.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`리뷰 이미지 ${index + 1}`}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail 