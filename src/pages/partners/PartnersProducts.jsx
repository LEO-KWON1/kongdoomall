import { useAuth } from '../../context/AuthContext'
import { useApp } from '../../context/AppContext'
import { Link } from 'react-router-dom'
import { ShoppingCart, Heart } from 'lucide-react'

const PartnersProducts = () => {
  const { user } = useAuth()
  const { addToCart, addToWishlist } = useApp()

  const products = [
    {
      id: 1,
      name: "파트너 전용 상품 1",
      price: 99000,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      name: "파트너 전용 상품 2",
      price: 129000,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      name: "파트너 전용 상품 3",
      price: 159000,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ]

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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">파트너 전용 상품</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-xl font-semibold text-primary mb-4">
                  {product.price.toLocaleString()}원
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => addToWishlist(product)}
                    className="p-2 text-gray-400 hover:text-primary transition-colors"
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => addToCart(product)}
                    className="p-2 text-gray-400 hover:text-primary transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartnersProducts 