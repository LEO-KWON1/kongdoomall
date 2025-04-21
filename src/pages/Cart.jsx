import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiTrash2 } from 'react-icons/fi'

const Cart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      image: '/images/product1.jpg',
      name: '상품명 1',
      brand: '브랜드명',
      price: 15000,
      quantity: 1,
    },
    {
      id: 2,
      image: '/images/product2.jpg',
      name: '상품명 2',
      brand: '브랜드명',
      price: 25000,
      quantity: 2,
    },
  ])

  const handleQuantityChange = (id, newQuantity) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ))
  }

  const handleRemove = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingFee = subtotal > 50000 ? 0 : 3000
  const total = subtotal + shippingFee

  return (
    <div className="container-custom py-8">
      <h1 className="text-2xl font-bold mb-8">장바구니</h1>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">장바구니가 비어있습니다.</p>
          <Link to="/" className="btn-primary inline-block">
            쇼핑 계속하기
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center p-4 border rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1 ml-4">
                    <p className="text-gray-500 text-sm">{item.brand}</p>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-lg font-semibold">
                      {item.price.toLocaleString()}원
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        className="w-8 h-8 border rounded-full flex items-center justify-center"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        className="w-8 h-8 border rounded-full flex items-center justify-center"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-gray-400 hover:text-red-500"
                      onClick={() => handleRemove(item.id)}
                    >
                      <FiTrash2 className="text-xl" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">주문 정보</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>상품 금액</span>
                  <span>{subtotal.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between">
                  <span>배송비</span>
                  <span>
                    {shippingFee === 0
                      ? '무료'
                      : `${shippingFee.toLocaleString()}원`}
                  </span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>총 주문금액</span>
                    <span>{total.toLocaleString()}원</span>
                  </div>
                </div>
                <button className="btn-primary w-full">주문하기</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart 