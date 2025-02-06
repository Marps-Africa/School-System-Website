const Button = ({ children, onClick, className = "", disabled = false, type = "button" }) => (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4  disabled:opacity-50 transition-colors ${className}`}
    >
      {children}
    </button>
  );
  
  export default Button;
  