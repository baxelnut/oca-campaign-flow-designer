import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarHeader from './components/navigator/NavbarHeader';
import NavbarSide from './components/navigator/NavbarSide';
import Dashboard from './features/dashboard/Dashboard';
import Contact from './features/contact/ContactPage';
import Broadcast from './features/broadcast/BroadcastPage';
import Template from './features/template/TemplatePage';
import Statistic from './features/StatisticPage';
import PageNotFound from './features/PageNotFound';
import FeedbackNav from './components/util/FeedbackNav';
import CreateTemplate from './features/template/create-template/CreateTemplatePage';
import CreateWhatsAppTemplate from './features/template/create-template/whatsapp-template/CreateWhatsAppTemplate';
import CreateEmailTemplate from './features/template/create-template/email-template/CreateEmailTemplate';

function App() {
  const components = [
    { path: '/dashboard', Component: Dashboard },
    { path: '/contact', Component: Contact },
    { path: '/broadcast', Component: Broadcast },
    { path: '/template', Component: Template },
    { path: '/statistic', Component: Statistic },
    { path: '/template/create', Component: CreateTemplate },
    {
      path: '/template/create/whatsapp_template',
      Component: CreateWhatsAppTemplate,
    },
    { path: '/template/create/email_template', Component: CreateEmailTemplate },
  ];

  return (
    <Router>
      <Routes>
        {components.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <nav className="navbar">
        <NavbarSide />
        <NavbarHeader />
        <FeedbackNav />
      </nav>
    </Router>
  );
}

export default App;
