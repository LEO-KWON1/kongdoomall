import { Link } from 'react-router-dom'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'
import { useAppContext } from '../context/AppContext'

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useAppContext()

  const handleWishlistClick = (e) => {
    e.preventDefault()
    toggleWishlist(product)
  }

  const handleCartClick = (e) => {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2 flex space-x-2">
            <button
              className={`p-2 rounded-full shadow-md transition-colors ${
                isInWishlist(product.id)
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-primary hover:text-white'
              }`}
              onClick={handleWishlistClick}
            >
              <FiHeart className="text-xl" />
            </button>
            <button
              className="p-2 bg-white rounded-full shadow-md text-gray-600 hover:bg-primary hover:text-white transition-colors"
              onClick={handleCartClick}
            >
              <FiShoppingCart className="text-xl" />
            </button>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-sm text-gray-500">{product.brand}</p>
          <h3 className="text-base font-medium text-gray-900 line-clamp-2">{product.name}</h3>
          <p className="mt-1 text-lg font-semibold text-gray-900">
            {product.price.toLocaleString()}원
          </p>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard 