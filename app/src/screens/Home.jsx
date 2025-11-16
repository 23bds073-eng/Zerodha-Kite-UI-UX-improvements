import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import StockItem from '../components/StockItem';
import Button from '../components/Button';
import { portfolio, watchlist } from '../data/mockData';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();
  const isPositive = portfolio.dayChange >= 0;

  return (
    <div className="screen">
      <TopBar title="Zerodha Kite" />
      <div className="screen-content">
        {/* Portfolio Summary */}
        <Card variant="elevated" padding="xl" className="portfolio-card">
          <div className="portfolio-label text-body-medium text-neutral">Portfolio Value</div>
          <div className="portfolio-value text-display-small text-mono font-semibold">
            ₹{portfolio.totalValue.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className={`portfolio-change ${isPositive ? 'text-positive' : 'text-negative'} text-title-large text-mono`}>
            {isPositive ? '+' : ''}₹{Math.abs(portfolio.dayChange).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} 
            ({isPositive ? '+' : ''}{portfolio.dayChangePercent.toFixed(2)}%) {isPositive ? '↑' : '↓'}
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="stats-row">
          <Card className="stat-card">
            <div className="stat-label text-body-small text-neutral">Funds</div>
            <div className="stat-value text-title-medium text-mono font-semibold">
              ₹{portfolio.funds.toLocaleString('en-IN')}
            </div>
          </Card>
          <Card className="stat-card">
            <div className="stat-label text-body-small text-neutral">P&L</div>
            <div className="stat-value text-title-medium text-mono font-semibold text-positive">
              +₹{portfolio.pnl.toLocaleString('en-IN')}
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <Button variant="primary" fullWidth onClick={() => navigate('/trade?action=buy')}>
            Buy
          </Button>
          <Button variant="secondary" fullWidth onClick={() => navigate('/trade?action=sell')}>
            Sell
          </Button>
          <Button variant="tertiary" fullWidth onClick={() => navigate('/funds')}>
            Add Funds
          </Button>
        </div>

        {/* Watchlist */}
        <div className="section">
          <div className="section-header">
            <h2 className="section-title text-title-medium font-semibold">Watchlist</h2>
            <button className="section-link text-body-medium" onClick={() => navigate('/watchlist')}>
              View All
            </button>
          </div>
          <div className="watchlist-items">
            {watchlist.slice(0, 3).map((stock) => (
              <StockItem
                key={stock.symbol}
                stock={stock}
                onClick={() => navigate(`/stock/${stock.symbol}`)}
              />
            ))}
          </div>
        </div>

        {/* Market Overview */}
        <div className="section">
          <h2 className="section-title text-title-medium font-semibold">Market Overview</h2>
          <Card className="market-index">
            <div className="index-name text-title-medium">NIFTY 50</div>
            <div className="index-value text-title-large text-mono font-semibold">18,500.00</div>
            <div className="index-change text-body-medium text-positive">+150.00 (+0.82%) ↑</div>
          </Card>
          <Card className="market-index">
            <div className="index-name text-title-medium">SENSEX</div>
            <div className="index-value text-title-large text-mono font-semibold">62,000.00</div>
            <div className="index-change text-body-medium text-positive">+420.00 (+0.68%) ↑</div>
          </Card>
        </div>
      </div>
    </div>
  );
}

