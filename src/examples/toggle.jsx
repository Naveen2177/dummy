import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isToggled ? 'ON' : 'OFF'}
      </button>
      <p>{isToggled ? 'Toggle is ON' : 'Toggle is OFF'}</p>
    </div>
  );
};

export default ToggleButton;
