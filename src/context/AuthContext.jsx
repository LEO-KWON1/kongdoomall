import { createContext, useContext, useState, useEffect } from 'react';

const API_BASE_URL = 'https://kojkhj614.dothome.co.kr/api'; // HTTPS로 변경

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 로컬 스토리지에서 사용자 정보 불러오기
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // API 요청 헬퍼 함수
  const fetchWithAuth = async (url, options = {}) => {
    const token = localStorage.getItem('token');
    const defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    if (token) {
      defaultHeaders['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${url}`, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
      credentials: 'include', // 쿠키 포함
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '요청이 실패했습니다.');
    }

    return response.json();
  };

  // 로그인
  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await fetchWithAuth('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      setUser(data.user);
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
      
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // 회원가입
  const register = async (userData) => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchWithAuth('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData),
      });

      return { success: true, data };
    } catch (error) {
      console.error('Register error:', error);
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // 로그아웃
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  // 사용자 정보 업데이트
  const updateUser = async (userData) => {
    try {
      setLoading(true);
      const data = await fetchWithAuth('/users/me', {
        method: 'PUT',
        body: JSON.stringify(userData),
      });

      setUser(data.user);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      return { success: true };
    } catch (error) {
      console.error('Update error:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // 비밀번호 변경
  const changePassword = async (currentPassword, newPassword) => {
    try {
      setLoading(true);
      await fetchWithAuth('/users/change-password', {
        method: 'POST',
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      return { success: true };
    } catch (error) {
      console.error('Password change error:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    updateUser,
    changePassword
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}; 