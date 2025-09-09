import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../../context/ThemeContext';
import './CodeBlock.css';

export default function CodeBlock({ children, language = 'python', showLineNumbers = true }) {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="code-block-container">
      <div className="code-block-header">
        <span className="code-language">{language.toUpperCase()}</span>
        <button 
          className="copy-button"
          onClick={() => navigator.clipboard.writeText(children)}
          title="Copy code"
        >
          📋
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={isDarkMode ? tomorrow : coy}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          borderRadius: '0 0 8px 8px',
          fontSize: '0.9rem',
          background: isDarkMode ? '#2d3748' : '#f7fafc'
        }}
        lineNumberStyle={{
          color: isDarkMode ? '#68d391' : '#a0aec0',
          fontSize: '0.8rem'
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}