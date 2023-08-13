import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
