import React from 'react';
import { Link } from 'react-router-dom'; // Import Link


function Musclestrength() {
  return (
    <div>
      <p>Welcome to Muscle strength, your ultimate destination for achieving your fitness goals with precision and expertise.</p>
      <div className='food'>
        <Link to="/Mveg"> {/* Link to Veg page */}
          <button>VEG</button>
        </Link>
        <Link to="/Mnonveg"> {/* Link to NonVeg page */}
          <button>NON-VEG</button>
        </Link>
      </div>
    </div>
  );
}

export default Musclestrength;
