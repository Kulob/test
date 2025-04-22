import  { useState, forwardRef, useImperativeHandle } from 'react';

import {  Model, Props } from '../types';
import ParamInput from './ParamsInput';

const ParamEditor = forwardRef<{ getModel: () => Model }, Props>((props, ref) => {
  const [paramValues, setParamValues] = useState([...props.model.paramValues]);
  
  const handleParamChange = (paramId: number, value: string | number) => {
    setParamValues(prevValues => {
      const paramValueIndex = prevValues.findIndex(prev => prev.paramId === paramId);
      const newParamValues = [...prevValues];
      
      if (paramValueIndex >= 0) {
        newParamValues[paramValueIndex] = { ...newParamValues[paramValueIndex], value };
      } else {
        newParamValues.push({ paramId, value });
      }
      
      return newParamValues;
    });
  };
  
  useImperativeHandle(ref, () => ({
    getModel: () => ({
      ...props.model,
      paramValues
    })
  }));
  
  
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <h2>Редактирование модели</h2>
      
      <div>
        {props.params.map(param => {
          const paramValue = paramValues.find(prev => prev.paramId === param.id);
          const value = paramValue ? paramValue.value : param.type === 'number' ? '' : '';
          
          return (
            <ParamInput
              key={param.id}
              param={param}
              value={value}
              onChange={handleParamChange}
            />
          );
        })}
      </div>
    </div>
  );
});

ParamEditor.displayName = 'ParamEditor';

export default ParamEditor;