import React from 'react';
import { Param, Model, Props } from './types';
import ParamEditor from './components/ParamsEditor';
import './App.css'

const sampleParams: Param[] = [
  {
    id: 1,
    name: "Назначение",
    type: "text",
  },
  {
    id: 2,
    name: "Длина",
    type: "text"
  },
  {
    id: 3,
    name: "Number",
    type: "number"
  },
];

const sampleModel: Model = {
  paramValues: [
    {
      paramId: 1,
      value: "повседневное"
    },
    {
      paramId: 2,
      value: "маски"
    },
    {
      paramId: 3,
      value: 0
    }
  ],
  colors: []
};

function App() {
  const paramEditorRef = React.useRef<Props>(null);
  
  const handleGetModel = () => {
    if (paramEditorRef.current) {
      const currentModel = paramEditorRef.current.getModel();
      console.log('Current Model:', currentModel);
      alert('Check console for the current model!');
    }
  };
  
  return (
    <div className='app'>
  
          <ParamEditor
            ref={paramEditorRef}
            params={sampleParams} 
            model={sampleModel} 
          />
          
            <button
              onClick={handleGetModel}
              className="button"
            >
              Get Current Model
            </button>
        </div>
  );
}

export default App;