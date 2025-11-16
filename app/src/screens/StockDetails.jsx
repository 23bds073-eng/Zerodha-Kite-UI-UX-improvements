import { useParams, useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import Button from '../components/Button';
import { stocks } from '../data/mockData';
import './StockDetails.css';

export default function StockDetails() {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const stock = stocks[symbol];

  if (!stock) {
    return (
      <div className="screen">
        <TopBar title="Stock Not Found" showBack />
        <div className="screen-content">
          <p>Stock not found</p>
        </div>
      </div>
    );
  }

  const isPositive = stock.change >= 0;

  return (
    <div className="screen">
      <TopBar 
        title={symbol} 
        showBack 
        rightActions={
          <>
            <button className="top-bar-icon">⭐</button>
            <button className="top-bar-icon">📤</button>
          </>
        }
      />
      <div className="screen-content">
        {/* Price Section */}
        <div className="price-section">
          <div className="price-value text-display-medium text-mono font-semibold">
            ₹{stock.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className={`price-change ${isPositive ? 'text-positive' : 'text-negative'} text-title-large text-mono`}>
            {isPositive ? '+' : ''}₹{Math.abs(stock.change).toFixed(2)} ({isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%) {isPositive ? '↑' : '↓'}
          </div>
        </div>

        {/* Chart Container */}
        <Card className="chart-container">
          <div className="chart-placeholder">
            <div className="chart-text text-body-medium text-neutral">Chart Visualization</div>
            <div className="chart-subtext text-body-small text-neutral">Price chart would appear here</div>
          </div>
        </Card>

        {/* Timeframe Selector */}
        <div className="timeframe-selector">
          {['1D', '1W', '1M', '3M', '1Y', 'All'].map((tf) => (
            <button key={tf} className={`timeframe-btn ${tf === '1D' ? 'active' : ''}`}>
              {tf}
            </button>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="metrics-grid">
          <Card className="metric-card">
            <div className="metric-label text-label-small text-neutral">Open</div>
            <div className="metric-value text-title-medium text-mono font-semibold">
              ₹{stock.open.toFixed(2)}
            </div>
          </Card>
          <Card className="metric-card">
            <div className="metric-label text-label-small text-neutral">High</div>
            <div className="metric-value text-title-medium text-mono font-semibold text-positive">
              ₹{stock.high.toFixed(2)}
            </div>
          </Card>
          <Card className="metric-card">
            <div className="metric-label text-label-small text-neutral">Low</div>
            <div className="metric-value text-title-medium text-mono font-semibold text-negative">
              ₹{stock.low.toFixed(2)}
            </div>
          </Card>
          <Card className="metric-card">
            <div className="metric-label text-label-small text-neutral">Volume</div>
            <div className="metric-value text-title-medium text-mono font-semibold">
              {(stock.volume / 1000000).toFixed(1)}M
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <Button variant="primary" size="large" fullWidth onClick={() => navigate(`/trade?action=buy&symbol=${symbol}`)}>
            Buy
          </Button>
          <Button variant="secondary" size="large" fullWidth onClick={() => navigate(`/trade?action=sell&symbol=${symbol}`)}>
            Sell
          </Button>
        </div>

        {/* Stock Info */}
        <Card className="stock-info">
          <h3 className="info-title text-title-medium font-semibold">Overview</h3>
          <div className="info-row">
            <span className="info-label text-body-medium text-neutral">Market Cap</span>
            <span className="info-value text-body-medium font-semibold">₹{(stock.marketCap / 100000).toFixed(0)}L Cr</span>
          </div>
          <div className="info-row">
            <span className="info-label text-body-medium text-neutral">P/E Ratio</span>
            <span className="info-value text-body-medium font-semibold">{stock.peRatio}</span>
          </div>
          <div className="info-row">
            <span className="info-label text-body-medium text-neutral">Dividend Yield</span>
            <span className="info-value text-body-medium font-semibold">{stock.dividendYield}%</span>
          </div>
        </Card>
      </div>
    </div>
  );
}

