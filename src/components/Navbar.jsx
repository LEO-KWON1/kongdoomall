import { Link } from 'react-router-dom'
import { FiSearch, FiShoppingCart, FiHeart, FiUser } from 'react-icons/fi'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {
  const { cart, wishlist, user } = useAppContext()

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const wishlistCount = wishlist.length

  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">콩두몰</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <FiSearch className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/wishlist" className="p-2 hover:text-primary relative">
              <FiHeart className="text-xl" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="p-2 hover:text-primary relative">
              <FiShoppingCart className="text-xl" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            {user ? (
              <Link to="/my-kongdoo" className="p-2 hover:text-primary">
                <FiUser className="text-xl" />
              </Link>
            ) : (
              <Link to="/login" className="p-2 hover:text-primary">
                <FiUser className="text-xl" />
              </Link>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="hidden md:flex items-center space-x-6 py-4">
          <Link to="/category/beauty" className="text-gray-600 hover:text-primary">뷰티</Link>
          <Link to="/category/food" className="text-gray-600 hover:text-primary">푸드</Link>
          <Link to="/category/living" className="text-gray-600 hover:text-primary">리빙</Link>
          <Link to="/brand-zone" className="text-gray-600 hover:text-primary">브랜드관</Link>
          <Link to="/agency" className="text-gray-600 hover:text-primary">콩두 에이전시</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 