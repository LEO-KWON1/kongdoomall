import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Button from '../../components/common/Button'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await login(email, password)
      navigate('/')
    } catch (err) {
      setError('이메일 또는 비밀번호가 올바르지 않습니다.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-kong-gray-900">
            KONGDOOMALL에 오신 것을 환영합니다
          </h2>
          <p className="mt-2 text-center text-sm text-kong-gray-600">
            또는{' '}
            <Link to="/register" className="font-medium text-kong-gold hover:text-kong-gold-dark">
              회원가입
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
              <label htmlFor="email" className="sr-only">
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-kong-gray-300 placeholder-kong-gray-500 text-kong-gray-900 rounded-t-md focus:outline-none focus:ring-kong-gold focus:border-kong-gold focus:z-10 sm:text-sm"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-kong-gray-300 placeholder-kong-gray-500 text-kong-gray-900 rounded-b-md focus:outline-none focus:ring-kong-gold focus:border-kong-gold focus:z-10 sm:text-sm"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-kong-gold focus:ring-kong-gold border-kong-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-kong-gray-900">
                로그인 상태 유지
              </label>
            </div>

            <div className="text-sm text-center">
              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                비밀번호를 잊으셨나요?
              </button>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              variant="primary"
              className="w-full"
              loading={loading}
            >
              로그인
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login 