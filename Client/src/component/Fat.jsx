import React from 'react';
import { Link } from 'react-router-dom';

function Fat() {
  return (
    <div>
      <p>Welcome to Fat Loss Diet, your ultimate destination for achieving your fitness goals with precision and expertise.</p>
      <div className='food'>
        <Link to="/Fveg">
          <button>VEG</button>
        </Link>
        <Link to="/Fnonveg">
          <button>NON-VEG</button>
        </Link>
      </div>
    </div>
  );
}

export default Fat;
