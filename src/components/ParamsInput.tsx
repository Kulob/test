import React from 'react';
import { Param } from '../types';
import '../App.css'

interface ParamInputProps {
  param: Param;
  value: string | number;
  onChange: (paramId: number, value: string | number) => void;
}

const ParamInput: React.FC<ParamInputProps> = ({ param, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const newValue = param.type === 'number' 
      ? e.target.value === '' ? '' : Number(e.target.value)
      : e.target.value;
    onChange(param.id, newValue);
  };

  if (param.type === 'list' && param.options) {
    return (
      <div >
        <label 
          htmlFor={`param-${param.id}`} 
          
        >
          {param.name}
        </label>
        <select
          id={`param-${param.id}`}
          value={value}
          onChange={handleChange}
          
        >
          <option value="">Select {param.name.toLowerCase()}</option>
          {param.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div style={{marginBottom:"5px"}}>
      <label 
        htmlFor={`param-${param.id}`} 
        
      >
        {param.name}
      </label>
      <input
        id={`param-${param.id}`}
        type={param.type}
        value={value}
        onChange={handleChange}
       className='input'
        placeholder={`Enter ${param.name.toLowerCase()}`}
      />
    </div>
  );
};

export default ParamInput;