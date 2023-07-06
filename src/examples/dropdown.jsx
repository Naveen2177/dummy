import React, { useState } from 'react';

const DropdownToggle = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown">
      <button
        className="dropdown-toggle"
        onClick={handleToggle}
        aria-expanded={isDropdownOpen}
      >
        Dropdown
      </button>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownToggle;
