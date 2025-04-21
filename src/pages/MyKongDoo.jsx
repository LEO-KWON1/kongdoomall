import { useState } from 'react'
import { FiEdit2, FiDollarSign, FiHelpCircle } from 'react-icons/fi'

const MyKongDoo = () => {
  const [activeTab, setActiveTab] = useState('reviews')

  const tabs = [
    { id: 'reviews', name: '내 리뷰' },
    { id: 'products', name: '내 상품' },
    { id: 'earnings', name: '수익 현황' },
    { id: 'suggestions', name: '상품 제안' },
  ]

  // 임시 데이터
  const reviews = [
    {
      id: 1,
      product: {
        name: '상품명 1',
        image: '/images/product1.jpg',
      },
      content: '좋은 상품이에요!',
      rating: 5,
      date: '2024-03-01',
    },
  ]

  const earnings = {
    total: 150000,
    thisMonth: 50000,
    lastMonth: 100000,
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-2xl font-bold mb-8">마이 콩두</h1>

      {/* Tabs */}
      <div className="flex border-b mb-8">
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

      {/* Content */}
      <div className="space-y-8">
        {activeTab === 'reviews' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">내 리뷰</h2>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="border rounded-lg p-6"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={review.product.image}
                      alt={review.product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{review.product.name}</h3>
                      <div className="flex items-center space-x-2 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-xl ${
                              i < review.rating
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="mt-2 text-gray-600">{review.content}</p>
                      <p className="text-sm text-gray-500 mt-2">{review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'earnings' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">수익 현황</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">총 수익</h3>
                  <FiDollarSign className="text-primary" />
                </div>
                <p className="text-3xl font-bold">
                  {earnings.total.toLocaleString()}원
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">이번 달 수익</h3>
                  <FiDollarSign className="text-primary" />
                </div>
                <p className="text-3xl font-bold">
                  {earnings.thisMonth.toLocaleString()}원
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">지난 달 수익</h3>
                  <FiDollarSign className="text-primary" />
                </div>
                <p className="text-3xl font-bold">
                  {earnings.lastMonth.toLocaleString()}원
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'suggestions' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">상품 제안</h2>
            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">새로운 상품 아이디어를 제안해주세요</h3>
                <FiHelpCircle className="text-primary" />
              </div>
              <textarea
                className="w-full h-32 p-4 border rounded-lg mb-4"
                placeholder="상품 아이디어를 자유롭게 작성해주세요..."
              />
              <button className="btn-primary">제안하기</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyKongDoo 