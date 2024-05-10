import React from 'react';
import { Link } from 'react-router-dom';

function Sportdiet() {
  return (
    <div>
      <p>Welcome to Sport-specific Training Diet, your ultimate destination for achieving your fitness goals with precision and expertise.</p>
      <div className='food'>
        <Link to="/Sportveg">
          <button>VEG</button>
        </Link>
        <Link to="/Sportnonveg">
          <button>NON-VEG</button>
        </Link>
      </div>
    </div>
  );
}

export default Sportdiet;

