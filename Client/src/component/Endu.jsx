import React from 'react';
import { Link } from 'react-router-dom';

function Endu() {
  return (
    <div>
      <p>Welcome to Endurance Training Diet, your ultimate destination for achieving your fitness goals with precision and expertise.</p>
      <div className='food'>
        <Link to="/Enduveg">
          <button>VEG</button>
        </Link>
        <Link to="/Endunonveg">
          <button>NON-VEG</button>
        </Link>
      </div>
    </div>
  );
}

export default Endu;
