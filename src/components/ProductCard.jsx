import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ROUTES } from '../lib/constants';

const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist } = useApp();

  return (
    <div className="group relative bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all overflow-hidden">
      <Link
        to={`${ROUTES.PRODUCTS}/${product.id}`}
        className="group relative block overflow-hidden rounded-lg"
      >
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">{product.brand}</span>
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
        <Link
          to={`${ROUTES.PRODUCTS}/${product.id}`}
          className="font-medium text-gray-900 mb-2 hover:text-primary transition-colors"
        >
          {product.name}
        </Link>
        <p className="text-lg font-semibold text-gray-900">
          {product.price.toLocaleString()}원
        </p>
      </div>
    </div>
  );
};

export default ProductCard; 