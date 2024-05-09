import React from 'react';
import { Link } from 'react-router-dom';

function Flexdiet() {
  return (
    <div>
      <p>Welcome to Flexibility and Mobility Diet, your ultimate destination for achieving your fitness goals with precision and expertise.</p>
      <div className='food'>
        <Link to="/Flexveg">
          <button>VEG</button>
        </Link>
        <Link to="/Flexnonveg">
          <button>NON-VEG</button>
        </Link>
      </div>
    </div>
  );
}

export default Flexdiet;
