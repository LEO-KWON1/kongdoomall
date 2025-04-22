const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center px-4 py-2 rounded-lg transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button 