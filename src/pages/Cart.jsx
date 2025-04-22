import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Trash2, ChevronLeft, ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '../context/AppContext'

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity } = useApp()
  const [showCoupon, setShowCoupon] = useState(false)
  const [couponCode, setCouponCode] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState(null)
  const [selectedItems, setSelectedItems] = useState(cart.map(item => ({ ...item, selected: true })))

  const coupons = [
    { code: 'WELCOME10', discount: 10, type: 'percent' },
    { code: 'FREESHIP', discount: 3000, type: 'fixed' },
  ]

  const handleQuantityChange = (id, newQuantity) => {
    updateCartQuantity(id, newQuantity)
    setSelectedItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ))
  }

  const handleRemoveItem = (id) => {
    removeFromCart(id)
    setSelectedItems(prev => prev.filter(item => item.id !== id))
  }

  const toggleSelect = (id) => {
    setSelectedItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    )
  }

  const selectAll = () => {
    const allSelected = selectedItems.every(item => item.selected)
    setSelectedItems(prev =>
      prev.map(item => ({ ...item, selected: !allSelected }))
    )
  }

  const applyCoupon = () => {
    const coupon = coupons.find(c => c.code === couponCode)
    if (coupon) {
      setAppliedCoupon(coupon)
      setShowCoupon(false)
    }
  }

  const removeCoupon = () => {
    setAppliedCoupon(null)
    setCouponCode('')
  }

  const selectedCartItems = selectedItems.filter(item => item.selected)
  const subtotal = selectedCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const shippingFee = subtotal >= 50000 ? 0 : 3000
  const couponDiscount = appliedCoupon
    ? appliedCoupon.type === 'percent'
      ? (subtotal * appliedCoupon.discount) / 100
      : appliedCoupon.discount
    : 0

  const totalPrice = subtotal + shippingFee - couponDiscount

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">장바구니가 비어있습니다</h2>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark"
            >
              쇼핑하러 가기
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link
            to="/products"
            className="flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            쇼핑 계속하기
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900">장바구니</h1>
              <button
                onClick={selectAll}
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                {selectedItems.every((item) => item.selected)
                  ? '전체 선택 해제'
                  : '전체 선택'}
              </button>
            </div>
            {selectedItems.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-card p-8 text-center">
                <p className="text-gray-600">장바구니가 비어있습니다.</p>
                <Link
                  to="/products"
                  className="inline-block mt-4 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  쇼핑하러 가기
                </Link>
              </div>
            ) : (
              <AnimatePresence>
                {selectedItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white rounded-2xl shadow-card p-6 flex items-center space-x-6"
                  >
                    <input
                      type="checkbox"
                      checked={item.selected}
                      onChange={() => toggleSelect(item.id)}
                      className="w-5 h-5 text-primary rounded border-gray-300"
                    />
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm text-gray-500">{item.brand}</p>
                          <h3 className="text-lg font-medium text-gray-900">
                            {item.name}
                          </h3>
                          <p className="text-primary font-semibold mt-1">
                            {item.price.toLocaleString()}원
                          </p>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex items-center space-x-4 mt-4">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="p-2 border border-gray-200 rounded-lg hover:border-primary transition-colors"
                        >
                          -
                        </button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="p-2 border border-gray-200 rounded-lg hover:border-primary transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-card p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                주문 요약
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">상품 금액</span>
                  <span className="text-gray-900">
                    {subtotal.toLocaleString()}원
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">배송비</span>
                  <span className="text-gray-900">
                    {shippingFee === 0 ? (
                      <span className="text-primary">무료</span>
                    ) : (
                      `${shippingFee.toLocaleString()}원`
                    )}
                  </span>
                </div>

                {appliedCoupon && (
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">할인</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {appliedCoupon.code}
                      </span>
                      <button
                        onClick={removeCoupon}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-primary">
                      -{couponDiscount.toLocaleString()}원
                    </span>
                  </div>
                )}

                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">
                      총 주문 금액
                    </span>
                    <span className="font-semibold text-primary">
                      {totalPrice.toLocaleString()}원
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => setShowCoupon(!showCoupon)}
                    className="w-full flex items-center justify-between text-gray-600 hover:text-primary transition-colors"
                  >
                    <span>쿠폰 적용</span>
                    {showCoupon ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>

                  <AnimatePresence>
                    {showCoupon && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2"
                      >
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            placeholder="쿠폰 코드 입력"
                            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                          />
                          <button
                            onClick={applyCoupon}
                            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                          >
                            적용
                          </button>
                        </div>
                        <div className="text-sm text-gray-500">
                          사용 가능한 쿠폰:
                          <ul className="mt-1 space-y-1">
                            {coupons.map((coupon) => (
                              <li key={coupon.code}>
                                {coupon.code} -{' '}
                                {coupon.type === 'percent'
                                  ? `${coupon.discount}% 할인`
                                  : `${coupon.discount.toLocaleString()}원 할인`}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  disabled={selectedCartItems.length === 0}
                  className={`w-full py-3 rounded-lg transition-colors ${
                    selectedCartItems.length === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-primary-dark'
                  }`}
                >
                  {selectedCartItems.length}개 상품 주문하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart 