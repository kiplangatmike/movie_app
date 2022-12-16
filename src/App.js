import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Following from './components/Following';
import Logout from './components/Logout';

function App() {
  return (
    <><Navbar/>
    <Feed/>
    <Following/>
    <Logout/>
    </>
    
  );
}

export default App;
