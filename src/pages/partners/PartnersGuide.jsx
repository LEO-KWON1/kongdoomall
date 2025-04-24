import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'

const PartnersGuide = () => {
  const { user } = useAuth()

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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">파트너 가이드</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-card p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">시작하기</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">계정 설정</h3>
                  <p className="text-gray-600 text-sm">
                    프로필 정보를 입력하고 계정을 설정하세요.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">상품 선택</h3>
                  <p className="text-gray-600 text-sm">
                    홍보하고 싶은 상품을 선택하세요.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">링크 생성</h3>
                  <p className="text-gray-600 text-sm">
                    상품 링크를 생성하고 공유하세요.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-card p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">수익 창출</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">수익률</h3>
                  <p className="text-gray-600 text-sm">
                    판매 금액의 최대 10%까지 수익을 얻을 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">정산</h3>
                  <p className="text-gray-600 text-sm">
                    매월 1일과 15일에 정산이 이루어집니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">수익 확인</h3>
                  <p className="text-gray-600 text-sm">
                    실시간으로 수익 현황을 확인할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-card p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">자주 묻는 질문</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Q: 수익은 어떻게 계산되나요?</h3>
              <p className="text-gray-600">
                A: 공유한 링크를 통해 구매가 이루어지면 판매 금액의 최대 10%를 수익으로 받을 수 있습니다.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Q: 정산은 언제 이루어지나요?</h3>
              <p className="text-gray-600">
                A: 매월 1일과 15일에 정산이 이루어지며, 등록된 계좌로 입금됩니다.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Q: 수익은 어떻게 확인하나요?</h3>
              <p className="text-gray-600">
                A: 파트너 대시보드에서 실시간으로 수익 현황을 확인할 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/partners/products"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark"
          >
            시작하기
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PartnersGuide 