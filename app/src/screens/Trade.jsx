import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { stocks } from '../data/mockData';
import './Trade.css';

export default function Trade() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const action = searchParams.get('action') || 'buy';
  const symbol = searchParams.get('symbol') || 'RELIANCE';
  const stock = stocks[symbol] || stocks['RELIANCE'];

  const [orderType, setOrderType] = useState('Market');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const estimatedAmount = quantity ? (parseFloat(quantity) * (price || stock.price)) : 0;
  const showPriceInput = orderType !== 'Market';

  const handleReview = () => {
    navigate('/trade/review', {
      state: {
        action,
        symbol,
        orderType,
        quantity: parseInt(quantity),
        price: price ? parseFloat(price) : stock.price,
        estimatedAmount
      }
    });
  };

  return (
    <div className="screen">
      <TopBar title={`${action === 'buy' ? 'Buy' : 'Sell'} ${symbol}`} showBack />
      <div className="screen-content">
        {/* Current Price */}
        <Card className="current-price-card">
          <div className="current-price-label text-body-medium text-neutral">Current Price</div>
          <div className="current-price-value text-display-small text-mono font-semibold">
            ₹{stock.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </Card>

        {/* Order Type Selection */}
        <div className="order-type-section">
          <h3 className="section-title text-title-medium font-semibold">Order Type</h3>
          {['Market', 'Limit', 'Stop Loss'].map((type) => (
            <Card
              key={type}
              className={`order-type-card ${orderType === type ? 'selected' : ''}`}
              onClick={() => setOrderType(type)}
            >
              <div className="order-type-content">
                <div>
                  <div className="order-type-name text-title-medium font-semibold">
                    {orderType === type && '● '}{type}
                  </div>
                  <div className="order-type-desc text-body-small text-neutral">
                    {type === 'Market' && 'Execute at market price'}
                    {type === 'Limit' && 'Set your price'}
                    {type === 'Stop Loss' && 'Trigger at price'}
                  </div>
                </div>
                <div className="radio-indicator">
                  {orderType === type && <div className="radio-dot"></div>}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quantity Input */}
        <Input
          label="Quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          suffix="Shares"
          placeholder="Enter quantity"
        />

        {/* Price Input (Conditional) */}
        {showPriceInput && (
          <Input
            label="Price per Share"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            prefix="₹"
            placeholder="Enter price"
          />
        )}

        {/* Estimated Amount */}
        {quantity && (
          <Card className="estimated-amount-card">
            <div className="estimated-label text-body-medium">Estimated Amount</div>
            <div className="estimated-value text-title-large text-mono font-semibold">
              ₹{estimatedAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </Card>
        )}

        {/* Review Button */}
        <Button
          variant="primary"
          size="large"
          fullWidth
          onClick={handleReview}
          disabled={!quantity || (showPriceInput && !price)}
        >
          Review Order
        </Button>
      </div>
    </div>
  );
}

