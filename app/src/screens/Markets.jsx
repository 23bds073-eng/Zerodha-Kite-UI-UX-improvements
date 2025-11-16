import TopBar from '../components/TopBar';
import Card from '../components/Card';
import './Markets.css';

export default function Markets() {
  return (
    <div className="screen">
      <TopBar title="Markets" />
      <div className="screen-content">
        <h2 className="section-title text-title-medium font-semibold">Indices</h2>
        <Card className="index-card">
          <div className="index-name text-title-medium">NIFTY 50</div>
          <div className="index-value text-title-large text-mono font-semibold">18,500.00</div>
          <div className="index-change text-body-medium text-positive">+150.00 (+0.82%) ↑</div>
        </Card>
        <Card className="index-card">
          <div className="index-name text-title-medium">SENSEX</div>
          <div className="index-value text-title-large text-mono font-semibold">62,000.00</div>
          <div className="index-change text-body-medium text-positive">+420.00 (+0.68%) ↑</div>
        </Card>

        <h2 className="section-title text-title-medium font-semibold" style={{ marginTop: '24px' }}>Top Gainers</h2>
        <Card className="stock-list-item">
          <div className="stock-list-name text-title-medium">INFY</div>
          <div className="stock-list-price text-title-large text-mono font-semibold">₹1,800</div>
          <div className="stock-list-change text-body-medium text-positive">+2.10%</div>
        </Card>
        <Card className="stock-list-item">
          <div className="stock-list-name text-title-medium">RELIANCE</div>
          <div className="stock-list-price text-title-large text-mono font-semibold">₹2,450</div>
          <div className="stock-list-change text-body-medium text-positive">+1.20%</div>
        </Card>

        <h2 className="section-title text-title-medium font-semibold" style={{ marginTop: '24px' }}>Top Losers</h2>
        <Card className="stock-list-item">
          <div className="stock-list-name text-title-medium">TCS</div>
          <div className="stock-list-price text-title-large text-mono font-semibold">₹3,200</div>
          <div className="stock-list-change text-body-medium text-negative">-0.50%</div>
        </Card>
      </div>
    </div>
  );
}

