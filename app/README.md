# Zerodha Kite App - React Implementation

A modern, responsive trading app built with React, implementing the complete UI/UX design system and wireframes.

## Features

- ✅ Complete design system implementation (colors, typography, spacing)
- ✅ Reusable UI components (Button, Card, Input, StockItem, etc.)
- ✅ Home Dashboard with portfolio summary and watchlist
- ✅ Stock Details page with metrics and chart placeholder
- ✅ Trading flow (Buy/Sell order placement)
- ✅ Portfolio and Holdings view
- ✅ Markets overview
- ✅ Watchlist management
- ✅ Bottom navigation
- ✅ Responsive mobile-first design

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open http://localhost:3000 in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
app/
├── src/
│   ├── components/      # Reusable UI components
│   ├── screens/         # Screen components
│   ├── styles/          # Global styles and design system
│   ├── data/            # Mock data
│   ├── App.jsx          # Main app component with routing
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── package.json
└── vite.config.js
```

## Design System

The app follows the complete design system from the documentation:
- Color palette (Primary, Semantic, Neutral, Market colors)
- Typography scale (Display, Headline, Title, Body, Label)
- Spacing system (4px base unit)
- Component variants (Button, Card, Input, etc.)
- Shadows and elevations

## Screens Implemented

1. **Home** - Dashboard with portfolio, quick actions, watchlist, market overview
2. **Markets** - Market indices, top gainers/losers
3. **Trade** - Buy/Sell order placement with order type selection
4. **Portfolio** - Holdings view with P&L
5. **Watchlist** - Stock watchlist with filters
6. **Stock Details** - Individual stock page with price, chart, metrics
7. **More** - Settings and profile

## Technologies Used

- React 18
- React Router DOM
- Vite
- CSS (Design System with CSS Variables)

## Notes

- This is a frontend-only implementation with mock data
- Chart visualization is a placeholder (can be integrated with libraries like Chart.js or TradingView)
- Order placement flow goes to review screen (can be extended with confirmation and execution)
- All styling follows the design system specifications

