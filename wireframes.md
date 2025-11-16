# Zerodha Kite Redesign - Wireframes & Screen Specifications

## Overview

Complete wireframe specifications for all screens in the redesigned Zerodha Kite app, including both low-fidelity and high-fidelity descriptions.

---

## 1. Low-Fidelity Wireframes

### Screen 1: Login

#### Layout Structure
```
┌─────────────────────────────────┐
│         [Logo/Icon]             │
│      Zerodha Kite               │
│                                 │
│  ┌─────────────────────────┐   │
│  │  User ID / Email        │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │  Password               │   │
│  │  [Show/Hide]            │   │
│  └─────────────────────────┘   │
│                                 │
│  [ ] Remember me                │
│                                 │
│  ┌─────────────────────────┐   │
│  │      LOGIN              │   │
│  └─────────────────────────┘   │
│                                 │
│      Forgot Password?           │
│                                 │
│      New to Zerodha? Sign Up    │
└─────────────────────────────────┘
```

#### Key Elements
- Centered logo/branding
- Two input fields (User ID, Password)
- Remember me checkbox
- Primary login button
- Secondary links (Forgot password, Sign up)

---

### Screen 2: Onboarding - Welcome

#### Layout Structure
```
┌─────────────────────────────────┐
│                            [Skip]│
│                                 │
│         [Illustration]          │
│                                 │
│    Welcome to Zerodha Kite      │
│                                 │
│  Start your trading journey     │
│  with India's #1 broker         │
│                                 │
│                                 │
│  ┌─────────────────────────┐   │
│  │    Get Started          │   │
│  └─────────────────────────┘   │
│                                 │
│         [● ○ ○ ○]               │
└─────────────────────────────────┘
```

#### Key Elements
- Skip option (top right)
- Large illustration
- Headline and description
- Primary CTA button
- Progress indicator

---

### Screen 3: Onboarding - Investment Goals

#### Layout Structure
```
┌─────────────────────────────────┐
│                            [Back]│
│                                 │
│    What's your primary goal?    │
│                                 │
│  ┌─────────────────────────┐   │
│  │  💰  Wealth Building    │   │
│  │  Long-term growth       │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │  📈  Active Trading     │   │
│  │  Daily market activity  │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │  🎯  Learn & Explore    │   │
│  │  Understanding markets  │   │
│  └─────────────────────────┘   │
│                                 │
│         [● ● ○ ○]               │
└─────────────────────────────────┘
```

#### Key Elements
- Back button
- Question prompt
- Multiple choice cards (selectable)
- Progress indicator

---

### Screen 4: Onboarding - Experience Level

#### Layout Structure
```
┌─────────────────────────────────┐
│                            [Back]│
│                                 │
│    How would you describe       │
│    your trading experience?     │
│                                 │
│  ┌─────────────────────────┐   │
│  │  🌱  Beginner           │   │
│  │  New to stock trading   │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │  🌿  Intermediate       │   │
│  │  Some trading experience│   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │  🌳  Advanced           │   │
│  │  Experienced trader     │   │
│  └─────────────────────────┘   │
│                                 │
│         [● ● ● ○]               │
└─────────────────────────────────┘
```

---

### Screen 5: Home Dashboard

#### Layout Structure
```
┌─────────────────────────────────┐
│  [☰]  Zerodha Kite      [🔔][👤]│
├─────────────────────────────────┤
│                                 │
│  Portfolio Value                │
│  ₹1,25,000.00                   │
│  +₹2,500.00 (+2.04%)  📈        │
│                                 │
│  ┌──────────┬──────────┐       │
│  │  Funds   │  P&L     │       │
│  │  ₹50,000 │  +₹5,000 │       │
│  └──────────┴──────────┘       │
│                                 │
│  Quick Actions                   │
│  [Buy] [Sell] [Add Funds]       │
│                                 │
│  Watchlist                      │
│  ┌─────────────────────────┐   │
│  │ RELIANCE  ₹2,450  +1.2% │   │
│  │ TCS      ₹3,200  -0.5%  │   │
│  │ INFY     ₹1,800  +2.1%  │   │
│  └─────────────────────────┘   │
│                                 │
│  Market Overview                │
│  Nifty: 18,500  +0.8%           │
│  Sensex: 62,000  +0.7%          │
│                                 │
├─────────────────────────────────┤
│ [🏠] [📊] [💰] [💼] [☰]        │
└─────────────────────────────────┘
```

#### Key Elements
- Top navigation bar (menu, notifications, profile)
- Portfolio summary card (large, prominent)
- Quick stats (Funds, P&L)
- Quick action buttons
- Watchlist preview
- Market overview
- Bottom navigation bar

---

### Screen 6: Watchlist

#### Layout Structure
```
┌─────────────────────────────────┐
│  [←]  My Watchlist      [🔍][+ ]│
├─────────────────────────────────┤
│                                 │
│  [All] [Stocks] [ETFs] [MF]     │
│                                 │
│  ┌─────────────────────────┐   │
│  │ RELIANCE                │   │
│  │ ₹2,450.00  +₹29.00      │   │
│  │ +1.20%  📈              │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ TCS                     │   │
│  │ ₹3,200.00  -₹16.00      │   │
│  │ -0.50%  📉              │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ INFOSYS                 │   │
│  │ ₹1,800.00  +₹37.00      │   │
│  │ +2.10%  📈              │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ HDFC BANK               │   │
│  │ ₹1,650.00  +₹8.00       │   │
│  │ +0.49%  📈              │   │
│  └─────────────────────────┘   │
│                                 │
├─────────────────────────────────┤
│ [🏠] [📊] [💰] [💼] [☰]        │
└─────────────────────────────────┘
```

#### Key Elements
- Header with back button, title, search, add
- Filter tabs (All, Stocks, ETFs, Mutual Funds)
- Stock list items (name, price, change, percentage)
- Swipe actions (Buy, Remove from watchlist)
- Bottom navigation

---

### Screen 7: Search Stocks

#### Layout Structure
```
┌─────────────────────────────────┐
│  [←]  Search            [Filter]│
├─────────────────────────────────┤
│  ┌─────────────────────────┐   │
│  │ 🔍  Search stocks...    │   │
│  └─────────────────────────┘   │
├─────────────────────────────────┤
│                                 │
│  Recent Searches                │
│  [RELIANCE] [TCS] [INFY]        │
│                                 │
│  Popular Stocks                 │
│  ┌─────────────────────────┐   │
│  │ RELIANCE  ₹2,450  +1.2% │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │ TCS      ₹3,200  -0.5%  │   │
│  └─────────────────────────┘   │
│                                 │
│  Search Results (when typing)   │
│  ┌─────────────────────────┐   │
│  │ RELIANCE IND LTD        │   │
│  │ NSE: RELIANCE           │   │
│  │ ₹2,450.00  +1.20%       │   │
│  └─────────────────────────┘   │
│                                 │
└─────────────────────────────────┘
```

#### Key Elements
- Search input (prominent, at top)
- Recent searches (chips)
- Popular stocks section
- Search results (when typing)
- Filter option

---

### Screen 8: Stock Details Page

#### Layout Structure
```
┌─────────────────────────────────┐
│  [←]  RELIANCE          [⭐][📤]│
├─────────────────────────────────┤
│                                 │
│  ₹2,450.00                      │
│  +₹29.00 (+1.20%)  📈           │
│                                 │
│  ┌─────────────────────────┐   │
│  │      [Chart Area]       │   │
│  │                         │   │
│  │  1D  1W  1M  3M  1Y  All│   │
│  └─────────────────────────┘   │
│                                 │
│  ┌──────┬──────┬──────┬──────┐ │
│  │ Open │ High │ Low  │ Vol  │ │
│  │ 2430 │ 2455 │ 2420 │ 2.5M │ │
│  └──────┴──────┴──────┴──────┘ │
│                                 │
│  [Buy]  [Sell]                  │
│                                 │
│  Overview                       │
│  Market Cap: ₹16.5L Cr          │
│  P/E Ratio: 28.5                │
│  Dividend Yield: 0.8%           │
│                                 │
│  [Overview] [Chart] [News]      │
│                                 │
└─────────────────────────────────┘
```

#### Key Elements
- Stock name and symbol
- Current price (large, prominent)
- Price change (with color coding)
- Interactive chart
- Timeframe selector
- Key metrics (Open, High, Low, Volume)
- Action buttons (Buy, Sell)
- Tab navigation (Overview, Chart, News)
- Watchlist toggle, share button

---

### Screen 9: Full Chart Screen

#### Layout Structure
```
┌─────────────────────────────────┐
│  [←]  RELIANCE                  │
├─────────────────────────────────┤
│                                 │
│  ₹2,450.00  +1.20%              │
│                                 │
│  ┌─────────────────────────┐   │
│  │                         │   │
│  │                         │   │
│  │    [Full Chart View]    │   │
│  │                         │   │
│  │                         │   │
│  └─────────────────────────┘   │
│                                 │
│  [1D] [1W] [1M] [3M] [1Y] [All] │
│                                 │
│  Indicators: [MA] [RSI] [MACD]  │
│                                 │
│  Tools: [📏] [✏️] [📊]          │
│                                 │
│  Volume                         │
│  ┌─────────────────────────┐   │
│  │    [Volume Chart]       │   │
│  └─────────────────────────┘   │
│                                 │
└─────────────────────────────────┘
```

#### Key Elements
- Full-screen chart (candlestick/line)
- Price display at top
- Timeframe buttons
- Technical indicators toggle
- Drawing tools
- Volume chart below
- Pinch to zoom, pan gestures

---

### Screen 10: Buy/Sell Flow - Order Type

#### Layout Structure
```
┌─────────────────────────────────┐
│  [←]  Buy RELIANCE              │
├─────────────────────────────────┤
│                                 │
│  Current Price: ₹2,450.00       │
│                                 │
│  Order Type                     │
│  ┌─────────────────────────┐   │
│  │ ● Market                │   │
│  │   Execute at market     │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │ ○ Limit                 │   │
│  │   Set your price        │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │ ○ Stop Loss             │   │
│  │   Trigger at price      │   │
│  └─────────────────────────┘   │
│                                 │
│  Quantity                       │
│  ┌─────────────────────────┐   │
│  │  10  [Shares]           │   │
│  └─────────────────────────┘   │
│                                 │
│  Price (if Limit/SL)            │
│  ┌─────────────────────────┐   │
│  │  ₹2,450.00              │   │
│  └─────────────────────────┘   │
│                                 │
│  Estimated Amount: ₹24,500      │
│                                 │
│  ┌─────────────────────────┐   │
│  │    Review Order         │   │
│  └─────────────────────────┘   │
│                                 │
└─────────────────────────────────┘
```

#### Key Elements
- Stock name and current price
- Order type selection (radio buttons)
- Quantity input
- Price input (conditional)
- Estimated amount calculation
- Review order button

---

### Screen 11: Buy/Sell Flow - Order Preview

#### Layout Structure
```
┌─────────────────────────────────┐
│  [←]  Review Order              │
├─────────────────────────────────┤
│                                 │
│  Order Summary                  │
│  ┌─────────────────────────┐   │
│  │ Stock: RELIANCE         │   │
│  │ Action: Buy             │   │
│  │ Type: Market            │   │
│  │ Quantity: 10 shares     │   │
│  │ Price: Market Price     │   │
│  │                         │   │
│  │ Estimated Amount:       │   │
│  │ ₹24,500.00              │   │
│  │                         │   │
│  │ Brokerage: ₹20.00       │   │
│  │ Taxes: ₹24.50           │   │
│  │ Total: ₹24,544.50       │   │
│  └─────────────────────────┘   │
│                                 │
│  Available Funds: ₹50,000       │
│                                 │
│  ⚠️ Risk Warning                │
│  Market orders execute          │
│  immediately at current price   │
│                                 │
│  ┌─────────────────────────┐   │
│  │    Confirm Order        │   │
│  └─────────────────────────┘   │
│                                 │
└─────────────────────────────────┘
```

#### Key Elements
- Complete order summary
- Breakdown of charges
- Available funds display
- Risk warning (if applicable)
- Confirm order button

---

### Screen 12: Orders

#### Layout Structure
```
┌─────────────────────────────────┐
│  [←]  Orders            [Filter]│
├─────────────────────────────────┤
│                                 │
│  [Pending] [Executed] [History] │
│                                 │
│  Pending Orders                 │
│  ┌─────────────────────────┐   │
│  │ RELIANCE                │   │
│  │ Buy | Market | 10 shares│   │
│  │ ₹24,500.00              │   │
│  │ [Cancel]                │   │
│  └─────────────────────────┘   │
│                                 │
│  Executed Orders (Today)        │
│  ┌─────────────────────────┐   │
│  │ TCS                     │   │
│  │ Buy | Market | 5 shares │   │
│  │ ₹16,000.00              │   │
│  │ Executed at 10:23 AM    │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ INFY                    │   │
│  │ Sell | Limit | 20 shares│   │
│  │ ₹36,000.00              │   │
│  │ Executed at 09:45 AM    │   │
│  └─────────────────────────┘   │
│                                 │
└─────────────────────────────────┘
```

#### Key Elements
- Tab navigation (Pending, Executed, History)
- Order cards with details
- Action buttons (Cancel for pending)
- Timestamp for executed orders
- Filter option

---

### Screen 13: Positions

#### Layout Structure
```
┌─────────────────────────────────┐
│  [←]  Positions         [Filter]│
├─────────────────────────────────┤
│                                 │
│  Open Positions                 │
│  ┌─────────────────────────┐   │
│  │ RELIANCE                │   │
│  │ Buy | 10 shares         │   │
│  │ Avg: ₹2,400.00          │   │
│  │ LTP: ₹2,450.00          │   │
│  │ P&L: +₹500.00 (+2.08%)  │   │
│  │ [Close]                 │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ TCS                     │   │
│  │ Buy | 5 shares          │   │
│  │ Avg: ₹3,100.00          │   │
│  │ LTP: ₹3,200.00          │   │
│  │ P&L: +₹500.00 (+3.23%)  │   │
│  │ [Close]                 │   │
│  └─────────────────────────┘   │
│                                 │
│  Total P&L: +₹1,000.00          │
│                                 │
└─────────────────────────────────┘
```

#### Key Elements
- List of open positions
- Position details (stock, quantity, avg price, LTP)
- P&L display (color coded)
- Close position button
- Total P&L summary

---

### Screen 14: Holdings

#### Layout Structure
```
┌─────────────────────────────────┐
│  [←]  Holdings          [Filter]│
├─────────────────────────────────┤
│                                 │
│  Total Value: ₹1,25,000.00      │
│  Total P&L: +₹5,000.00 (+4.17%) │
│                                 │
│  ┌─────────────────────────┐   │
│  │ RELIANCE                │   │
│  │ 10 shares               │   │
│  │ Avg: ₹2,400.00          │   │
│  │ Current: ₹2,450.00      │   │
│  │ Value: ₹24,500.00       │   │
│  │ P&L: +₹500.00 (+2.08%)  │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ TCS                     │   │
│  │ 5 shares                │   │
│  │ Avg: ₹3,100.00          │   │
│  │ Current: ₹3,200.00      │   │
│  │ Value: ₹16,000.00       │   │
│  │ P&L: +₹500.00 (+3.23%)  │   │
│  └─────────────────────────┘   │
│                                 │
│  [Sort] [Export]                │
│                                 │
└─────────────────────────────────┘
```

#### Key Elements
- Total portfolio value
- Total P&L summary
- Holdings list with details
- Individual stock P&L
- Sort and export options

---

### Screen 15: Funds - Add Funds

#### Layout Structure
```
┌─────────────────────────────────┐
│  [←]  Add Funds                 │
├─────────────────────────────────┤
│                                 │
│  Available Balance              │
│  ₹50,000.00                     │
│                                 │
│  Amount to Add                  │
│  ┌─────────────────────────┐   │
│  │  ₹10,000                │   │
│  └─────────────────────────┘   │
│                                 │
│  Quick Amounts                  │
│  [₹5K] [₹10K] [₹25K] [₹50K]     │
│                                 │
│  Payment Method                 │
│  ┌─────────────────────────┐   │
│  │ ● UPI                   │   │
│  │   Pay via UPI           │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │ ○ Net Banking           │   │
│  │   Bank transfer         │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │ ○ IMPS                  │   │
│  │   Instant transfer      │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │    Continue             │   │
│  └─────────────────────────┘   │
│                                 │
└─────────────────────────────────┘
```

#### Key Elements
- Current balance display
- Amount input
- Quick amount buttons
- Payment method selection
- Continue button

---

### Screen 16: Funds - Withdraw Funds

#### Layout Structure
```
┌─────────────────────────────────┐
│  [←]  Withdraw Funds            │
├─────────────────────────────────┤
│                                 │
│  Available Balance              │
│  ₹50,000.00                     │
│                                 │
│  Withdrawable Amount            │
│  ₹45,000.00                     │
│                                 │
│  Amount to Withdraw             │
│  ┌─────────────────────────┐   │
│  │  ₹10,000                │   │
│  └─────────────────────────┘   │
│                                 │
│  Bank Account                   │
│  ┌─────────────────────────┐   │
│  │ ● HDFC Bank             │   │
│  │   ****1234              │   │
│  └─────────────────────────┘   │
│  [+ Add Bank Account]           │
│                                 │
│  Processing Time: 1-2 days      │
│                                 │
│  ┌─────────────────────────┐   │
│  │    Withdraw             │   │
│  └─────────────────────────┘   │
│                                 │
└─────────────────────────────────┘
```

#### Key Elements
- Available and withdrawable balance
- Amount input
- Bank account selection
- Processing time information
- Withdraw button

---

### Screen 17: Profile & Settings

#### Layout Structure
```
┌─────────────────────────────────┐
│  [←]  Profile & Settings        │
├─────────────────────────────────┤
│                                 │
│      [Profile Picture]          │
│      John Doe                   │
│      john.doe@email.com         │
│                                 │
│  Account                        │
│  ┌─────────────────────────┐   │
│  │ Personal Information >  │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │ Bank Accounts >         │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │ Tax Information >       │   │
│  └─────────────────────────┘   │
│                                 │
│  Trading                        │
│  ┌─────────────────────────┐   │
│  │ Trading Preferences >   │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │ Risk Profile >          │   │
│  └─────────────────────────┘   │
│                                 │
│  App                            │
│  ┌─────────────────────────┐   │
│  │ Notifications >         │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │ Appearance >            │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │ Security >              │   │
│  └─────────────────────────┘   │
│                                 │
│  Support                        │
│  ┌─────────────────────────┐   │
│  │ Help & Support >        │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │ About >                 │   │
│  └─────────────────────────┘   │
│                                 │
│  [Logout]                       │
│                                 │
└─────────────────────────────────┘
```

#### Key Elements
- Profile header (picture, name, email)
- Categorized settings sections
- Navigation to sub-settings
- Logout option

---

### Screen 18: Notification Center

#### Layout Structure
```
┌─────────────────────────────────┐
│  [←]  Notifications      [Clear]│
├─────────────────────────────────┤
│                                 │
│  Today                           │
│  ┌─────────────────────────┐   │
│  │ ✅ Order Executed       │   │
│  │ RELIANCE buy order      │   │
│  │ 10:23 AM                │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ 📈 Price Alert          │   │
│  │ TCS crossed ₹3,200      │   │
│  │ 09:45 AM                │   │
│  └─────────────────────────┘   │
│                                 │
│  Yesterday                      │
│  ┌─────────────────────────┐   │
│  │ 💰 Funds Added          │   │
│  │ ₹10,000 added           │   │
│  │ Yesterday, 4:30 PM      │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ 📰 Market News          │   │
│  │ Nifty hits new high     │   │
│  │ Yesterday, 2:15 PM      │   │
│  └─────────────────────────┘   │
│                                 │
└─────────────────────────────────┘
```

#### Key Elements
- Grouped by date (Today, Yesterday, etc.)
- Notification cards with icons
- Timestamp
- Clear all option
- Tap to view details

---

### Screen 19: Market Overview

#### Layout Structure
```
┌─────────────────────────────────┐
│  [←]  Market Overview   [Filter]│
├─────────────────────────────────┤
│                                 │
│  Indices                        │
│  ┌─────────────────────────┐   │
│  │ NIFTY 50                │   │
│  │ 18,500.00               │   │
│  │ +150.00 (+0.82%)  📈    │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ SENSEX                  │   │
│  │ 62,000.00               │   │
│  │ +420.00 (+0.68%)  📈    │   │
│  └─────────────────────────┘   │
│                                 │
│  Top Gainers                    │
│  ┌─────────────────────────┐   │
│  │ INFY  +2.10%  ₹1,800    │   │
│  │ RELIANCE  +1.20%  ₹2,450│   │
│  │ HDFC  +0.90%  ₹1,650    │   │
│  └─────────────────────────┘   │
│                                 │
│  Top Losers                     │
│  ┌─────────────────────────┐   │
│  │ TCS  -0.50%  ₹3,200     │   │
│  │ WIPRO  -0.30%  ₹400     │   │
│  └─────────────────────────┘   │
│                                 │
│  Most Active                    │
│  ┌─────────────────────────┐   │
│  │ RELIANCE  ₹2,450        │   │
│  │ Volume: 2.5M            │   │
│  └─────────────────────────┘   │
│                                 │
└─────────────────────────────────┘
```

#### Key Elements
- Market indices (Nifty, Sensex)
- Top gainers section
- Top losers section
- Most active stocks
- Filter option

---

## 2. High-Fidelity Screen Descriptions

### Detailed Specifications for Key Screens

#### Screen: Home Dashboard (High-Fidelity)

**Frame Structure:**
- Frame Name: `Screen/Home/Dashboard`
- Size: 375px × 812px (iPhone standard)
- Background: `Neutral/50`

**Top Navigation Bar:**
- Component: `Navigation/TopBar`
- Height: 56px
- Background: `White`
- Padding: 16px horizontal
- Auto Layout: Horizontal, Space Between
- Left: Menu icon (24px), App name (Title/Medium)
- Right: Notification icon (24px), Profile icon (24px)
- Shadow: `Elevation/1`

**Portfolio Summary Card:**
- Component: `Card/Portfolio`
- Margin: 16px all sides
- Padding: 24px
- Background: `White` with gradient overlay `Primary/50` (10% opacity)
- Border Radius: `Radius/Large` (16px)
- Shadow: `Elevation/3`
- Auto Layout: Vertical, Gap 12px

**Portfolio Value:**
- Typography: `Display/Small` (36px, Weight 600)
- Color: `Neutral/900`
- Font: Monospace for numbers

**Portfolio Change:**
- Typography: `Title/Large` (22px, Weight 500)
- Color: `Market/Positive` or `Market/Negative`
- Icon: Trending Up/Down (20px)

**Quick Stats Row:**
- Component: `Container/StatsRow`
- Auto Layout: Horizontal, Space Between
- Gap: 16px
- Two stat cards, each:
  - Background: `Neutral/50`
  - Padding: 16px
  - Border Radius: `Radius/Base` (12px)
  - Flex: 1 (equal width)

**Quick Actions:**
- Component: `Container/QuickActions`
- Auto Layout: Horizontal, Gap 12px
- Three buttons: `Button/Primary/Default` (Buy), `Button/Secondary/Default` (Sell), `Button/Tertiary/Default` (Add Funds)
- Height: 48px
- Flex: 1 (equal width)

**Watchlist Section:**
- Header: "Watchlist" (Title/Medium, 16px)
- Margin Top: 24px
- List: `Card/StockItem` components
- Each card:
  - Height: 72px
  - Padding: 16px
  - Auto Layout: Horizontal, Space Between
  - Left: Stock name (Title/Medium), Symbol (Body/Small)
  - Right: Price (Title/Large, Monospace), Change (Body/Medium, Market color)

**Bottom Navigation:**
- Component: `Navigation/BottomBar`
- Height: 64px
- Background: `White`
- Shadow: `Elevation/4`
- Auto Layout: Horizontal, Space Evenly
- Icons: Home, Markets, Trade, Portfolio, More (24px each)
- Active state: `Primary/500`, Inactive: `Neutral/500`

---

#### Screen: Stock Details (High-Fidelity)

**Frame Structure:**
- Frame Name: `Screen/Stock/Details`
- Size: 375px × 812px
- Background: `Neutral/50`

**Header:**
- Component: `Navigation/Header`
- Height: 56px
- Background: `White`
- Left: Back button (Icon/Medium, 20px)
- Center: Stock name "RELIANCE" (Title/Large, 22px)
- Right: Watchlist icon (Icon/Medium, 20px), Share icon (Icon/Medium, 20px)

**Price Section:**
- Margin: 16px horizontal, 24px top
- Current Price: `Display/Medium` (45px, Weight 600, Monospace)
- Change: `Title/Large` (22px, Weight 500, Market color)
- Auto Layout: Vertical, Gap 8px

**Chart Container:**
- Component: `Chart/Container`
- Margin: 16px
- Height: 300px
- Background: `White`
- Border Radius: `Radius/Base` (12px)
- Padding: 16px
- Shadow: `Elevation/1`

**Timeframe Selector:**
- Component: `Chart/Toolbar`
- Margin: 16px horizontal
- Height: 48px
- Background: `Neutral/100`
- Border Radius: `Radius/Medium` (8px)
- Padding: 4px
- Auto Layout: Horizontal, Gap 4px
- Buttons: `Chart/TimeframeButton` (1D, 1W, 1M, 3M, 1Y, All)
- Active: `Primary/100` background, `Primary/700` text
- Inactive: `White` background, `Neutral/700` text

**Key Metrics:**
- Component: `Container/Metrics`
- Margin: 16px
- Auto Layout: Horizontal, Space Between
- Four metric cards:
  - Background: `White`
  - Padding: 12px
  - Border Radius: `Radius/Medium` (8px)
  - Flex: 1
  - Label: `Label/Small` (11px)
  - Value: `Title/Medium` (16px, Monospace)

**Action Buttons:**
- Component: `Container/Actions`
- Margin: 16px
- Auto Layout: Horizontal, Gap 12px
- Two buttons: `Button/Primary/Default` (Buy), `Button/Secondary/Default` (Sell)
- Height: 56px
- Flex: 1

**Tab Navigation:**
- Component: `Tabs/Container`
- Margin: 16px horizontal
- Height: 48px
- Tabs: Overview, Chart, News
- Active: `Tab/Active`
- Inactive: `Tab/Default`

---

#### Screen: Buy/Sell Order (High-Fidelity)

**Frame Structure:**
- Frame Name: `Screen/Trade/Order`
- Size: 375px × 812px
- Background: `Neutral/50`

**Header:**
- Component: `Navigation/Header`
- Title: "Buy RELIANCE" or "Sell RELIANCE"
- Background: `White`

**Current Price Display:**
- Component: `Card/Default`
- Margin: 16px
- Padding: 20px
- Background: `White`
- Border Radius: `Radius/Base` (12px)
- Center aligned
- Price: `Display/Small` (36px, Monospace, Weight 600)
- Label: "Current Price" (`Body/Medium`, `Neutral/600`)

**Order Type Selection:**
- Component: `Container/RadioGroup`
- Margin: 16px horizontal
- Auto Layout: Vertical, Gap 12px
- Three radio cards:
  - Background: `White`
  - Padding: 16px
  - Border Radius: `Radius/Base` (12px)
  - Border: 2px solid (Selected: `Primary/500`, Unselected: `Neutral/200`)
  - Selected: Background `Primary/50`
  - Auto Layout: Horizontal, Space Between
  - Left: Title (`Title/Medium`), Description (`Body/Small`)
  - Right: Radio indicator

**Quantity Input:**
- Component: `Input/Number`
- Margin: 16px horizontal
- Label: "Quantity" (`Label/Large`)
- Input: `Input/Default` (48px height)
- Suffix: "Shares" (`Body/Medium`, `Neutral/600`)
- Helper text: "Min: 1, Max: 1000" (`Body/Small`, `Neutral/500`)

**Price Input (Conditional):**
- Component: `Input/Amount`
- Margin: 16px horizontal
- Label: "Price per Share" (`Label/Large`)
- Input: `Input/Default` (48px height)
- Prefix: "₹" (`Body/Medium`, `Neutral/600`)
- Visible only for Limit and Stop Loss orders

**Estimated Amount:**
- Component: `Card/Default`
- Margin: 16px
- Padding: 16px
- Background: `Neutral/50`
- Border Radius: `Radius/Base` (12px)
- Auto Layout: Horizontal, Space Between
- Label: "Estimated Amount" (`Body/Medium`)
- Value: `Title/Large` (22px, Monospace, Weight 600)

**Review Button:**
- Component: `Button/Primary/Default`
- Margin: 16px
- Height: 56px
- Text: "Review Order" (`Title/Medium`, Weight 600)
- Full width

---

## 3. Component Specifications

### Reusable Components

#### Card/StockItem
```
Frame: Card/StockItem
Size: Auto (Height: 72px)
Background: White
Border Radius: 12px
Padding: 16px
Shadow: Elevation/1
Auto Layout: Horizontal, Space Between, Align Center

Left Section:
  - Stock Icon/Logo (40px × 40px)
  - Stock Name (Title/Medium, 16px)
  - Stock Symbol (Body/Small, 12px, Neutral/600)
  Gap: 12px

Right Section:
  - Price (Title/Large, 22px, Monospace, Weight 600)
  - Change (Body/Medium, 14px, Market color)
  Auto Layout: Vertical, Align End, Gap 4px
```

#### PriceWidget/Large
```
Frame: PriceWidget/Large
Size: Auto
Background: White
Border Radius: 16px
Padding: 24px
Shadow: Elevation/3
Auto Layout: Vertical, Center, Gap 8px

Price:
  - Typography: Display/Medium (45px, Monospace, Weight 600)
  - Color: Neutral/900

Change:
  - Typography: Title/Large (22px, Monospace, Weight 500)
  - Color: Market/Positive or Market/Negative
  - Icon: Trending Up/Down (24px)
  Auto Layout: Horizontal, Center, Gap 8px
```

---

## 4. Interaction Specifications

### Gestures
- **Swipe Left/Right**: Quick actions on list items (Buy, Remove)
- **Pull to Refresh**: Refresh data on list screens
- **Pinch to Zoom**: Zoom in/out on charts
- **Long Press**: Context menu, additional options
- **Swipe Down**: Dismiss modals, close full-screen views

### Animations
- **Page Transitions**: Slide (200ms, Easing/Standard)
- **Modal Open**: Fade + Scale (300ms, Easing/Decelerate)
- **Button Press**: Scale 0.95 (150ms, Easing/Standard)
- **Card Hover**: Elevation increase (200ms, Easing/Standard)
- **Loading**: Skeleton screens or spinners
- **Success/Error**: Slide in notification (300ms, Easing/Decelerate)

---

## 5. Responsive Breakpoints

### Mobile (375px - 599px)
- Single column layout
- Bottom navigation
- Stacked cards
- Full-width buttons

### Tablet (600px - 1023px)
- Two-column layouts possible
- Side navigation option
- Wider cards
- More horizontal space

### Desktop (1024px+)
- Multi-column layouts
- Side navigation
- Expanded views
- Hover states enabled

---

This wireframe specification provides detailed guidance for implementing all screens in the redesigned Zerodha Kite app, ensuring consistency and clarity throughout the user experience.

