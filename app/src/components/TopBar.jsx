import { useNavigate } from 'react-router-dom';
import './TopBar.css';

export default function TopBar({ title, showBack = false, rightActions }) {
  const navigate = useNavigate();

  return (
    <header className="top-bar">
      <div className="top-bar-left">
        {showBack && (
          <button className="top-bar-back" onClick={() => navigate(-1)}>
            ←
          </button>
        )}
        <h1 className="top-bar-title text-title-medium font-semibold">{title}</h1>
      </div>
      <div className="top-bar-right">
        {rightActions || (
          <>
            <button className="top-bar-icon">🔔</button>
            <button className="top-bar-icon">👤</button>
          </>
        )}
      </div>
    </header>
  );
}

