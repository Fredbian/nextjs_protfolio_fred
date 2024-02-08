import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold hover:text-white ${
          active
            ? 'text-white border-b border-primary-500'
            : 'text-[#ADB7BE] border-b border-primary-500'
        }`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
