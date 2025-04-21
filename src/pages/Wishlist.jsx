import { useState } from 'react'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'

const Wishlist = () => {
  const [filter, setFilter] = useState('all')
  const [items, setItems] = useState([
    {
      id: 1,
      image: '/images/product1.jpg',
      name: '상품명 1',
      brand: '브랜드명',
      price: 15000,
      category: 'beauty',
      isSoldOut: false,
    },
    {
      id: 2,
      image: '/images/product2.jpg',
      name: '상품명 2',
      brand: '브랜드명',
      price: 25000,
      category: 'food',
      isSoldOut: true,
    },
  ])

  const filteredItems = filter === 'all'
    ? items
    : items.filter(item => item.category === filter)

  const handleRemove = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'beauty', name: '뷰티' },
    { id: 'food', name: '푸드' },
    { id: 'living', name: '리빙' },
  ]

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

      {filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">찜한 상품이 없습니다.</p>
        </div>
      ) : (
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
                  <FiHeart className="text-xl" />
                </button>
                {!item.isSoldOut && (
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-colors">
                    <FiShoppingCart className="text-xl" />
                  </button>
                )}
              </div>
              {item.isSoldOut && (
                <button className="absolute bottom-4 left-4 right-4 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700">
                  알림 받기
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist 