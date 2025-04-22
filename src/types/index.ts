export interface Param {
  id: number;
  name: string;
  type: 'text' | 'number' | 'list';
  options?: string[];
}

export interface ParamValue {
  paramId: number;
  value: string | number;
}

export interface Color {
  id: number;
  name: string;
}

export interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

export interface Props {
  params: Param[];
  model: Model;
}

export interface ParamEditorState {
  paramValues: ParamValue[];
}