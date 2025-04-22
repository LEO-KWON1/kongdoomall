import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, ChevronDown, ChevronUp } from 'lucide-react'

const BrandZone = () => {
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('popular')
  const [searchQuery, setSearchQuery] = useState('')

  const brands = [
    {
      id: 1,
      name: 'Brand A',
      logo: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: '의류',
      isNew: true,
      description: '프리미엄 의류 브랜드',
      products: 120,
      followers: 5000,
    },
    {
      id: 2,
      name: 'Brand B',
      logo: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: '신발',
      isNew: false,
      description: '트렌디한 신발 브랜드',
      products: 85,
      followers: 3500,
    },
    {
      id: 3,
      name: 'Brand C',
      logo: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: '가방',
      isNew: true,
      description: '럭셔리 가방 브랜드',
      products: 65,
      followers: 2800,
    },
  ]

  const categories = ['전체', '의류', '신발', '가방', '악세서리']
  const filters = [
    { id: 'popular', label: '인기순' },
    { id: 'new', label: '신규순' },
    { id: 'products', label: '상품 많은 순' },
    { id: 'followers', label: '팔로워 많은 순' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">브랜드존</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            프리미엄 브랜드의 특별한 제품들을 만나보세요
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="브랜드 검색"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-full hover:border-primary"
            >
              <Filter className="w-5 h-5" />
              <span>필터</span>
              {showFilters ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {filters.map((filter) => (
                <option key={filter.id} value={filter.id}>
                  {filter.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/brand/${brand.id}`}
              className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all overflow-hidden"
            >
              <div className="relative aspect-square">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />
                {brand.isNew && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-sm rounded-full">
                    NEW
                  </span>
                )}
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{brand.name}</h3>
                  <p className="text-gray-500">{brand.category}</p>
                </div>
                <p className="text-gray-600">{brand.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>상품 {brand.products}개</span>
                  <span>팔로워 {brand.followers.toLocaleString()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrandZone 