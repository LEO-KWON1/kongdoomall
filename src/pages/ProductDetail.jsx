import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Heart, ShoppingBag, Truck, Shield, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../components/common/Button'
import { useApp } from '../context/AppContext'

const ProductDetail = () => {
  const { id } = useParams()
  const { products, addToCart, toggleWishlist } = useApp()
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)

  // Find the product from the products array
  const product = products.find(p => p.id === parseInt(id))

  // If product is not found, show loading or error state
  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">상품을 찾을 수 없습니다</h1>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-primary hover:text-primary-dark"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            뒤로가기
          </button>
        </div>
      </div>
    )
  }

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('사이즈를 선택해주세요')
      return
    }
    addToCart({ ...product, size: selectedSize, quantity })
  }

  const features = [
    {
      icon: Truck,
      title: '무료 배송',
      description: '3만원 이상 구매 시'
    },
    {
      icon: Shield,
      title: '안전한 결제',
      description: '암호화된 결제 시스템'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 뒤로가기 버튼 */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-kong-gray-600 hover:text-kong-gray-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          뒤로가기
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 상품 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.additionalImages && (
              <div className="grid grid-cols-2 gap-4">
                {product.additionalImages.map((image, index) => (
                  <div key={index} className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* 상품 정보 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold text-kong-gray-900">{product.name}</h1>
              <p className="text-lg text-kong-gray-600 mt-2">{product.brand}</p>
            </div>

            <p className="text-2xl font-bold text-kong-gray-900">
              {product.price.toLocaleString()}원
            </p>

            <p className="text-kong-gray-600">{product.description}</p>

            {/* 사이즈 선택 */}
            {product.sizes && (
              <div>
                <h3 className="text-sm font-medium text-kong-gray-900 mb-3">사이즈</h3>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 text-center rounded-md border ${
                        selectedSize === size
                          ? 'border-kong-gold bg-kong-gold text-white'
                          : 'border-kong-gray-300 text-kong-gray-700 hover:border-kong-gold'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 수량 선택 */}
            <div>
              <h3 className="text-sm font-medium text-kong-gray-900 mb-3">수량</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-8 h-8 rounded-full border border-kong-gray-300 flex items-center justify-center hover:border-kong-gold"
                >
                  -
                </button>
                <span className="text-kong-gray-900">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-8 h-8 rounded-full border border-kong-gray-300 flex items-center justify-center hover:border-kong-gold"
                >
                  +
                </button>
              </div>
            </div>

            {/* 구매 버튼 */}
            <div className="flex space-x-4">
              <Button variant="primary" className="flex-1" onClick={handleAddToCart}>
                장바구니
              </Button>
              <Button variant="outline" className="flex-1">
                바로구매
              </Button>
              <button 
                onClick={() => toggleWishlist(product)}
                className="p-4 rounded-full border border-kong-gray-300 hover:border-kong-gold"
              >
                <Heart className="w-6 h-6 text-kong-gray-600" />
              </button>
            </div>

            {/* 배송 정보 */}
            <div className="border-t border-kong-gray-200 pt-6 mt-8">
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start space-x-3">
                    <feature.icon className="w-5 h-5 text-kong-gold" />
                    <div>
                      <h4 className="text-sm font-medium text-kong-gray-900">{feature.title}</h4>
                      <p className="text-sm text-kong-gray-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail 