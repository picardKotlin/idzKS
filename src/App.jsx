import './App.css';
import AppRoutes from './routes';
import { ROUTES } from './routes/routes';
import { Link, BrowserRouter as Router } from 'react-router-dom';

function App() {
  
  const pages = [
    {path: ROUTES.mainpage, name: 'Home'},
    // {path: `/weather/${1}`, name: 'Weather'},
  ]

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="header_navigation">
            <ul>
              {pages.map(({path, name}) => 
              <li key={path} className="header_navigation_link">
                <Link to={path}>{name}</Link>
              </li>)}
            </ul>
          </nav>
        </header>
        
        <AppRoutes/>
      </div>
    </Router>
  );
}

export default App;