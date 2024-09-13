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
  const components = [
    { path: '/dashboard', Component: Dashboard },
    { path: '/contact', Component: Contact },
    { path: '/broadcast', Component: Broadcast },
    { path: '/template', Component: Template },
    { path: '/statistic', Component: Statistic },
  ];

  return (
    <>
      <Router>
        <nav className="navbar">
          <NavbarSide />
          <NavbarHeader />
        </nav>
        <Routes>
          {components.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
