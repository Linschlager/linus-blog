import React from 'react';

const Customization = () => {
  return (
    <>
      <label>
        <input type="checkbox"/>
        Dark Mode
      </label>

      <style jsx>{`
        label {
          user-select: none;
          font-size: 22pt;        
        }
      `}</style>
    </>
  );
};

export default Customization;
