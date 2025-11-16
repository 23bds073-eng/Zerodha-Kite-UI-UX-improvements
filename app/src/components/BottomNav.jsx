import { useNavigate, useLocation } from 'react-router-dom';
import './BottomNav.css';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: '🏠', label: 'Home' },
    { path: '/markets', icon: '📊', label: 'Markets' },
    { path: '/trade', icon: '💰', label: 'Trade' },
    { path: '/portfolio', icon: '💼', label: 'Portfolio' },
    { path: '/more', icon: '☰', label: 'More' }
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            className={`bottom-nav-item ${isActive ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            <span className="bottom-nav-icon">{item.icon}</span>
            <span className="bottom-nav-label text-label-medium">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

