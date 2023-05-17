import React from 'react';
import './schemecolor.css';

const SchemeColor = ({ color }) => (
  <div className="scheme-color" style={{ backgroundColor: color }}>
    {color}
  </div>
);
export default SchemeColor;
