export function AppHeader() {
  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: 'blur(8px)',
        background: 'rgba(255, 255, 255, 0.7)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.7)',
        transition: 'all 0.3s ease'
      }}
      className="app-header"
    >
      <div 
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '0 20px',
          height: '56px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <h1 
          style={{
            fontWeight: 900,
            letterSpacing: '-0.05em',
            color: '#1e293b',
            fontSize: 'clamp(24px, 5vw, 42px)',
            margin: 0,
            transition: 'all 0.3s ease',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            background: 'linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Welcome to Jacode-Blog
        </h1>
      </div>
    </header>
  );
}

export function ThemeToggle({ theme, onToggle }) {
  const isLight = theme === 'light';
  
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle theme"
      style={{
        position: 'fixed',
        right: '16px',
        top: '12px',
        zIndex: 60,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        borderRadius: '50px', /* 원형 → pill */
        border: '1px solid rgba(226, 232, 240, 0.7)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '0.5rem 1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontSize: '0.95rem',
        fontWeight: 600
      }}
      className="theme-toggle-btn"
      onMouseEnter={(e) => {
        if (isLight) {
          e.currentTarget.style.animation = 'spin-slow 0.9s linear';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.animation = '';
      }}
    >
      {isLight ? (
        <>
          <span style={{ fontSize: '20px' }}>☀️</span>
          <span>DAY</span>
        </>
      ) : (
        <>
          <span style={{ fontSize: '20px', animation: 'spin-slow 2s linear infinite' }}>🌙</span>
          <span>Night</span>
        </>
      )}
    </button>
  );
}
