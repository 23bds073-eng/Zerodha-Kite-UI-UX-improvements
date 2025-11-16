export const portfolio = {
  totalValue: 125000,
  dayChange: 2500,
  dayChangePercent: 2.04,
  funds: 50000,
  pnl: 5000
};

export const watchlist = [
  {
    symbol: 'RELIANCE',
    name: 'Reliance Industries',
    price: 2450.00,
    change: 29.00,
    changePercent: 1.20
  },
  {
    symbol: 'TCS',
    name: 'Tata Consultancy Services',
    price: 3200.00,
    change: -16.00,
    changePercent: -0.50
  },
  {
    symbol: 'INFY',
    name: 'Infosys',
    price: 1800.00,
    change: 37.00,
    changePercent: 2.10
  },
  {
    symbol: 'HDFCBANK',
    name: 'HDFC Bank',
    price: 1650.00,
    change: 8.00,
    changePercent: 0.49
  }
];

export const stocks = {
  'RELIANCE': {
    symbol: 'RELIANCE',
    name: 'Reliance Industries Ltd',
    price: 2450.00,
    change: 29.00,
    changePercent: 1.20,
    open: 2430.00,
    high: 2455.00,
    low: 2420.00,
    volume: 2500000,
    marketCap: 16500000,
    peRatio: 28.5,
    dividendYield: 0.8
  },
  'TCS': {
    symbol: 'TCS',
    name: 'Tata Consultancy Services',
    price: 3200.00,
    change: -16.00,
    changePercent: -0.50,
    open: 3210.00,
    high: 3215.00,
    low: 3195.00,
    volume: 1800000,
    marketCap: 12000000,
    peRatio: 32.0,
    dividendYield: 1.2
  },
  'INFY': {
    symbol: 'INFY',
    name: 'Infosys Ltd',
    price: 1800.00,
    change: 37.00,
    changePercent: 2.10,
    open: 1765.00,
    high: 1805.00,
    low: 1760.00,
    volume: 2200000,
    marketCap: 7500000,
    peRatio: 26.5,
    dividendYield: 1.0
  }
};

export const orders = [
  {
    id: 1,
    symbol: 'RELIANCE',
    action: 'Buy',
    type: 'Market',
    quantity: 10,
    price: 2450.00,
    status: 'Pending',
    timestamp: new Date()
  },
  {
    id: 2,
    symbol: 'TCS',
    action: 'Buy',
    type: 'Market',
    quantity: 5,
    price: 3200.00,
    status: 'Executed',
    timestamp: new Date(Date.now() - 3600000)
  }
];

export const positions = [
  {
    symbol: 'RELIANCE',
    quantity: 10,
    avgPrice: 2400.00,
    ltp: 2450.00,
    pnl: 500.00,
    pnlPercent: 2.08
  },
  {
    symbol: 'TCS',
    quantity: 5,
    avgPrice: 3100.00,
    ltp: 3200.00,
    pnl: 500.00,
    pnlPercent: 3.23
  }
];

export const holdings = [
  {
    symbol: 'RELIANCE',
    quantity: 10,
    avgPrice: 2400.00,
    currentPrice: 2450.00,
    value: 24500.00,
    pnl: 500.00,
    pnlPercent: 2.08
  },
  {
    symbol: 'TCS',
    quantity: 5,
    avgPrice: 3100.00,
    currentPrice: 3200.00,
    value: 16000.00,
    pnl: 500.00,
    pnlPercent: 3.23
  }
];

