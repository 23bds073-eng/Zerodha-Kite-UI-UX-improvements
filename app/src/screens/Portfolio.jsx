import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import { holdings } from '../data/mockData';
import './Portfolio.css';

export default function Portfolio() {
  const navigate = useNavigate();
  const totalValue = holdings.reduce((sum, h) => sum + h.value, 0);
  const totalPnl = holdings.reduce((sum, h) => sum + h.pnl, 0);
  const totalPnlPercent = (totalPnl / (totalValue - totalPnl)) * 100;

  return (
    <div className="screen">
      <TopBar title="Portfolio" />
      <div className="screen-content">
        {/* Portfolio Summary */}
        <Card variant="elevated" padding="xl" className="portfolio-summary">
          <div className="summary-label text-body-medium text-neutral">Total Value</div>
          <div className="summary-value text-display-small text-mono font-semibold">
            ₹{totalValue.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className={`summary-pnl ${totalPnl >= 0 ? 'text-positive' : 'text-negative'} text-title-large text-mono`}>
            {totalPnl >= 0 ? '+' : ''}₹{Math.abs(totalPnl).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} 
            ({totalPnl >= 0 ? '+' : ''}{totalPnlPercent.toFixed(2)}%)
          </div>
        </Card>

        {/* Holdings List */}
        <div className="holdings-section">
          <h2 className="section-title text-title-medium font-semibold">Holdings</h2>
          <div className="holdings-list">
            {holdings.map((holding) => {
              const isPositive = holding.pnl >= 0;
              return (
                <Card
                  key={holding.symbol}
                  className="holding-card"
                  onClick={() => navigate(`/stock/${holding.symbol}`)}
                >
                  <div className="holding-header">
                    <div>
                      <div className="holding-name text-title-medium font-semibold">{holding.symbol}</div>
                      <div className="holding-quantity text-body-small text-neutral">
                        {holding.quantity} shares
                      </div>
                    </div>
                    <div className="holding-value text-title-large text-mono font-semibold">
                      ₹{holding.value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                  </div>
                  <div className="holding-details">
                    <div className="holding-price">
                      <span className="text-body-small text-neutral">Avg: </span>
                      <span className="text-body-medium">₹{holding.avgPrice.toFixed(2)}</span>
                      <span className="text-body-small text-neutral"> | Current: </span>
                      <span className="text-body-medium">₹{holding.currentPrice.toFixed(2)}</span>
                    </div>
                    <div className={`holding-pnl ${isPositive ? 'text-positive' : 'text-negative'} text-body-medium font-semibold`}>
                      {isPositive ? '+' : ''}₹{Math.abs(holding.pnl).toFixed(2)} ({isPositive ? '+' : ''}{holding.pnlPercent.toFixed(2)}%)
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

