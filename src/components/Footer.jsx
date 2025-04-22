import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-kong-brown-900 to-kong-brown-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-toad-green-400 flex items-center">
              <span className="w-2 h-2 bg-toad-green-400 rounded-full mr-2"></span>
              고객센터
            </h3>
            <div className="space-y-2">
              <p className="text-kong-brown-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-kong-brown-300 rounded-full mr-2"></span>
                전화: 010-7123-6612
              </p>
              <p className="text-kong-brown-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-kong-brown-300 rounded-full mr-2"></span>
                이메일: kojkhj614@naver.com
              </p>
              <p className="text-kong-brown-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-kong-brown-300 rounded-full mr-2"></span>
                대표: 총민혁
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-toad-green-400 flex items-center">
              <span className="w-2 h-2 bg-toad-green-400 rounded-full mr-2"></span>
              회사소개
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-kong-brown-300 hover:text-toad-green-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-kong-brown-300 rounded-full mr-2 group-hover:bg-toad-green-400 transition-colors duration-200"></span>
                  회사소개
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-kong-brown-300 hover:text-toad-green-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-kong-brown-300 rounded-full mr-2 group-hover:bg-toad-green-400 transition-colors duration-200"></span>
                  이용약관
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-kong-brown-300 hover:text-toad-green-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-kong-brown-300 rounded-full mr-2 group-hover:bg-toad-green-400 transition-colors duration-200"></span>
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-toad-green-400 flex items-center">
              <span className="w-2 h-2 bg-toad-green-400 rounded-full mr-2"></span>
              파트너
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/partners" className="text-kong-brown-300 hover:text-toad-green-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-kong-brown-300 rounded-full mr-2 group-hover:bg-toad-green-400 transition-colors duration-200"></span>
                  파트너 가입
                </Link>
              </li>
              <li>
                <Link to="/partners/guide" className="text-kong-brown-300 hover:text-toad-green-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-kong-brown-300 rounded-full mr-2 group-hover:bg-toad-green-400 transition-colors duration-200"></span>
                  파트너 가이드
                </Link>
              </li>
              <li>
                <Link to="/partners/earnings" className="text-kong-brown-300 hover:text-toad-green-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-kong-brown-300 rounded-full mr-2 group-hover:bg-toad-green-400 transition-colors duration-200"></span>
                  수익현황
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-toad-green-400 flex items-center">
              <span className="w-2 h-2 bg-toad-green-400 rounded-full mr-2"></span>
              소셜
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-kong-brown-800 rounded-full hover:bg-toad-green-600 transition-colors duration-200 group"
              >
                <Instagram className="w-5 h-5 text-kong-brown-300 group-hover:text-white transition-colors duration-200" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-kong-brown-800 rounded-full hover:bg-toad-green-600 transition-colors duration-200 group"
              >
                <Facebook className="w-5 h-5 text-kong-brown-300 group-hover:text-white transition-colors duration-200" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-kong-brown-800 rounded-full hover:bg-toad-green-600 transition-colors duration-200 group"
              >
                <Youtube className="w-5 h-5 text-kong-brown-300 group-hover:text-white transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-kong-brown-800 text-center">
          <div className="flex items-center justify-center space-x-2">
            <img src="/logo.svg" alt="KongDoo Mall" className="h-8 w-8" />
            <p className="text-kong-brown-300">© 2024 KongDoo Mall. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 