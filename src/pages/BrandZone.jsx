import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiFilter, FiStar } from 'react-icons/fi'

const BrandZone = () => {
  const [filter, setFilter] = useState('popular')
  const [category, setCategory] = useState('all')

  const brands = [
    {
      id: 1,
      name: '달바',
      logo: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
      category: 'beauty',
      isNew: true,
      description: '자연주의 스킨케어 브랜드',
      products: 50,
      followers: 25000,
    },
    {
      id: 2,
      name: '오설록',
      logo: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
      category: 'food',
      isNew: false,
      description: '프리미엄 차(茶) 전문 브랜드',
      products: 85,
      followers: 42000,
    },
    {
      id: 3,
      name: '오픈클로젯',
      logo: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
      category: 'living',
      isNew: false,
      description: '모던 라이프스타일 가구 브랜드',
      products: 120,
      followers: 31000,
    },
    {
      id: 4,
      name: '아떼',
      logo: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
      category: 'beauty',
      isNew: true,
      description: '비건 뷰티 선두주자',
      products: 45,
      followers: 18000,
    },
    {
      id: 5,
      name: '그래놀라하우스',
      logo: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
      category: 'food',
      isNew: true,
      description: '건강한 아침식사 전문',
      products: 30,
      followers: 15000,
    },
    {
      id: 6,
      name: '모던하우스',
      logo: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
      category: 'living',
      isNew: false,
      description: '일상을 특별하게 만드는 홈퍼니싱',
      products: 150,
      followers: 38000,
    },
  ]

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'beauty', name: '뷰티' },
    { id: 'food', name: '푸드' },
    { id: 'living', name: '리빙' },
  ]

  const filters = [
    { id: 'popular', name: '인기순' },
    { id: 'new', name: '신규 브랜드' },
    { id: 'products', name: '상품 많은 순' },
    { id: 'followers', name: '팔로워 많은 순' },
  ]

  const filteredBrands = brands
    .filter(brand => category === 'all' || brand.category === category)
    .sort((a, b) => {
      switch (filter) {
        case 'popular':
          return b.followers - a.followers
        case 'new':
          return b.isNew - a.isNew
        case 'products':
          return b.products - a.products
        case 'followers':
          return b.followers - a.followers
        default:
          return 0
      }
    })

  return (
    <div className="container-custom py-8">
      <h1 className="text-2xl font-bold mb-8">브랜드관</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center space-x-2">
          <FiFilter className="text-gray-500" />
          <span className="text-gray-700">카테고리</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`px-4 py-2 rounded-full ${
              category === cat.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center space-x-2">
          <FiStar className="text-gray-500" />
          <span className="text-gray-700">정렬</span>
        </div>
        {filters.map((f) => (
          <button
            key={f.id}
            className={`px-4 py-2 rounded-full ${
              filter === f.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setFilter(f.id)}
          >
            {f.name}
          </button>
        ))}
      </div>

      {/* Brand Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBrands.map((brand) => (
          <Link
            key={brand.id}
            to={`/brand/${brand.id}`}
            className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-48 object-cover"
              />
              {brand.isNew && (
                <span className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-sm">
                  NEW
                </span>
              )}
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{brand.name}</h2>
              <p className="text-gray-600 mb-4">{brand.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>상품 {brand.products}개</span>
                <span>팔로워 {brand.followers.toLocaleString()}명</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BrandZone 