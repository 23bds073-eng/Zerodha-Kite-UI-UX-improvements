import './StockItem.css';

export default function StockItem({ stock, onClick }) {
  const isPositive = stock.change >= 0;
  const changeColor = isPositive ? 'text-positive' : 'text-negative';
  const changeIcon = isPositive ? '↑' : '↓';

  return (
    <div className="stock-item" onClick={onClick}>
      <div className="stock-item-left">
        <div className="stock-icon">
          {stock.symbol.charAt(0)}
        </div>
        <div className="stock-info">
          <div className="stock-name text-title-medium">{stock.name}</div>
          <div className="stock-symbol text-body-small text-neutral">{stock.symbol}</div>
        </div>
      </div>
      <div className="stock-item-right">
        <div className="stock-price text-title-large text-mono font-semibold">
          ₹{stock.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <div className={`stock-change ${changeColor} text-body-medium text-mono`}>
          {isPositive ? '+' : ''}₹{Math.abs(stock.change).toFixed(2)} ({isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%) {changeIcon}
        </div>
      </div>
    </div>
  );
}

