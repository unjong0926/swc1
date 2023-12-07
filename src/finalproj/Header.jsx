import './Header.css';
import { Link } from 'react-router-dom';
import Back from './img/Back.png';

function Header() {
  return (
    <div className="Header">
      <Link to={'/'} className="Main">
        <img src={Back} alt="Back" className="Back" />
      </Link>
      <h3 className="Date">{new Date().toDateString()}</h3>
    </div>
  );
}

export default Header;
