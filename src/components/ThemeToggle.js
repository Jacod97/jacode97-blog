import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
      style={{
        position: 'fixed',
        top: '1rem',
        right: '2rem',
        zIndex: 101,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '0.5rem',
        borderRadius: '50%',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        boxShadow: isDarkMode 
          ? '0 4px 16px rgba(255,255,255,0.1)' 
          : '0 4px 16px rgba(0,0,0,0.1)',
        transform: 'scale(1)',
        '&:hover': {
          transform: 'scale(1.1)'
        }
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.boxShadow = isDarkMode 
          ? '0 8px 24px rgba(255,255,255,0.2)' 
          : '0 8px 24px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = isDarkMode 
          ? '0 4px 16px rgba(255,255,255,0.1)' 
          : '0 4px 16px rgba(0,0,0,0.1)';
      }}
    >
      {isDarkMode ? (
        // 오렌지 태양
        <svg width="40" height="40" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 2px 4px rgba(255,165,0,0.3))' }}>
          <circle cx="12" cy="12" r="4" fill="#FF8C00" />
          <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" 
                stroke="#FF8C00" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ) : (
        // 초승달
        <svg width="40" height="40" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 2px 4px rgba(100,100,255,0.3))' }}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#6464FF" />
          <circle cx="16" cy="8" r="0.5" fill="#E0E0FF" opacity="0.8" />
          <circle cx="18" cy="10" r="0.3" fill="#E0E0FF" opacity="0.6" />
        </svg>
      )}
    </button>
  );
}