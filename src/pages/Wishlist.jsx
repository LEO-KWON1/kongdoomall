import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, ChevronLeft, ShoppingCart } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { useApp } from '../context/AppContext'

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useApp()
  const [filter, setFilter] = useState('all')

  const filteredItems = filter === 'all'
    ? wishlist
    : wishlist.filter(item => item.category === filter)

  const handleRemove = (id) => {
    removeFromWishlist(id)
  }

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: 1 })
  }

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'beauty', name: '뷰티' },
    { id: 'food', name: '푸드' },
    { id: 'living', name: '리빙' },
  ]

  if (wishlist.length === 0) {
    return (
      <div className="container-custom py-8">
        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">찜한 상품이 없습니다</h2>
          <p className="text-gray-600 mb-8">관심 있는 상품을 찜해보세요</p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark"
          >
            쇼핑하러 가기
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-2xl font-bold mb-8">찜한 상품</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full ${
              filter === category.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setFilter(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative border rounded-lg overflow-hidden"
          >
            <div className="relative aspect-square">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              {item.isSoldOut && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white font-semibold">품절</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <p className="text-gray-500 text-sm">{item.brand}</p>
              <h3 className="font-medium line-clamp-2">{item.name}</h3>
              <p className="text-lg font-semibold mt-2">
                {item.price.toLocaleString()}원
              </p>
            </div>
            <div className="absolute top-2 right-2 flex space-x-2">
              <button
                className="p-2 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-colors"
                onClick={() => handleRemove(item.id)}
              >
                <Heart className="w-5 h-5" />
              </button>
              <button
                className="p-2 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-colors"
                onClick={() => handleAddToCart(item)}
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist 