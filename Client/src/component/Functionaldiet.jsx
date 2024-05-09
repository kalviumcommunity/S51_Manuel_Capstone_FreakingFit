import React from 'react';
import { Link } from 'react-router-dom';

function Functionaldiet() {
  return (
    <div>
      <p>Welcome to Functional Training Diet, your ultimate destination for achieving your fitness goals with precision and expertise.</p>
      <div className='food'>
        <Link to="/Funcveg">
          <button>VEG</button>
        </Link>
        <Link to="/Funcnonveg">
          <button>NON-VEG</button>
        </Link>
      </div>
    </div>
  );
}

export default Functionaldiet;

