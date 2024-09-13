import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarHeader from './components/navigator/NavbarHeader';
import NavbarSide from './components/navigator/NavbarSide';
import Dashboard from './features/Dashboard';
import Contact from './features/ContactPage';
import Broadcast from './features/BroadcastPage';
import Template from './features/TemplatePage';
import Statistic from './features/StatisticPage';
import PageNotFound from './features/PageNotFound';

function App() {
  return (
    <>
      <Router>
        <nav className="navbar">
          <NavbarSide />
          <NavbarHeader />
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/broadcast" element={<Broadcast />} />
          <Route path="/template" element={<Template />} />
          <Route path="/statistic" element={<Statistic />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
