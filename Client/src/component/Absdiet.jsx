import React from 'react';
import { Link } from 'react-router-dom';

function Absdiet() {
  return (
    <div>
      <p>Welcome to ABS training Diet, your ultimate destination for achieving your fitness goals with precision and expertise.</p>
      <div className='food'>
        <Link to="/Absveg">
          <button>VEG</button>
        </Link>
        <Link to="/Absnonveg">
          <button>NON-VEG</button>
        </Link>
      </div>
    </div>
  );
}

export default Absdiet;
