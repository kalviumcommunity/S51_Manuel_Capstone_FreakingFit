import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import "./Strengthdiet.css";

function Strengthdiet() {
  return (
    <div>
      <p>Welcome to StrengthDiet, your ultimate destination for achieving your fitness goals with precision and expertise.</p>
      <div className='food'>
        <Link to="/Veg"> {/* Link to Veg page */}
          <button>VEG</button>
        </Link>
        <Link to="/NonVeg"> {/* Link to NonVeg page */}
          <button>NON-VEG</button>
        </Link>
      </div>
    </div>
  );
}

export default Strengthdiet;
