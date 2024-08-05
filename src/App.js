import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/login" element={<LoginPage />} />
                {/* <Route exact path="/new" element={<NewBill />} /> */}
            </Routes>
        </Router>
  );
}

export default App;
