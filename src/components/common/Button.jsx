import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  fullWidth = false,
  rounded = false,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed dark:focus:ring-offset-gray-900'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary/50 dark:bg-primary/90 dark:hover:bg-primary',
    secondary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900/50 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white',
    outline: 'border-2 border-gray-200 bg-transparent text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary focus:ring-primary/50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:border-primary dark:hover:text-primary',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500/50 dark:text-gray-300 dark:hover:bg-gray-800',
    danger: 'bg-red-600 text-white hover:bg-red-500 focus:ring-red-600/50 dark:bg-red-700 dark:hover:bg-red-600',
    success: 'bg-green-600 text-white hover:bg-green-500 focus:ring-green-600/50 dark:bg-green-700 dark:hover:bg-green-600',
  }

  const sizes = {
    xs: 'px-2 py-1 text-xs sm:px-2.5 sm:py-1.5',
    sm: 'px-2.5 py-1.5 text-sm sm:px-3 sm:py-2',
    md: 'px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base',
    lg: 'px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg',
    xl: 'px-6 py-3 text-lg sm:px-8 sm:py-4 sm:text-xl',
  }

  const roundedStyles = rounded ? 'rounded-full' : 'rounded-lg'
  const widthStyles = fullWidth ? 'w-full' : ''
  const loadingStyles = loading ? 'cursor-wait' : ''

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        roundedStyles,
        widthStyles,
        loadingStyles,
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center space-x-2">
          <svg 
            className="animate-spin h-4 w-4 text-current" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span className="truncate">{children}</span>
        </span>
      ) : (
        <span className="truncate">{children}</span>
      )}
    </motion.button>
  )
})

Button.displayName = 'Button'

export default Button 