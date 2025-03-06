import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LeftNavMenu, TopNavBar } from './components';
import { ChartsPage, PlanningPage, SKUsPage, StoresPage } from './pages';

function App() {

  return (
    <Router>
      <div className="flex flex-col">
        <TopNavBar />
        <div className="flex flex-1 mt-16">
          <LeftNavMenu />
          <Routes>
            <Route path="/stores" element={<StoresPage />} />
            <Route path="/skus" element={<SKUsPage />} />
            <Route path="/planning" element={<PlanningPage />} />
            <Route path="/charts" element={<ChartsPage />} />
            <Route path="/" element={<StoresPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
