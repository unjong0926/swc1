import React from 'react';
import { Link } from 'react-router-dom';
import Bookimg from './img/Bookimg.png';

function Home() {
  return (
    <div className="App">
      <p id="Diary">나의 일기장</p>
      <div className="Home">
        <Link to={'/App'}>
          <img src={Bookimg} alt="Home" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
