import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, BarChart, Share2, Award } from 'lucide-react';
import Button from '../../components/common/Button';

const Marketing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(110deg,#4ECDC4/10,transparent_70%)]" />
          <div className="absolute right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,#FF6B6B/5_0%,transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                디지털 마케팅의<br />새로운 패러다임
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                E-myprofile과 함께 성장하는 디지털 마케팅 전략으로<br />
                당신의 브랜드 가치를 높여보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg">무료 상담 신청</Button>
                <Button variant="outline" size="lg">서비스 소개서</Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#4ECDC4] to-[#FF6B6B] p-1">
                <div className="w-full h-full rounded-xl bg-white p-8">
                  <img 
                    src="/images/marketing-hero.jpg" 
                    alt="Digital Marketing"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 서비스 특징 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              차별화된 마케팅 서비스
            </h2>
            <p className="text-xl text-gray-600">
              E-myprofile만의 특별한 마케팅 솔루션을 경험해보세요
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: '트렌드 분석',
                description: '실시간 시장 트렌드 분석으로 최적의 마케팅 전략을 제시합니다.',
                color: 'bg-[#FF6B6B]'
              },
              {
                icon: Target,
                title: '타겟 마케팅',
                description: '정교한 데이터 분석을 통한 맞춤형 타겟 마케팅을 제공합니다.',
                color: 'bg-[#4ECDC4]'
              },
              {
                icon: BarChart,
                title: '성과 분석',
                description: '상세한 성과 분석 리포트로 마케팅 효과를 극대화합니다.',
                color: 'bg-[#45B7D1]'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 성공 사례 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              성공 사례
            </h2>
            <p className="text-xl text-gray-600">
              E-myprofile과 함께 성장한 파트너들의 이야기
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '뷰티 브랜드 A사',
                metric: '매출 300% 증가',
                period: '6개월',
                description: '타겟 마케팅 전략 도입으로 신규 고객 유입 대폭 증가'
              },
              {
                title: '패션 브랜드 B사',
                metric: '팔로워 500% 증가',
                period: '3개월',
                description: '인플루언서 마케팅으로 브랜드 인지도 급상승'
              },
              {
                title: '푸드 브랜드 C사',
                metric: 'ROAS 250% 달성',
                period: '12개월',
                description: '데이터 기반 마케팅으로 광고 효율 극대화'
              }
            ].map((case_, index) => (
              <motion.div
                key={case_.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{case_.title}</h3>
                <p className="text-2xl font-bold text-[#4ECDC4] mb-2">{case_.metric}</p>
                <p className="text-sm text-gray-500 mb-4">달성 기간: {case_.period}</p>
                <p className="text-gray-600">{case_.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-24 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B6B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                지금 바로 시작하세요
              </h2>
              <p className="text-xl mb-8 opacity-90">
                E-myprofile과 함께라면 당신의 디지털 마케팅도 성공할 수 있습니다
              </p>
              <Button 
                variant="white" 
                size="lg"
                className="bg-white text-[#4ECDC4] hover:bg-gray-100"
              >
                무료 상담 신청하기
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketing; 