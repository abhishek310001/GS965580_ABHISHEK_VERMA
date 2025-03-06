import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout, LeftNavMenu, TopNavBar } from './components';
import { ChartsPage, PlanningPage, SKUsPage, StoresPage } from './pages';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {

  return (
    <Router>
      <TopNavBar />
      <div className="flex flex-1 mt-16">
        <LeftNavMenu />
        <AppLayout >
          <Provider store={store}>
            <Routes>
              <Route path="/stores" element={<StoresPage />} />
              <Route path="/skus" element={<SKUsPage />} />
              <Route path="/planning" element={<PlanningPage />} />
              <Route path="/charts" element={<ChartsPage />} />
              <Route path="/" element={<StoresPage />} />
            </Routes>
          </Provider>
        </AppLayout>
      </div>
    </Router>
  )
}

export default App
