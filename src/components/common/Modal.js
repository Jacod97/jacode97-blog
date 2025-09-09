import { useTheme } from '../../context/ThemeContext';
import './Modal.css';

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  maxWidth = '800px', 
  showCloseX = true, 
  showCloseButton = true 
}) {
  const { isDarkMode } = useTheme();

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div
      className={`modal-backdrop ${isDarkMode ? 'dark' : 'light'}`}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div
        className="modal-content"
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with title and X button */}
        {(title || showCloseX) && (
          <div className="modal-header">
            {title && <h2 className="modal-title">{title}</h2>}
            {showCloseX && (
              <button
                type="button"
                onClick={onClose}
                className="modal-close-x"
                aria-label="Close modal"
              >
                ✖
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="modal-body">
          {children}
        </div>

        {/* Footer with Close button */}
        {showCloseButton && (
          <div className="modal-footer">
            <button
              type="button"
              onClick={onClose}
              className="modal-close-button"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}