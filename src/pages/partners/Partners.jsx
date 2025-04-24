import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingCart, DollarSign, ArrowRight, Users, Target, Award } from 'lucide-react'
import Button from '../../components/common/Button'

const Partners = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 히어로 섹션 */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/10 via-transparent to-[#4ECDC4]/10" />
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[120%] h-full bg-[radial-gradient(circle_at_center,rgba(255,107,107,0.05)_0%,transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                새로운 수익창출의 기회
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                당신의 영향력을 수익으로 전환하세요. 콩두몰과 함께라면 
                파트너스로서 안정적인 수익을 창출할 수 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://e-myprofile.com/?home=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-kong-gold text-white rounded-full hover:bg-kong-gold/90 transition-colors"
                >
                  파트너스 시작하기
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  더 알아보기
                </Button>
              </div>
            </motion.div>
          </div>

          {/* 핵심 기능 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: '간편한 시작',
                description: '복잡한 절차 없이 SNS 계정 연동만으로 바로 시작할 수 있습니다.',
                icon: Target,
                color: 'bg-[#FF6B6B]'
              },
              {
                title: '높은 수익률',
                description: '업계 최고 수준의 수수료 지급과 다양한 프로모션 보너스를 제공합니다.',
                icon: Award,
                color: 'bg-[#4ECDC4]'
              },
              {
                title: '전문가 지원',
                description: '마케팅 전략 수립부터 콘텐츠 제작까지 전문가의 1:1 맞춤 지원을 받으세요.',
                icon: Users,
                color: 'bg-[#45B7D1]'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                  <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 통계 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-[#FF6B6B] mb-2">10,000+</p>
                <p className="text-gray-600">활성 파트너스</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#4ECDC4] mb-2">₩1.2B+</p>
                <p className="text-gray-600">월 평균 수익 지급액</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#45B7D1] mb-2">98%</p>
                <p className="text-gray-600">파트너 만족도</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 파트너스 기능 섹션 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/partners/products" className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all group">
              <ShoppingCart className="w-10 h-10 text-[#FF6B6B] mb-6" />
              <h2 className="text-xl font-bold mb-4 group-hover:text-[#FF6B6B] transition-colors">셀러 전용 상품</h2>
              <p className="text-gray-600 mb-6">파트너스 전용 상품을 구매하고 공유하세요. 특별한 할인과 혜택을 제공합니다.</p>
              <div className="flex items-center text-[#FF6B6B]">
                <span>바로가기</span>
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link to="/partners/earnings" className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all group">
              <DollarSign className="w-10 h-10 text-[#4ECDC4] mb-6" />
              <h2 className="text-xl font-bold mb-4 group-hover:text-[#4ECDC4] transition-colors">수익/정산 내역</h2>
              <p className="text-gray-600 mb-6">실시간으로 수익을 확인하고 투명한 정산 내역을 확인하세요.</p>
              <div className="flex items-center text-[#4ECDC4]">
                <span>바로가기</span>
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link to="/partners/guide" className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all group">
              <Users className="w-10 h-10 text-[#45B7D1] mb-6" />
              <h2 className="text-xl font-bold mb-4 group-hover:text-[#45B7D1] transition-colors">파트너 가이드</h2>
              <p className="text-gray-600 mb-6">성공적인 파트너 활동을 위한 상세한 가이드와 팁을 확인하세요.</p>
              <div className="flex items-center text-[#45B7D1]">
                <span>바로가기</span>
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "수익은 어떻게 발생하나요?",
                answer: "공유한 상품이 판매될 때마다 판매 금액의 최대 10%를 수수료로 받을 수 있습니다. 판매 실적에 따라 추가 보너스도 제공됩니다."
              },
              {
                question: "정산은 언제 이루어지나요?",
                answer: "매월 1일과 15일에 정산이 이루어지며, 등록된 계좌로 자동 입금됩니다. 실시간으로 수익 현황을 확인할 수 있습니다."
              },
              {
                question: "어떤 지원을 받을 수 있나요?",
                answer: "전문 컨설턴트의 1:1 컨설팅, 상품 촬영 지원, 마케팅 교육 등 다양한 지원 프로그램을 제공합니다."
              },
              {
                question: "가입 자격은 어떻게 되나요?",
                answer: "E-myprofile 구독자면 누구나 가입할 수 있습니다. 팔로워 수에 제한은 없으며, 성실한 활동만 있으면 됩니다."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partners 