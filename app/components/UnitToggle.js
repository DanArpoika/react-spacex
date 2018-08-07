import React from 'react';
import styled from 'styled-components';

const UnitToggle = ({ units, toggleUnit }) => {
  const checked = units === 'metric';

  const toggle = (e) => {
    toggleUnit(e);
  };

  return (
    <div>
      <CheckLabel htmlFor="toggle" units={units}>
        <div className="label label--us">US</div>
        <input type="checkbox" id="toggle" checked={checked} onChange={toggle} />
        <span className="slider" />
        <div className="label label--metric">Metric</div>
      </CheckLabel>
    </div>
  );
};

export default UnitToggle;

const CheckLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 56px;
  height: 24px;
  margin: 0 50px 0 24px;
  cursor: pointer;

  input {
    display: none;
  }

  .slider {
    position: absolute;
    height: 2px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #ccc;
    transition: 0.4s ease;
  }

  .slider::before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
    transition: 0.4s;
    margin: auto;
    border: 1px solid rgba(255, 255, 255, 0.24);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(40px);
  }

  .label {
    position: absolute;
    top: 0;
    margin: auto;
    transform: translateY(60%);
    font-family: var(--font-condensed);
    font-size: 0.675rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    line-height: 1;
    color: var(--gray);
    transition: 0.4s ease;
    z-index: -1;
  }

  .label--us {
    right: calc(100% + 0.5rem);
  }

  .label--metric {
    left: calc(100% + 0.5rem);
  }

  .label--${props => props.units} {
    color: var(--black);
  }
`;
