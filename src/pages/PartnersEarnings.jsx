import { useAuth } from '../context/AuthContext'
import { useApp } from '../context/AppContext'
import { Link } from 'react-router-dom'
import Button from '../components/ui/button'
import { DollarSign, TrendingUp, Calendar } from 'lucide-react'

const PartnersEarnings = () => {
  const { user } = useAuth()
  const { cart } = useApp()

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">로그인이 필요합니다</h1>
          <Link
            to="/login"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark"
          >
            로그인하기
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">수익 현황</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-card p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">총 수익</h2>
            <p className="text-3xl font-bold text-primary">₩1,234,567</p>
          </div>
          <div className="bg-white rounded-xl shadow-card p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">이번 달 수익</h2>
            <p className="text-3xl font-bold text-primary">₩234,567</p>
          </div>
          <div className="bg-white rounded-xl shadow-card p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">판매된 상품</h2>
            <p className="text-3xl font-bold text-primary">{cart.length}개</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnersEarnings 