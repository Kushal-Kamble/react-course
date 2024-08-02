import React from 'react';

const PassingDestructure = () => {
  const handleWelcome = (user) => {
    alert(`Hey, ${user}`);
  };

  const handleHover = () => {
    alert('Hey, Thanks for hovering over me');
  };

  return (
    <div>
      <h2>Passing Destruture Props</h2>
      <WelcomeUser
        onClick={() => handleWelcome('Kushal Web Developer')}
        onMouseEnter={handleHover}
      />
    </div>
  );
};

const WelcomeUser = ({ onClick, onMouseEnter }) => {
  const handleGreeting = () => {
    console.log('Hey Vishal, Welcome');
    alert('Hey Vishal, Welcome');
    onClick();
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={onClick}>
        On Click
      </button>
      <button className="btn btn-success ms-4" onMouseEnter={onMouseEnter}>
        Hover
      </button>
      <button className="btn btn-info ms-4" onClick={handleGreeting}>
        Hi
      </button>
    </div>
  );
};

export default PassingDestructure;
