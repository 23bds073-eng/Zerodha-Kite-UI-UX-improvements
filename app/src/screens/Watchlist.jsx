import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import StockItem from '../components/StockItem';
import { watchlist } from '../data/mockData';
import './Watchlist.css';

export default function Watchlist() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <TopBar 
        title="My Watchlist" 
        showBack
        rightActions={
          <>
            <button className="top-bar-icon">🔍</button>
            <button className="top-bar-icon">+</button>
          </>
        }
      />
      <div className="screen-content">
        {/* Filter Tabs */}
        <div className="filter-tabs">
          {['All', 'Stocks', 'ETFs', 'MF'].map((tab) => (
            <button key={tab} className={`filter-tab ${tab === 'All' ? 'active' : ''}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Watchlist Items */}
        <div className="watchlist-list">
          {watchlist.map((stock) => (
            <StockItem
              key={stock.symbol}
              stock={stock}
              onClick={() => navigate(`/stock/${stock.symbol}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

