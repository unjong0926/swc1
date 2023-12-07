import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import App from './App';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/App" element={<App />} />
    </Routes>
  );
}

export default Main;
