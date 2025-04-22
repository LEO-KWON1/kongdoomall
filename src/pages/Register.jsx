import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // 유효성 검사
    if (formData.password !== formData.confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.')
      setLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError('비밀번호는 6자 이상이어야 합니다.')
      setLoading(false)
      return
    }

    try {
      const result = await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        address: formData.address,
      })

      if (result.success) {
        navigate('/login', { state: { message: '회원가입이 완료되었습니다. 로그인해주세요.' } })
      } else {
        setError(result.error || '회원가입에 실패했습니다.')
      }
    } catch (err) {
      setError('회원가입 중 오류가 발생했습니다.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-kong-gray-900">
              회원가입
            </h2>
            <p className="mt-2 text-center text-sm text-kong-gray-600">
              이미 계정이 있으신가요?{' '}
              <Link to="/login" className="font-medium text-kong-gold hover:text-kong-gold-dark">
                로그인
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 text-red-500 p-4 rounded-md text-sm">
                {error}
              </div>
            )}
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  이름
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-kong-gray-300 placeholder-kong-gray-500 text-kong-gray-900 rounded-t-md focus:outline-none focus:ring-kong-gold focus:border-kong-gold focus:z-10 sm:text-sm"
                  placeholder="이름"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  이메일
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-kong-gray-300 placeholder-kong-gray-500 text-kong-gray-900 focus:outline-none focus:ring-kong-gold focus:border-kong-gold focus:z-10 sm:text-sm"
                  placeholder="이메일"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  비밀번호
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-kong-gray-300 placeholder-kong-gray-500 text-kong-gray-900 focus:outline-none focus:ring-kong-gold focus:border-kong-gold focus:z-10 sm:text-sm"
                  placeholder="비밀번호"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="sr-only">
                  비밀번호 확인
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-kong-gray-300 placeholder-kong-gray-500 text-kong-gray-900 focus:outline-none focus:ring-kong-gold focus:border-kong-gold focus:z-10 sm:text-sm"
                  placeholder="비밀번호 확인"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  전화번호
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-kong-gray-300 placeholder-kong-gray-500 text-kong-gray-900 focus:outline-none focus:ring-kong-gold focus:border-kong-gold focus:z-10 sm:text-sm"
                  placeholder="전화번호"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="address" className="sr-only">
                  주소
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-kong-gray-300 placeholder-kong-gray-500 text-kong-gray-900 rounded-b-md focus:outline-none focus:ring-kong-gold focus:border-kong-gold focus:z-10 sm:text-sm"
                  placeholder="주소"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                variant="primary"
                className="w-full"
                loading={loading}
              >
                회원가입
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register 