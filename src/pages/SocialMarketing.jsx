import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  BarChart3, 
  Users, 
  TrendingUp,
  Instagram,
  Film,
  Globe,
  Store
} from 'lucide-react';
import Button from '../components/common/Button';

const SocialMarketing = () => {
  const services = [
    {
      icon: Instagram,
      title: 'SNS 광고 대행',
      description: '인스타그램 중심의 광고 기획, 세팅, 집행\n맞춤형 콘텐츠 + 타겟 설정 + 리포트 제공'
    },
    {
      icon: Film,
      title: '콘텐츠 제작',
      description: '쇼핑몰 이미지 & 숏폼 영상 제작\n브랜드 스토리를 반영한 상세페이지 디자인'
    },
    {
      icon: Globe,
      title: '전용 홈페이지 제작',
      description: '단일 제품 또는 브랜드 전용 사이트 구축\n유지보수 및 콘텐츠 업데이트 포함'
    },
    {
      icon: Store,
      title: '콩두몰 입점 연계',
      description: '쇼핑몰 없이도 콩두몰 입점 가능\nSNS 콘텐츠 유입 → 구매 전환 구조'
    }
  ];

  const benefits = [
    {
      icon: ShoppingBag,
      title: '판매 채널 확보',
      description: '쇼핑몰 없이도 콩두몰에서 바로 판매 가능',
      color: 'bg-[#FF6B6B]'
    },
    {
      icon: BarChart3,
      title: '광고 + 유통 통합',
      description: 'SNS 콘텐츠 → 구매로 이어지는 자연스러운 흐름 설계',
      color: 'bg-[#4ECDC4]'
    },
    {
      icon: Users,
      title: '자발적 바이럴',
      description: "디지털 명함 '마프' 구독자들이 직접 콘텐츠를 제작·홍보",
      color: 'bg-[#45B7D1]'
    },
    {
      icon: TrendingUp,
      title: '성과형 수익 구조',
      description: '성과 기반 수수료 방식으로 ROI 향상 가능',
      color: 'bg-[#96CEB4]'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-kong-gold/5 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SNS 마케팅 + 유통 통합 대행
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              "상품만 준비하세요.<br />
              마케팅부터 판매까지 전부 해결해드립니다."
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              브랜드는 제품만 준비하세요.<br />
              SNS 광고, 콘텐츠 제작, 홈페이지 운영, 유통까지 – 전부 저희가 책임집니다.
            </p>
            <Button size="lg" variant="primary">
              서비스 시작하기
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">제공 서비스</h2>
            <p className="text-gray-600">통합적인 마케팅 솔루션을 제공합니다</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all"
              >
                <service.icon className="w-12 h-12 text-kong-gold mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">서비스 차별점</h2>
            <p className="text-gray-600">콩두몰만의 특별한 혜택을 확인하세요</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-square relative bg-white p-6">
                  <div className="flex flex-col h-full">
                    <span className={`${benefit.color} p-3 rounded-2xl w-fit`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </span>
                    <div className="mt-auto">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:translate-x-2 transition-transform duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm group-hover:translate-x-2 transition-transform duration-300 delay-75">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              지금 바로 시작하세요
            </h2>
            <Button size="lg" variant="primary">
              상담 신청하기
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SocialMarketing; 