# Zerodha Kite Redesign - Design System

## Overview

A comprehensive design system for the Zerodha Kite trading app, following Material 3 and iOS design principles with a finance-grade, professional aesthetic.

---

## 1. Color Palette

### Light Mode

#### Primary Colors
```
Primary/50:  #E3F2FD (Lightest)
Primary/100: #BBDEFB
Primary/200: #90CAF9
Primary/300: #64B5F6
Primary/400: #42A5F5
Primary/500: #2196F3 (Main Primary)
Primary/600: #1E88E5
Primary/700: #1976D2
Primary/800: #1565C0
Primary/900: #0D47A1 (Darkest)
```

#### Secondary Colors
```
Secondary/50:  #F3E5F5
Secondary/100: #E1BEE7
Secondary/200: #CE93D8
Secondary/300: #BA68C8
Secondary/400: #AB47BC
Secondary/500: #9C27B0 (Main Secondary)
Secondary/600: #8E24AA
Secondary/700: #7B1FA2
Secondary/800: #6A1B9A
Secondary/900: #4A148C
```

#### Semantic Colors

**Success (Green)**
```
Success/50:  #E8F5E9
Success/100: #C8E6C9
Success/200: #A5D6A7
Success/300: #81C784
Success/400: #66BB6A
Success/500: #4CAF50 (Main Success)
Success/600: #43A047
Success/700: #388E3C
Success/800: #2E7D32
Success/900: #1B5E20
```

**Error (Red)**
```
Error/50:  #FFEBEE
Error/100: #FFCDD2
Error/200: #EF9A9A
Error/300: #E57373
Error/400: #EF5350
Error/500: #F44336 (Main Error)
Error/600: #E53935
Error/700: #D32F2F
Error/800: #C62828
Error/900: #B71C1C
```

**Warning (Orange)**
```
Warning/50:  #FFF3E0
Warning/100: #FFE0B2
Warning/200: #FFCC80
Warning/300: #FFB74D
Warning/400: #FFA726
Warning/500: #FF9800 (Main Warning)
Warning/600: #FB8C00
Warning/700: #F57C00
Warning/800: #EF6C00
Warning/900: #E65100
```

**Info (Blue)**
```
Info/50:  #E1F5FE
Info/100: #B3E5FC
Info/200: #81D4FA
Info/300: #4FC3F7
Info/400: #29B6F6
Info/500: #03A9F4 (Main Info)
Info/600: #039BE5
Info/700: #0288D1
Info/800: #0277BD
Info/900: #01579B
```

#### Neutral Colors (Grays)
```
Neutral/50:  #FAFAFA (Background)
Neutral/100: #F5F5F5
Neutral/200: #EEEEEE
Neutral/300: #E0E0E0
Neutral/400: #BDBDBD
Neutral/500: #9E9E9E
Neutral/600: #757575
Neutral/700: #616161
Neutral/800: #424242
Neutral/900: #212121 (Text Primary)
```

#### Market-Specific Colors
```
Market/Positive: #4CAF50 (Green - Gains)
Market/Negative: #F44336 (Red - Losses)
Market/Neutral: #757575 (Gray - No Change)
Market/High: #FF9800 (Orange - High Volatility)
Market/Low: #2196F3 (Blue - Low Volatility)
```

### Dark Mode

#### Primary Colors (Dark)
```
Primary/Dark/50:  #0D47A1
Primary/Dark/100: #1565C0
Primary/Dark/200: #1976D2
Primary/Dark/300: #1E88E5
Primary/Dark/400: #2196F3
Primary/Dark/500: #42A5F5 (Main Primary Dark)
Primary/Dark/600: #64B5F6
Primary/Dark/700: #90CAF9
Primary/Dark/800: #BBDEFB
Primary/Dark/900: #E3F2FD
```

#### Background Colors (Dark)
```
Background/Dark/Primary: #121212
Background/Dark/Secondary: #1E1E1E
Background/Dark/Tertiary: #2C2C2C
Background/Dark/Elevated: #2D2D2D
```

#### Surface Colors (Dark)
```
Surface/Dark/Primary: #1E1E1E
Surface/Dark/Secondary: #2C2C2C
Surface/Dark/Tertiary: #3A3A3A
Surface/Dark/Elevated: #2D2D2D
```

#### Text Colors (Dark)
```
Text/Dark/Primary: #FFFFFF
Text/Dark/Secondary: #B3B3B3
Text/Dark/Tertiary: #808080
Text/Dark/Disabled: #4D4D4D
```

### Color Usage Guidelines

**Primary Colors:**
- Primary/500: Main actions, links, selected states
- Primary/700: Hover states, pressed states
- Primary/100: Light backgrounds, subtle highlights

**Semantic Colors:**
- Success: Profits, completed orders, positive changes
- Error: Losses, failed orders, critical alerts
- Warning: Pending actions, important notices
- Info: Informational messages, neutral updates

**Neutral Colors:**
- Neutral/50-100: Backgrounds, cards
- Neutral/200-300: Dividers, borders
- Neutral/400-500: Disabled states, placeholders
- Neutral/600-900: Text (varying emphasis)

---

## 2. Typography System

### Font Family

**Primary Font:** Inter (Web-safe: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)
- Clean, modern, highly readable
- Excellent for financial data
- Supports multiple weights

**Monospace Font:** 'SF Mono', 'Monaco', 'Courier New', monospace
- Used for: Stock prices, numbers, codes
- Ensures consistent number alignment

### Type Scale

#### Display
```
Display/Large
- Font Size: 57px
- Line Height: 64px
- Letter Spacing: -0.25px
- Weight: 400 (Regular)
- Usage: Hero headlines, major announcements

Display/Medium
- Font Size: 45px
- Line Height: 52px
- Letter Spacing: 0px
- Weight: 400 (Regular)
- Usage: Section headers, large numbers

Display/Small
- Font Size: 36px
- Line Height: 44px
- Letter Spacing: 0px
- Weight: 400 (Regular)
- Usage: Dashboard totals, portfolio value
```

#### Headline
```
Headline/Large
- Font Size: 32px
- Line Height: 40px
- Letter Spacing: 0px
- Weight: 400 (Regular)
- Usage: Page titles, major sections

Headline/Medium
- Font Size: 28px
- Line Height: 36px
- Letter Spacing: 0px
- Weight: 400 (Regular)
- Usage: Section headers, card titles

Headline/Small
- Font Size: 24px
- Line Height: 32px
- Letter Spacing: 0px
- Weight: 400 (Regular)
- Usage: Subsection headers, list headers
```

#### Title
```
Title/Large
- Font Size: 22px
- Line Height: 28px
- Letter Spacing: 0px
- Weight: 500 (Medium)
- Usage: Card titles, important labels

Title/Medium
- Font Size: 16px
- Line Height: 24px
- Letter Spacing: 0.15px
- Weight: 500 (Medium)
- Usage: Button text, tab labels, list items

Title/Small
- Font Size: 14px
- Line Height: 20px
- Letter Spacing: 0.1px
- Weight: 500 (Medium)
- Usage: Small buttons, chip labels
```

#### Body
```
Body/Large
- Font Size: 16px
- Line Height: 24px
- Letter Spacing: 0.5px
- Weight: 400 (Regular)
- Usage: Primary body text, descriptions

Body/Medium
- Font Size: 14px
- Line Height: 20px
- Letter Spacing: 0.25px
- Weight: 400 (Regular)
- Usage: Secondary text, captions

Body/Small
- Font Size: 12px
- Line Height: 16px
- Letter Spacing: 0.4px
- Weight: 400 (Regular)
- Usage: Helper text, timestamps, fine print
```

#### Label
```
Label/Large
- Font Size: 14px
- Line Height: 20px
- Letter Spacing: 0.1px
- Weight: 500 (Medium)
- Usage: Form labels, field labels

Label/Medium
- Font Size: 12px
- Line Height: 16px
- Letter Spacing: 0.5px
- Weight: 500 (Medium)
- Usage: Small labels, tags

Label/Small
- Font Size: 11px
- Line Height: 16px
- Letter Spacing: 0.5px
- Weight: 500 (Medium)
- Usage: Micro labels, badges
```

### Financial Data Typography

**Stock Prices:**
- Font: Monospace
- Size: 18px-24px (depending on context)
- Weight: 600 (Semi-bold)
- Color: Market/Positive or Market/Negative

**Percentages:**
- Font: Monospace
- Size: 14px-16px
- Weight: 500 (Medium)
- Color: Market/Positive or Market/Negative

**Large Numbers (Portfolio Value):**
- Font: Inter (Display)
- Size: 32px-48px
- Weight: 600 (Semi-bold)
- Letter Spacing: -0.5px

---

## 3. UI Component Set

### Buttons

#### Button/Primary/Default
```
- Background: Primary/500
- Text Color: White
- Padding: 16px 24px
- Border Radius: 8px
- Font: Title/Medium
- Height: 48px
- Shadow: Elevation/2
```

#### Button/Primary/Hover
```
- Background: Primary/700
- Shadow: Elevation/4
```

#### Button/Primary/Pressed
```
- Background: Primary/800
- Shadow: Elevation/1
```

#### Button/Primary/Disabled
```
- Background: Neutral/300
- Text Color: Neutral/500
- Shadow: None
```

#### Button/Secondary/Default
```
- Background: Transparent
- Border: 1px solid Primary/500
- Text Color: Primary/500
- Padding: 16px 24px
- Border Radius: 8px
- Font: Title/Medium
- Height: 48px
```

#### Button/Tertiary/Default
```
- Background: Neutral/100
- Text Color: Neutral/900
- Padding: 12px 20px
- Border Radius: 8px
- Font: Title/Small
- Height: 40px
```

#### Button/Text/Default
```
- Background: Transparent
- Text Color: Primary/500
- Padding: 8px 16px
- Font: Title/Medium
- Height: Auto
```

#### Button/Icon/Default
```
- Size: 40px × 40px
- Border Radius: 8px
- Background: Neutral/100
- Icon Size: 24px
- Icon Color: Neutral/900
```

#### Button/Floating Action (FAB)
```
- Size: 56px × 56px
- Border Radius: 16px
- Background: Primary/500
- Icon Size: 24px
- Icon Color: White
- Shadow: Elevation/6
- Position: Fixed bottom-right
```

### Tabs

#### Tab/Default
```
- Height: 48px
- Padding: 12px 16px
- Font: Title/Medium
- Color: Neutral/600
- Border Bottom: 2px solid Transparent
```

#### Tab/Active
```
- Color: Primary/500
- Border Bottom: 2px solid Primary/500
- Font Weight: 600
```

#### Tab/Hover
```
- Background: Neutral/50
- Color: Neutral/900
```

### Chips

#### Chip/Default
```
- Height: 32px
- Padding: 8px 16px
- Border Radius: 16px
- Background: Neutral/100
- Font: Label/Medium
- Color: Neutral/900
```

#### Chip/Selected
```
- Background: Primary/100
- Color: Primary/700
- Border: 1px solid Primary/300
```

#### Chip/Filter
```
- Height: 36px
- Padding: 8px 20px
- Border Radius: 18px
- Background: White
- Border: 1px solid Neutral/300
```

### Cards

#### Card/Default
```
- Background: White
- Border Radius: 12px
- Padding: 16px
- Shadow: Elevation/2
- Border: 1px solid Neutral/200 (optional)
```

#### Card/Elevated
```
- Background: White
- Border Radius: 12px
- Padding: 20px
- Shadow: Elevation/4
```

#### Card/StockItem
```
- Background: White
- Border Radius: 12px
- Padding: 16px
- Shadow: Elevation/1
- Min Height: 72px
- Layout: Horizontal (Icon, Content, Price)
```

#### Card/Portfolio
```
- Background: White
- Border Radius: 16px
- Padding: 24px
- Shadow: Elevation/3
- Gradient Overlay: Optional (Primary/50)
```

### Price Widgets

#### PriceWidget/Large
```
- Container: Card/Default
- Price Font: Display/Medium (Monospace)
- Change Font: Title/Large (Monospace)
- Change Color: Market/Positive or Market/Negative
- Layout: Vertical stack
- Alignment: Center
```

#### PriceWidget/Compact
```
- Container: Inline
- Price Font: Title/Large (Monospace)
- Change Font: Body/Medium (Monospace)
- Layout: Horizontal
- Spacing: 8px
```

#### PriceWidget/Inline
```
- Price Font: Body/Large (Monospace)
- Change Font: Body/Small (Monospace)
- Layout: Horizontal
- Spacing: 4px
```

### Market Indicators

#### Indicator/Positive
```
- Background: Success/50
- Text Color: Success/700
- Icon: Trending Up
- Border: 1px solid Success/200 (optional)
```

#### Indicator/Negative
```
- Background: Error/50
- Text Color: Error/700
- Icon: Trending Down
- Border: 1px solid Error/200 (optional)
```

#### Indicator/Neutral
```
- Background: Neutral/100
- Text Color: Neutral/700
- Icon: Minus or Equal
```

### Chart Components

#### Chart/Container
```
- Background: White
- Border Radius: 12px
- Padding: 16px
- Min Height: 300px
- Shadow: Elevation/1
```

#### Chart/Toolbar
```
- Height: 48px
- Background: Neutral/50
- Border Radius: 8px
- Padding: 8px
- Layout: Horizontal (Timeframe buttons, indicators, tools)
```

#### Chart/TimeframeButton
```
- Height: 32px
- Padding: 6px 12px
- Border Radius: 6px
- Font: Label/Medium
- Background: White (default) or Primary/100 (active)
```

### Input Fields

#### Input/Default
```
- Height: 48px
- Padding: 12px 16px
- Border: 1px solid Neutral/300
- Border Radius: 8px
- Font: Body/Medium
- Background: White
```

#### Input/Focused
```
- Border: 2px solid Primary/500
- Shadow: 0 0 0 4px Primary/100 (focus ring)
```

#### Input/Error
```
- Border: 2px solid Error/500
- Background: Error/50
```

#### Input/Disabled
```
- Background: Neutral/100
- Border: 1px solid Neutral/300
- Text Color: Neutral/500
```

#### Input/Search
```
- Height: 48px
- Padding: 12px 16px 12px 48px (icon on left)
- Border: 1px solid Neutral/300
- Border Radius: 24px (pill shape)
- Icon: Search, 20px, Neutral/500
```

### Grid System

#### Spacing Scale
```
0px: 0
4px: 0.25 (XS)
8px: 0.5 (S)
12px: 0.75
16px: 1 (M - Base)
20px: 1.25
24px: 1.5 (L)
32px: 2 (XL)
40px: 2.5
48px: 3 (XXL)
64px: 4
```

#### Layout Grid
```
- Columns: 12 (mobile), 12 (tablet), 12 (desktop)
- Gutter: 16px (mobile), 24px (tablet/desktop)
- Margin: 16px (mobile), 24px (tablet), 32px (desktop)
```

### Iconography

#### Icon Sizes
```
Icon/XS: 12px
Icon/Small: 16px
Icon/Medium: 20px
Icon/Large: 24px
Icon/XL: 32px
Icon/XXL: 48px
```

#### Icon Style
- Style: Outlined (primary), Filled (selected/active)
- Stroke Width: 1.5px (outlined), 2px (filled)
- Color: Inherit from parent or use semantic colors

#### Common Icons
- Navigation: Home, Markets, Trade, Portfolio, More
- Actions: Buy, Sell, Add, Remove, Edit, Delete, Share
- Market: Trending Up, Trending Down, Equal, Chart
- Status: Success, Error, Warning, Info
- UI: Search, Filter, Sort, Settings, Notifications

### Shadows & Elevations

#### Elevation System
```
Elevation/0: None
Elevation/1: 0px 1px 2px rgba(0,0,0,0.05), 0px 1px 3px rgba(0,0,0,0.1)
Elevation/2: 0px 2px 4px rgba(0,0,0,0.05), 0px 4px 6px rgba(0,0,0,0.1)
Elevation/3: 0px 4px 6px rgba(0,0,0,0.05), 0px 10px 15px rgba(0,0,0,0.1)
Elevation/4: 0px 10px 15px rgba(0,0,0,0.05), 0px 20px 25px rgba(0,0,0,0.1)
Elevation/6: 0px 15px 25px rgba(0,0,0,0.1), 0px 30px 40px rgba(0,0,0,0.15)
Elevation/8: 0px 20px 30px rgba(0,0,0,0.15), 0px 40px 50px rgba(0,0,0,0.2)
```

#### Usage Guidelines
- Elevation/0: Flat surfaces, backgrounds
- Elevation/1: Cards, dividers
- Elevation/2: Buttons, input fields
- Elevation/3: Elevated cards, modals
- Elevation/4: Dropdowns, popovers
- Elevation/6: FAB, important modals
- Elevation/8: Full-screen modals, dialogs

### State Variants

#### Interactive States
```
Default: Base styling
Hover: Slightly darker background, elevation increase
Pressed: Darker background, elevation decrease
Focus: Border highlight, focus ring
Active: Primary color, bold text
Disabled: Reduced opacity (0.5), no interaction
Loading: Spinner overlay, disabled interaction
```

#### Success State
```
Background: Success/50
Border: 1px solid Success/300
Text: Success/700
Icon: Success checkmark
```

#### Error State
```
Background: Error/50
Border: 1px solid Error/300
Text: Error/700
Icon: Error alert
```

#### Warning State
```
Background: Warning/50
Border: 1px solid Warning/300
Text: Warning/700
Icon: Warning triangle
```

#### Info State
```
Background: Info/50
Border: 1px solid Info/300
Text: Info/700
Icon: Info circle
```

---

## 4. Figma Naming Conventions

### Component Structure
```
[Component]/[Variant]/[State]
```

### Examples

#### Buttons
```
Button/Primary/Default
Button/Primary/Hover
Button/Primary/Pressed
Button/Primary/Disabled
Button/Secondary/Default
Button/Tertiary/Default
Button/Text/Default
Button/Icon/Default
Button/FAB/Default
```

#### Cards
```
Card/Default
Card/Elevated
Card/StockItem
Card/Portfolio
Card/Order
Card/Position
```

#### Inputs
```
Input/Default
Input/Focused
Input/Error
Input/Disabled
Input/Search
Input/Number
Input/Amount
```

#### Tabs
```
Tab/Default
Tab/Active
Tab/Disabled
Tabs/Container
```

#### Chips
```
Chip/Default
Chip/Selected
Chip/Filter
Chip/Market/Positive
Chip/Market/Negative
```

#### Price Widgets
```
PriceWidget/Large
PriceWidget/Compact
PriceWidget/Inline
PriceWidget/Portfolio
```

#### Market Indicators
```
Indicator/Positive
Indicator/Negative
Indicator/Neutral
Indicator/Change
```

#### Charts
```
Chart/Container
Chart/Toolbar
Chart/TimeframeButton
Chart/IndicatorToggle
Chart/DrawingTool
```

---

## 5. Spacing System

### Padding Scale
```
Padding/XS: 4px
Padding/Small: 8px
Padding/Medium: 12px
Padding/Base: 16px
Padding/Large: 20px
Padding/XL: 24px
Padding/XXL: 32px
Padding/XXXL: 48px
```

### Margin Scale
```
Margin/XS: 4px
Margin/Small: 8px
Margin/Medium: 12px
Margin/Base: 16px
Margin/Large: 20px
Margin/XL: 24px
Margin/XXL: 32px
Margin/XXXL: 48px
```

### Gap Scale (for Flex/Grid)
```
Gap/XS: 4px
Gap/Small: 8px
Gap/Medium: 12px
Gap/Base: 16px
Gap/Large: 20px
Gap/XL: 24px
Gap/XXL: 32px
```

---

## 6. Border Radius

```
Radius/XS: 4px
Radius/Small: 6px
Radius/Medium: 8px
Radius/Base: 12px
Radius/Large: 16px
Radius/XL: 24px
Radius/Full: 999px (pill shape)
```

---

## 7. Animation & Transitions

### Duration
```
Duration/Instant: 0ms
Duration/Fast: 150ms
Duration/Base: 200ms
Duration/Slow: 300ms
Duration/Slower: 500ms
```

### Easing
```
Easing/Standard: cubic-bezier(0.4, 0.0, 0.2, 1)
Easing/Decelerate: cubic-bezier(0.0, 0.0, 0.2, 1)
Easing/Accelerate: cubic-bezier(0.4, 0.0, 1, 1)
Easing/Sharp: cubic-bezier(0.4, 0.0, 0.6, 1)
```

### Common Animations
```
- Button Press: 150ms, Easing/Standard
- Card Hover: 200ms, Easing/Standard
- Modal Open: 300ms, Easing/Decelerate
- Page Transition: 200ms, Easing/Standard
- Loading Spinner: 1000ms, Linear, Infinite
```

---

## 8. Accessibility Guidelines

### Color Contrast
- Text on background: Minimum 4.5:1 (WCAG AA)
- Large text: Minimum 3:1 (WCAG AA)
- Interactive elements: Minimum 3:1 (WCAG AA)

### Touch Targets
- Minimum size: 44px × 44px
- Recommended: 48px × 48px
- Spacing between targets: Minimum 8px

### Typography
- Minimum font size: 12px (Body/Small)
- Recommended body text: 14px-16px
- Line height: Minimum 1.5× font size

### Focus Indicators
- Visible focus ring: 2px solid Primary/500
- Focus ring offset: 2px
- Focus ring color: Primary/100 (background)

---

## 9. Responsive Breakpoints

```
Mobile: 0px - 599px
Tablet: 600px - 1023px
Desktop: 1024px+
```

### Layout Adjustments
- **Mobile**: Single column, bottom navigation, stacked cards
- **Tablet**: Two columns possible, side navigation option, wider cards
- **Desktop**: Multi-column layouts, side navigation, expanded views

---

This design system provides the foundation for creating consistent, accessible, and professional UI components throughout the Zerodha Kite app redesign.

