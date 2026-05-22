import React from 'react';

export const ParamSlider = ({
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
  suffix = ''
}) => {
  return (
    <div className="slider-container" style={{ marginBottom: '14px' }}>
      <div className="slider-label-row">
        <span className="slider-name">{label}</span>
        <span className="slider-val">
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{ marginTop: '6px' }}
      />
    </div>
  );
};

export default ParamSlider;
