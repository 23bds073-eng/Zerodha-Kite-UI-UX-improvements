import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Home from './screens/Home';
import Markets from './screens/Markets';
import Trade from './screens/Trade';
import Portfolio from './screens/Portfolio';
import More from './screens/More';
import Watchlist from './screens/Watchlist';
import StockDetails from './screens/StockDetails';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/more" element={<More />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/stock/:symbol" element={<StockDetails />} />
        </Routes>
        <BottomNav />
      </Router>
    </div>
  );
}

export default App;

