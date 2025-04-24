import { useAuth } from '../../context/AuthContext'
import { useApp } from '../../context/AppContext'
import { Link } from 'react-router-dom'
import { Copy, Share2 } from 'lucide-react'

const PartnersLinks = () => {
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
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">공유 링크</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-card p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">상품 공유 링크</h2>
            <div className="space-y-4">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">
                      {product.price.toLocaleString()}원
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigator.clipboard.writeText(
                        `${window.location.origin}/product/${product.id}`
                      )}
                      className="p-2 text-gray-400 hover:text-primary transition-colors"
                    >
                      <Copy className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => window.open(
                        `${window.location.origin}/product/${product.id}`,
                        "_blank"
                      )}
                      className="p-2 text-gray-400 hover:text-primary transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-card p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">프로필 공유 링크</h2>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">내 프로필</h3>
                  <p className="text-sm text-gray-500">
                    {window.location.origin}/profile/{user.id}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigator.clipboard.writeText(
                      `${window.location.origin}/profile/${user.id}`
                    )}
                    className="p-2 text-gray-400 hover:text-primary transition-colors"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => window.open(
                      `${window.location.origin}/profile/${user.id}`,
                      "_blank"
                    )}
                    className="p-2 text-gray-400 hover:text-primary transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersLinks; 