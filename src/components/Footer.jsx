import { Link } from 'react-router-dom'
import { FiInstagram, FiYoutube } from 'react-icons/fi'
import { FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">콩두몰</h3>
            <p className="text-gray-600 mb-4">
              SNS 기반 프로슈머 쇼핑몰<br />
              서울특별시 강남구 테헤란로
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <FiInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <FaTiktok className="text-xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <FiYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">고객센터</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-600 hover:text-primary">자주 묻는 질문</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary">1:1 문의</Link></li>
              <li><Link to="/notice" className="text-gray-600 hover:text-primary">공지사항</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">이용약관</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-600 hover:text-primary">이용약관</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary">개인정보처리방침</Link></li>
              <li><Link to="/partnership" className="text-gray-600 hover:text-primary">제휴/입점 문의</Link></li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-lg font-semibold mb-4">사업자 정보</h3>
            <ul className="space-y-2 text-gray-600">
              <li>상호명: 콩두몰</li>
              <li>대표: 홍길동</li>
              <li>사업자등록번호: 123-45-67890</li>
              <li>통신판매업신고: 2024-서울강남-1234</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>© 2024 콩두몰. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 