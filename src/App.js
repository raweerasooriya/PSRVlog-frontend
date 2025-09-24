import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to Rashaan Weerasooriya channel</h1>
      <button className='user-button' onClick={() => navigate('/users')}>Watch </button>
      </header>
    </div>
  );
}

export default App;
