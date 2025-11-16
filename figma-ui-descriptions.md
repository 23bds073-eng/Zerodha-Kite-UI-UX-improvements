# Zerodha Kite Redesign - Figma-Ready UI Descriptions

## Overview

Detailed Figma implementation specifications with exact layouts, auto-layout rules, spacing values, and component organization for the redesigned Zerodha Kite app.

---

## 1. Frame Structure & Organization

### Master Frame Setup

**Frame Name:** `App/Zerodha Kite`
- **Width:** 375px (Mobile standard)
- **Height:** 812px (iPhone 13 Pro standard)
- **Background:** `Neutral/50` (#FAFAFA)
- **Layout Grid:** 8px grid (visible for alignment)

### Page Organization

```
Pages:
├── 01_Design System
│   ├── Colors
│   ├── Typography
│   ├── Components
│   └── Icons
├── 02_Wireframes
│   ├── Low Fidelity
│   └── High Fidelity
├── 03_Screens
│   ├── Authentication
│   ├── Onboarding
│   ├── Home
│   ├── Markets
│   ├── Trading
│   ├── Portfolio
│   └── Settings
└── 04_Components
    ├── Buttons
    ├── Cards
    ├── Inputs
    ├── Navigation
    └── Charts
```

---

## 2. Design Tokens (Figma Variables)

### Color Tokens

**Primary Colors:**
```
Primary/50: #E3F2FD
Primary/100: #BBDEFB
Primary/200: #90CAF9
Primary/300: #64B5F6
Primary/400: #42A5F5
Primary/500: #2196F3
Primary/600: #1E88E5
Primary/700: #1976D2
Primary/800: #1565C0
Primary/900: #0D47A1
```

**Semantic Colors:**
```
Success/500: #4CAF50
Error/500: #F44336
Warning/500: #FF9800
Info/500: #03A9F4
Market/Positive: #4CAF50
Market/Negative: #F44336
```

**Neutral Colors:**
```
Neutral/50: #FAFAFA
Neutral/100: #F5F5F5
Neutral/200: #EEEEEE
Neutral/300: #E0E0E0
Neutral/500: #9E9E9E
Neutral/600: #757575
Neutral/700: #616161
Neutral/900: #212121
```

### Typography Tokens

**Font Families:**
```
Font/Primary: Inter
Font/Monospace: SF Mono
```

**Font Sizes:**
```
Size/Display/Large: 57px
Size/Display/Medium: 45px
Size/Display/Small: 36px
Size/Headline/Large: 32px
Size/Headline/Medium: 28px
Size/Headline/Small: 24px
Size/Title/Large: 22px
Size/Title/Medium: 16px
Size/Title/Small: 14px
Size/Body/Large: 16px
Size/Body/Medium: 14px
Size/Body/Small: 12px
Size/Label/Large: 14px
Size/Label/Medium: 12px
Size/Label/Small: 11px
```

**Line Heights:**
```
LineHeight/Tight: 1.2
LineHeight/Normal: 1.5
LineHeight/Relaxed: 1.75
```

**Font Weights:**
```
Weight/Regular: 400
Weight/Medium: 500
Weight/SemiBold: 600
Weight/Bold: 700
```

### Spacing Tokens

```
Spacing/XS: 4px
Spacing/Small: 8px
Spacing/Medium: 12px
Spacing/Base: 16px
Spacing/Large: 20px
Spacing/XL: 24px
Spacing/XXL: 32px
Spacing/XXXL: 48px
```

### Border Radius Tokens

```
Radius/XS: 4px
Radius/Small: 6px
Radius/Medium: 8px
Radius/Base: 12px
Radius/Large: 16px
Radius/XL: 24px
Radius/Full: 999px
```

### Shadow Tokens (Effects)

```
Shadow/Elevation/1:
  - Type: Drop Shadow
  - X: 0, Y: 1, Blur: 2, Spread: 0
  - Color: rgba(0,0,0,0.05)
  - Type: Drop Shadow
  - X: 0, Y: 1, Blur: 3, Spread: 0
  - Color: rgba(0,0,0,0.1)

Shadow/Elevation/2:
  - Type: Drop Shadow
  - X: 0, Y: 2, Blur: 4, Spread: 0
  - Color: rgba(0,0,0,0.05)
  - Type: Drop Shadow
  - X: 0, Y: 4, Blur: 6, Spread: 0
  - Color: rgba(0,0,0,0.1)

Shadow/Elevation/3:
  - Type: Drop Shadow
  - X: 0, Y: 4, Blur: 6, Spread: 0
  - Color: rgba(0,0,0,0.05)
  - Type: Drop Shadow
  - X: 0, Y: 10, Blur: 15, Spread: 0
  - Color: rgba(0,0,0,0.1)

Shadow/Elevation/4:
  - Type: Drop Shadow
  - X: 0, Y: 10, Blur: 15, Spread: 0
  - Color: rgba(0,0,0,0.05)
  - Type: Drop Shadow
  - X: 0, Y: 20, Blur: 25, Spread: 0
  - Color: rgba(0,0,0,0.1)
```

---

## 3. Component Specifications

### Button/Primary/Default

**Frame Properties:**
- **Name:** `Button/Primary/Default`
- **Type:** Component (Auto Layout)
- **Width:** Hug Contents (Min: 120px)
- **Height:** 48px
- **Padding:** 16px 24px
- **Fill:** `Primary/500` (#2196F3)
- **Corner Radius:** `Radius/Medium` (8px)
- **Effects:** `Shadow/Elevation/2`

**Auto Layout:**
- **Direction:** Horizontal
- **Alignment:** Center
- **Padding:** 16px 24px
- **Gap:** 8px
- **Horizontal Resizing:** Hug Contents
- **Vertical Resizing:** Fixed

**Text:**
- **Content:** "Button" (placeholder)
- **Font:** Inter, `Size/Title/Medium` (16px)
- **Weight:** `Weight/Medium` (500)
- **Line Height:** 24px
- **Color:** White (#FFFFFF)
- **Text Align:** Center

**Variants:**
- State: Default, Hover, Pressed, Disabled
- Size: Default (48px), Small (40px), Large (56px)

**Hover State:**
- Fill: `Primary/700` (#1976D2)
- Effects: `Shadow/Elevation/4`

**Pressed State:**
- Fill: `Primary/800` (#1565C0)
- Effects: `Shadow/Elevation/1`
- Scale: 0.98

**Disabled State:**
- Fill: `Neutral/300` (#E0E0E0)
- Text Color: `Neutral/500` (#9E9E9E)
- Effects: None

---

### Button/Secondary/Default

**Frame Properties:**
- **Name:** `Button/Secondary/Default`
- **Type:** Component (Auto Layout)
- **Width:** Hug Contents (Min: 120px)
- **Height:** 48px
- **Padding:** 16px 24px
- **Fill:** Transparent
- **Stroke:** 1px solid `Primary/500`
- **Corner Radius:** `Radius/Medium` (8px)

**Text:**
- **Color:** `Primary/500` (#2196F3)
- All other properties same as Primary

---

### Card/Default

**Frame Properties:**
- **Name:** `Card/Default`
- **Type:** Component (Auto Layout)
- **Width:** Fill Container
- **Height:** Hug Contents
- **Padding:** 16px
- **Fill:** White (#FFFFFF)
- **Corner Radius:** `Radius/Base` (12px)
- **Effects:** `Shadow/Elevation/1`

**Auto Layout:**
- **Direction:** Vertical
- **Alignment:** Stretch
- **Padding:** 16px
- **Gap:** 12px
- **Horizontal Resizing:** Fill Container
- **Vertical Resizing:** Hug Contents

**Variants:**
- Elevation: Default, Elevated (Shadow/Elevation/3)
- Padding: Default (16px), Large (20px), XL (24px)

---

### Card/StockItem

**Frame Properties:**
- **Name:** `Card/StockItem`
- **Type:** Component (Auto Layout)
- **Width:** Fill Container
- **Height:** 72px (Fixed)
- **Padding:** 16px
- **Fill:** White (#FFFFFF)
- **Corner Radius:** `Radius/Base` (12px)
- **Effects:** `Shadow/Elevation/1`

**Auto Layout:**
- **Direction:** Horizontal
- **Alignment:** Center
- **Padding:** 16px
- **Gap:** 12px
- **Horizontal Resizing:** Fill Container
- **Vertical Resizing:** Fixed

**Left Section (Auto Layout - Horizontal):**
- **Gap:** 12px
- **Alignment:** Center
- **Contents:**
  - Stock Icon (40px × 40px, Corner Radius: 8px)
  - Text Group (Auto Layout - Vertical):
    - Stock Name: `Title/Medium` (16px, Weight 500, Color: Neutral/900)
    - Stock Symbol: `Body/Small` (12px, Weight 400, Color: Neutral/600)

**Right Section (Auto Layout - Vertical, Align End):**
- **Gap:** 4px
- **Contents:**
  - Price: `Title/Large` (22px, Weight 600, Monospace, Color: Neutral/900)
  - Change Group (Auto Layout - Horizontal, Gap 4px):
    - Change Amount: `Body/Medium` (14px, Weight 400, Monospace, Color: Market/Positive or Market/Negative)
    - Change Icon: 16px, Color: Market/Positive or Market/Negative

---

### Input/Default

**Frame Properties:**
- **Name:** `Input/Default`
- **Type:** Component (Auto Layout)
- **Width:** Fill Container
- **Height:** 48px (Fixed)
- **Padding:** 12px 16px
- **Fill:** White (#FFFFFF)
- **Stroke:** 1px solid `Neutral/300` (#E0E0E0)
- **Corner Radius:** `Radius/Medium` (8px)

**Auto Layout:**
- **Direction:** Horizontal
- **Alignment:** Center
- **Padding:** 12px 16px
- **Gap:** 8px
- **Horizontal Resizing:** Fill Container
- **Vertical Resizing:** Fixed

**Text:**
- **Content:** "Placeholder text"
- **Font:** Inter, `Size/Body/Medium` (14px)
- **Weight:** `Weight/Regular` (400)
- **Line Height:** 20px
- **Color:** `Neutral/500` (#9E9E9E) (placeholder), `Neutral/900` (#212121) (value)

**Variants:**
- State: Default, Focused, Error, Disabled
- Type: Text, Number, Search, Amount

**Focused State:**
- Stroke: 2px solid `Primary/500`
- Effects: Inner Shadow (Focus Ring):
  - X: 0, Y: 0, Blur: 0, Spread: 4px
  - Color: `Primary/100` with 50% opacity

**Error State:**
- Stroke: 2px solid `Error/500`
- Fill: `Error/50`

**Disabled State:**
- Fill: `Neutral/100`
- Stroke: 1px solid `Neutral/300`
- Text Color: `Neutral/500`

---

### Input/Search

**Frame Properties:**
- **Name:** `Input/Search`
- **Type:** Component (Auto Layout)
- **Width:** Fill Container
- **Height:** 48px (Fixed)
- **Padding:** 12px 16px 12px 48px (left padding for icon)
- **Fill:** White (#FFFFFF)
- **Stroke:** 1px solid `Neutral/300`
- **Corner Radius:** `Radius/Full` (999px)

**Left Icon:**
- **Position:** Absolute, Left: 16px
- **Size:** 20px × 20px
- **Color:** `Neutral/500`

---

### Tab/Default

**Frame Properties:**
- **Name:** `Tab/Default`
- **Type:** Component (Auto Layout)
- **Width:** Hug Contents
- **Height:** 48px (Fixed)
- **Padding:** 12px 16px
- **Fill:** Transparent
- **Corner Radius:** 0

**Auto Layout:**
- **Direction:** Horizontal
- **Alignment:** Center
- **Padding:** 12px 16px
- **Gap:** 8px

**Text:**
- **Font:** Inter, `Size/Title/Medium` (16px)
- **Weight:** `Weight/Regular` (400)
- **Color:** `Neutral/600` (#757575)
- **Line Height:** 24px

**Active State:**
- **Text Color:** `Primary/500`
- **Weight:** `Weight/SemiBold` (600)
- **Border Bottom:** 2px solid `Primary/500`

---

### Tabs/Container

**Frame Properties:**
- **Name:** `Tabs/Container`
- **Type:** Component (Auto Layout)
- **Width:** Fill Container
- **Height:** 48px (Fixed)
- **Fill:** White (#FFFFFF)
- **Border Bottom:** 1px solid `Neutral/200`

**Auto Layout:**
- **Direction:** Horizontal
- **Alignment:** Stretch
- **Padding:** 0
- **Gap:** 0
- **Horizontal Resizing:** Fill Container
- **Vertical Resizing:** Fixed

**Children:**
- Multiple `Tab/Default` components
- Each tab flexes equally or hugs content

---

### Chip/Default

**Frame Properties:**
- **Name:** `Chip/Default`
- **Type:** Component (Auto Layout)
- **Width:** Hug Contents
- **Height:** 32px (Fixed)
- **Padding:** 8px 16px
- **Fill:** `Neutral/100` (#F5F5F5)
- **Corner Radius:** `Radius/Full` (999px)

**Auto Layout:**
- **Direction:** Horizontal
- **Alignment:** Center
- **Padding:** 8px 16px
- **Gap:** 8px

**Text:**
- **Font:** Inter, `Size/Label/Medium` (12px)
- **Weight:** `Weight/Medium` (500)
- **Color:** `Neutral/900` (#212121)

**Selected State:**
- **Fill:** `Primary/100`
- **Text Color:** `Primary/700`
- **Stroke:** 1px solid `Primary/300`

---

### PriceWidget/Large

**Frame Properties:**
- **Name:** `PriceWidget/Large`
- **Type:** Component (Auto Layout)
- **Width:** Fill Container
- **Height:** Hug Contents
- **Padding:** 24px
- **Fill:** White (#FFFFFF)
- **Corner Radius:** `Radius/Large` (16px)
- **Effects:** `Shadow/Elevation/3`

**Auto Layout:**
- **Direction:** Vertical
- **Alignment:** Center
- **Padding:** 24px
- **Gap:** 8px
- **Horizontal Resizing:** Fill Container
- **Vertical Resizing:** Hug Contents

**Price Text:**
- **Content:** "₹2,450.00"
- **Font:** SF Mono, `Size/Display/Medium` (45px)
- **Weight:** `Weight/SemiBold` (600)
- **Color:** `Neutral/900` (#212121)
- **Text Align:** Center

**Change Group (Auto Layout - Horizontal, Center, Gap 8px):**
- **Change Amount:** `Title/Large` (22px, Monospace, Weight 500, Market color)
- **Change Icon:** 24px, Market color

---

## 4. Screen Layout Specifications

### Screen: Home Dashboard

**Frame Name:** `Screen/Home/Dashboard`
**Size:** 375px × 812px
**Background:** `Neutral/50` (#FAFAFA)

#### Top Navigation Bar
**Component:** `Navigation/TopBar`
- **Position:** Top, Fixed
- **Width:** Fill Container (375px)
- **Height:** 56px
- **Padding:** 16px horizontal
- **Fill:** White (#FFFFFF)
- **Effects:** `Shadow/Elevation/1`

**Auto Layout (Horizontal, Space Between):**
- **Left Section (Auto Layout - Horizontal, Gap 12px):**
  - Menu Icon: 24px × 24px
  - App Name: `Title/Medium` (16px, Weight 600)
- **Right Section (Auto Layout - Horizontal, Gap 16px):**
  - Notification Icon: 24px × 24px
  - Profile Icon: 24px × 24px

#### Portfolio Summary Card
**Component:** `Card/Portfolio`
- **Position:** Below Top Bar
- **Margin:** 16px all sides
- **Padding:** 24px
- **Width:** Fill Container (343px)
- **Height:** Hug Contents
- **Fill:** White with Gradient Overlay:
  - Base: White
  - Overlay: `Primary/50` at 10% opacity
- **Corner Radius:** `Radius/Large` (16px)
- **Effects:** `Shadow/Elevation/3`

**Auto Layout (Vertical, Stretch, Gap 12px):**
1. **Label:** "Portfolio Value" (`Body/Medium`, `Neutral/600`)
2. **Value:** "₹1,25,000.00" (`Display/Small`, 36px, Monospace, Weight 600)
3. **Change Group (Auto Layout - Horizontal, Gap 8px):**
   - Change: "+₹2,500.00 (+2.04%)" (`Title/Large`, Market/Positive)
   - Icon: Trending Up, 20px

#### Quick Stats Row
**Component:** `Container/StatsRow`
- **Position:** Below Portfolio Card
- **Margin:** 0px 16px 16px 16px
- **Width:** Fill Container (343px)
- **Height:** Hug Contents

**Auto Layout (Horizontal, Space Between, Gap 16px):**
- **Stat Card 1 (Flex: 1):**
  - Background: `Neutral/50`
  - Padding: 16px
  - Corner Radius: `Radius/Base` (12px)
  - Label: "Funds" (`Body/Small`, `Neutral/600`)
  - Value: "₹50,000" (`Title/Medium`, Monospace, Weight 600)
- **Stat Card 2 (Flex: 1):**
  - Same structure
  - Label: "P&L"
  - Value: "+₹5,000" (`Title/Medium`, Market/Positive)

#### Quick Actions
**Component:** `Container/QuickActions`
- **Position:** Below Stats Row
- **Margin:** 0px 16px 24px 16px
- **Width:** Fill Container (343px)
- **Height:** 48px

**Auto Layout (Horizontal, Space Between, Gap 12px):**
- **Buy Button:** `Button/Primary/Default` (Flex: 1)
- **Sell Button:** `Button/Secondary/Default` (Flex: 1)
- **Add Funds Button:** `Button/Tertiary/Default` (Flex: 1)

#### Watchlist Section
**Component:** `Section/Watchlist`
- **Position:** Below Quick Actions
- **Margin:** 0px 16px 24px 16px
- **Width:** Fill Container (343px)

**Auto Layout (Vertical, Stretch, Gap 12px):**
1. **Header (Auto Layout - Horizontal, Space Between):**
   - Title: "Watchlist" (`Title/Medium`, 16px, Weight 600)
   - View All Link: "View All" (`Body/Medium`, `Primary/500`)
2. **Watchlist Items (Auto Layout - Vertical, Gap 8px):**
   - `Card/StockItem` × 3

#### Market Overview Section
**Component:** `Section/MarketOverview`
- **Position:** Below Watchlist
- **Margin:** 0px 16px 24px 16px
- **Width:** Fill Container (343px)

**Auto Layout (Vertical, Stretch, Gap 12px):**
1. **Title:** "Market Overview" (`Title/Medium`, 16px, Weight 600)
2. **Index Cards (Auto Layout - Vertical, Gap 8px):**
   - Index Card (Nifty, Sensex) × 2

#### Bottom Navigation Bar
**Component:** `Navigation/BottomBar`
- **Position:** Bottom, Fixed
- **Width:** Fill Container (375px)
- **Height:** 64px
- **Padding:** 8px 0px
- **Fill:** White (#FFFFFF)
- **Effects:** `Shadow/Elevation/4`

**Auto Layout (Horizontal, Space Evenly):**
- **Tab Items:** 5 × `Tab/Icon` (Home, Markets, Trade, Portfolio, More)
- Each tab: 48px × 48px, Icon 24px

---

### Screen: Stock Details

**Frame Name:** `Screen/Stock/Details`
**Size:** 375px × 812px
**Background:** `Neutral/50` (#FAFAFA)

#### Header
**Component:** `Navigation/Header`
- **Position:** Top, Fixed
- **Width:** Fill Container (375px)
- **Height:** 56px
- **Padding:** 16px horizontal
- **Fill:** White (#FFFFFF)
- **Effects:** `Shadow/Elevation/1`

**Auto Layout (Horizontal, Space Between, Align Center):**
- **Left:** Back Icon, 20px × 20px
- **Center:** Stock Name "RELIANCE" (`Title/Large`, 22px, Weight 600)
- **Right (Auto Layout - Horizontal, Gap 16px):**
  - Watchlist Icon, 20px × 20px
  - Share Icon, 20px × 20px

#### Price Section
**Component:** `Section/Price`
- **Position:** Below Header
- **Margin:** 24px 16px 16px 16px
- **Width:** Fill Container (343px)

**Auto Layout (Vertical, Stretch, Gap 8px):**
1. **Price:** "₹2,450.00" (`Display/Medium`, 45px, Monospace, Weight 600)
2. **Change Group (Auto Layout - Horizontal, Gap 8px):**
   - Change: "+₹29.00 (+1.20%)" (`Title/Large`, Market/Positive)
   - Icon: Trending Up, 20px

#### Chart Container
**Component:** `Chart/Container`
- **Position:** Below Price Section
- **Margin:** 0px 16px 16px 16px
- **Width:** Fill Container (343px)
- **Height:** 300px (Fixed)
- **Padding:** 16px
- **Fill:** White (#FFFFFF)
- **Corner Radius:** `Radius/Base` (12px)
- **Effects:** `Shadow/Elevation/1`

**Contents:**
- Chart Area (Fill Container, Height: 268px)
- Placeholder: "Chart visualization area"

#### Timeframe Selector
**Component:** `Chart/Toolbar`
- **Position:** Below Chart
- **Margin:** 0px 16px 16px 16px
- **Width:** Fill Container (343px)
- **Height:** 48px
- **Padding:** 4px
- **Fill:** `Neutral/100` (#F5F5F5)
- **Corner Radius:** `Radius/Medium` (8px)

**Auto Layout (Horizontal, Space Between, Gap 4px):**
- **Timeframe Buttons:** 6 × `Chart/TimeframeButton` (1D, 1W, 1M, 3M, 1Y, All)
- Each button: Flex 1, Height: 40px

#### Key Metrics
**Component:** `Container/Metrics`
- **Position:** Below Timeframe Selector
- **Margin:** 0px 16px 16px 16px
- **Width:** Fill Container (343px)

**Auto Layout (Horizontal, Space Between, Gap 8px):**
- **Metric Cards:** 4 × Metric Card (Open, High, Low, Volume)
- Each card: Flex 1, Padding: 12px, Background: White, Corner Radius: 8px

#### Action Buttons
**Component:** `Container/Actions`
- **Position:** Below Metrics
- **Margin:** 0px 16px 16px 16px
- **Width:** Fill Container (343px)
- **Height:** 56px

**Auto Layout (Horizontal, Space Between, Gap 12px):**
- **Buy Button:** `Button/Primary/Default` (Flex: 1, Height: 56px)
- **Sell Button:** `Button/Secondary/Default` (Flex: 1, Height: 56px)

#### Tab Navigation
**Component:** `Tabs/Container`
- **Position:** Below Action Buttons
- **Margin:** 0px 16px 16px 16px
- **Width:** Fill Container (343px)
- **Height:** 48px

**Auto Layout (Horizontal, Space Evenly):**
- **Tabs:** 3 × `Tab/Default` (Overview, Chart, News)

---

## 5. Auto-Layout Rules Summary

### Common Patterns

**Horizontal Container (Space Between):**
- Direction: Horizontal
- Alignment: Center
- Padding: 16px
- Gap: 12px or 16px
- Horizontal Resizing: Fill Container
- Vertical Resizing: Hug Contents

**Vertical Container (Stretch):**
- Direction: Vertical
- Alignment: Stretch
- Padding: 16px or 24px
- Gap: 12px or 16px
- Horizontal Resizing: Fill Container
- Vertical Resizing: Hug Contents

**Card Layout:**
- Direction: Vertical
- Alignment: Stretch
- Padding: 16px (or 20px/24px for elevated)
- Gap: 12px
- Fill: White
- Corner Radius: 12px
- Effects: Elevation/1 or Elevation/3

**Button Layout:**
- Direction: Horizontal
- Alignment: Center
- Padding: 16px 24px
- Gap: 8px
- Horizontal Resizing: Hug Contents (Min: 120px)
- Vertical Resizing: Fixed (48px)

---

## 6. Component Variants Structure

### Button Variants
```
Button/
├── Primary/
│   ├── Default
│   ├── Hover
│   ├── Pressed
│   └── Disabled
├── Secondary/
│   ├── Default
│   ├── Hover
│   ├── Pressed
│   └── Disabled
└── Size/
    ├── Small (40px)
    ├── Default (48px)
    └── Large (56px)
```

### Card Variants
```
Card/
├── Default
├── Elevated
├── StockItem
├── Portfolio
└── Padding/
    ├── Default (16px)
    ├── Large (20px)
    └── XL (24px)
```

### Input Variants
```
Input/
├── Default
├── Focused
├── Error
├── Disabled
└── Type/
    ├── Text
    ├── Number
    ├── Search
    └── Amount
```

---

## 7. Prototyping Specifications

### Interactions

**Button Press:**
- Trigger: On Click/Tap
- Action: Navigate to [Target Screen]
- Animation: Instant (0ms) or Smart Animate (200ms)

**Card Tap:**
- Trigger: On Click/Tap
- Action: Navigate to [Detail Screen]
- Animation: Smart Animate (200ms, Ease In Out)

**Tab Switch:**
- Trigger: On Click/Tap
- Action: Overlay [Content Frame]
- Animation: Smart Animate (200ms, Ease In Out)

**Modal Open:**
- Trigger: On Click/Tap
- Action: Open Overlay [Modal Frame]
- Animation: Smart Animate (300ms, Ease Out)
- Background: Backdrop (rgba(0,0,0,0.5))

**Swipe Gesture:**
- Trigger: On Drag
- Action: Navigate to [Next Screen]
- Animation: Smart Animate (200ms, Ease In Out)

---

## 8. Export Specifications

### Assets Export Settings

**Icons:**
- Format: SVG (preferred) or PNG
- Size: 1x, 2x, 3x
- Naming: `icon-[name]-[size].svg`

**Images:**
- Format: PNG or JPG
- Size: 1x, 2x, 3x
- Naming: `image-[name]-[size].png`

**Components:**
- Export as: SVG or PNG
- Include: Background, Effects
- Naming: `component-[name].svg`

---

## 9. Implementation Checklist

### Design System Setup
- [ ] Create color variables
- [ ] Set up typography styles
- [ ] Define spacing tokens
- [ ] Create shadow effects
- [ ] Build component library

### Component Creation
- [ ] Buttons (all variants)
- [ ] Cards (all variants)
- [ ] Inputs (all variants)
- [ ] Navigation components
- [ ] Chart components
- [ ] Price widgets
- [ ] Market indicators

### Screen Implementation
- [ ] Authentication screens
- [ ] Onboarding flow
- [ ] Home dashboard
- [ ] Market screens
- [ ] Trading screens
- [ ] Portfolio screens
- [ ] Settings screens

### Prototyping
- [ ] Link all navigation
- [ ] Add interactions
- [ ] Test user flows
- [ ] Add micro-interactions

### Documentation
- [ ] Component documentation
- [ ] Usage guidelines
- [ ] Design tokens reference
- [ ] Handoff notes

---

This Figma-ready specification provides all the details needed to implement the redesigned Zerodha Kite app in Figma with precision and consistency.

