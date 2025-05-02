export default function Button({
  type = 'button',
  disabled = false,
  className = '',
  onClick,
  children,
}) {
  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={!!disabled}
      className={`cursor-pointer rounded-4xl border border-black p-2 transition-colors duration-300 lg:hover:border-blue-500 ${className}`}
    >
      {children}
    </button>
  );
}
