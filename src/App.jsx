import './App.css';
import { STATES } from './data/states';
import AppRoutes from './routes';
import { ROUTES } from './routes/routes';
import { Link, BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="header_navigation">
            <Link className="header_navigation_link" to={'/'}>Home</Link>
            {STATES.map((state, index) => (
              <Link className="header_navigation_link" key={index} to={state.id}>{state.name}</Link>
            ))}
          </nav>
        </header>
        <AppRoutes/>
      </div>
    </Router>
  );
}

export default App;