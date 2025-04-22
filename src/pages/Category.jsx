import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shirt, Footprints, ShoppingBag, Gem } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { useApp } from '../context/AppContext'
import { useEffect, useState } from 'react'

const Category = () => {
  const { category } = useParams()
  const { products } = useApp()
  const [categoryProducts, setCategoryProducts] = useState([])

  const categoryInfo = {
    '의류': { 
      icon: Shirt, 
      color: 'bg-[#FF6B6B]', 
      gradient: 'from-[#FF6B6B] to-[#FF8787]',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070',
      description: '트렌디한 의류 컬렉션'
    },
    '신발': { 
      icon: Footprints, 
      color: 'bg-[#4ECDC4]', 
      gradient: 'from-[#4ECDC4] to-[#6EE7E7]',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012',
      description: '스타일리시한 신발 컬렉션'
    },
    '가방': { 
      icon: ShoppingBag, 
      color: 'bg-[#45B7D1]', 
      gradient: 'from-[#45B7D1] to-[#5CD3E5]',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935',
      description: '품격있는 가방 컬렉션'
    },
    '악세서리': { 
      icon: Gem, 
      color: 'bg-[#96CEB4]', 
      gradient: 'from-[#96CEB4] to-[#AEEBD7]',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1887',
      description: '특별한 악세서리 컬렉션'
    }
  }

  useEffect(() => {
    const filteredProducts = products.filter(product => 
      product.category === category
    )
    setCategoryProducts(filteredProducts)
  }, [category, products])

  const Icon = categoryInfo[category]?.icon || Shirt
  const info = categoryInfo[category] || categoryInfo['의류']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={info.image} 
            alt={category} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className={`${info.color} inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-medium mb-4`}>
              <Icon className="w-5 h-5 mr-2" />
              {category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {category} 컬렉션
            </h1>
            <p className="text-xl text-white/90">
              {info.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {categoryProducts.length > 0 ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                전체 상품 <span className="text-[#FF6B6B]">{categoryProducts.length}</span>
              </h2>
              <div className="flex gap-2">
                {/* Add filter/sort options here if needed */}
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {categoryProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="transform hover:scale-[1.02] transition-transform duration-300"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-32 bg-white rounded-3xl shadow-sm"
          >
            <Icon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              상품 준비중
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              현재 {category} 카테고리의 상품을 준비중입니다.
              곧 멋진 상품들로 찾아뵙겠습니다.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Category 