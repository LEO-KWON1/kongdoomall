import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-kong-gold mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-kong-black mb-4">페이지를 찾을 수 없습니다</h2>
          <p className="text-kong-gray-600 mb-8">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-kong-gold hover:bg-kong-gold/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kong-gold"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFound 