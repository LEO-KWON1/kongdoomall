import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export const useApp = () => useContext(AppContext)

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [products, setProducts] = useState([])
  const [brands, setBrands] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // 로컬 스토리지에서 데이터 불러오기
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    const savedWishlist = localStorage.getItem('wishlist')
    
    if (savedCart) setCart(JSON.parse(savedCart))
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist))
  }, [])

  // 로컬 스토리지에 데이터 저장
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [cart, wishlist])

  // 상품 추가
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  // 상품 제거
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  // 수량 업데이트
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  // 위시리스트 추가/제거
  const toggleWishlist = (product) => {
    setWishlist(prevWishlist => {
      const isInWishlist = prevWishlist.some(item => item.id === product.id)
      if (isInWishlist) {
        return prevWishlist.filter(item => item.id !== product.id)
      }
      return [...prevWishlist, product]
    })
  }

  // 상품 가져오기
  const fetchProducts = async () => {
    try {
      setLoading(true)
      // 실제 API 호출로 대체 필요
      const mockProducts = [
        {
          id: 1,
          name: '프리미엄 콩두 티셔츠',
          price: 29000,
          image: '/products/tshirt.jpg',
          description: '부드러운 소재의 프리미엄 티셔츠',
          brand: 'KongDoo',
          category: '의류',
          stock: 100,
          rating: 4.5,
          reviews: 120
        },
        // 더 많은 상품 데이터...
      ]
      setProducts(mockProducts)
      setError(null)
    } catch (err) {
      setError('상품을 불러오는 중 오류가 발생했습니다.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // 브랜드 가져오기
  const fetchBrands = async () => {
    try {
      setLoading(true)
      // 실제 API 호출로 대체 필요
      const mockBrands = [
        {
          id: 1,
          name: 'KongDoo',
          logo: '/brands/kongdoo.jpg',
          description: '프리미엄 라이프스타일 브랜드',
          products: 50,
          followers: 10000
        },
        // 더 많은 브랜드 데이터...
      ]
      setBrands(mockBrands)
      setError(null)
    } catch (err) {
      setError('브랜드를 불러오는 중 오류가 발생했습니다.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // 초기 데이터 로드
  useEffect(() => {
    fetchProducts()
    fetchBrands()
  }, [])

  const value = {
    cart,
    wishlist,
    products,
    brands,
    loading,
    error,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleWishlist,
    fetchProducts,
    fetchBrands
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
} 