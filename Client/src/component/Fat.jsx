import React from 'react';
import { Link } from 'react-router-dom';

function Fat() {
  return (
    <div>
      <div>Fat</div>
      <div className="button-container">
        <Link to="/Fveg">
          <button>Veg</button>
        </Link>
        <Link to="/Fnonveg">
          <button>Non-Veg</button>
        </Link>
      </div>
    </div>
  );
}

export default Fat;
