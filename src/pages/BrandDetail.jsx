import { useParams } from 'react-router-dom'
import { useState } from 'react'
import ProductCard from '../components/ProductCard'

const BrandDetail = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('products')

  // 임시 브랜드 데이터
  const brand = {
    id: parseInt(id),
    name: '달바',
    logo: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
    banner: 'https://images.unsplash.com/photo-1470081989393-3da2f9338f78?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=400&q=80',
    description: '자연주의 스킨케어 브랜드',
    followers: 25000,
    products: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
        name: '화이트 트러플 세럼',
        price: 45000,
        brand: '달바'
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1563804447971-6e113ab80713?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
        name: '워터풀 선크림',
        price: 28000,
        brand: '달바'
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1598452963314-b09f397486c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
        name: '미스트 토너',
        price: 32000,
        brand: '달바'
      },
    ],
    posts: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1599733594230-5cc1db667d14?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
        title: '봄맞이 수분 케어 꿀팁',
        likes: 1200,
        comments: 45
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
        title: '데일리 스킨케어 루틴',
        likes: 980,
        comments: 32
      }
    ]
  }

  const tabs = [
    { id: 'products', name: '상품' },
    { id: 'posts', name: 'SNS' },
    { id: 'about', name: '브랜드 소개' },
  ]

  return (
    <div>
      {/* Brand Banner */}
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src={brand.banner}
          alt={brand.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-white"
            />
            <h1 className="text-3xl font-bold mb-2">{brand.name}</h1>
            <p className="text-lg mb-4">{brand.description}</p>
            <p className="text-sm">팔로워 {brand.followers.toLocaleString()}명</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="container-custom">
        <div className="flex border-b mb-8 mt-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-3 font-medium ${
                activeTab === tab.id
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brand.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {activeTab === 'posts' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brand.posts.map((post) => (
              <div key={post.id} className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium mb-2">{post.title}</h3>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>좋아요 {post.likes}</span>
                    <span>댓글 {post.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'about' && (
          <div className="max-w-2xl mx-auto prose">
            <h2>브랜드 스토리</h2>
            <p>
              달바는 자연의 순수한 성분을 담아 피부 본연의 건강함을 되찾아주는 스킨케어 브랜드입니다.
              화이트 트러플과 같은 프리미엄 원료를 사용하여 피부에 영양과 활력을 전달합니다.
            </p>
            <h2>브랜드 철학</h2>
            <p>
              우리는 피부 건강을 위한 가장 순수하고 효과적인 솔루션을 제공하기 위해 끊임없이 연구하고 있습니다.
              자연과 과학의 조화를 통해 최상의 스킨케어 경험을 선사합니다.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BrandDetail 