import './App.css';
import NavbarHeader from './components/navigator/NavbarHeader';
import NavbarSide from './components/navigator/NavbarSide';

function App() {
  return (
    <>
      <nav className="navbar">
        <NavbarSide></NavbarSide>
        <NavbarHeader></NavbarHeader>
      </nav>
      {/* <div className="content">ladidah</div> */}
    </>
  );
}

export default App;
