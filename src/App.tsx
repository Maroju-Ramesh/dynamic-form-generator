

import React, { useState } from 'react';
import SplitScreen from './components/SplitScreen';
import JsonEditor from './components/JsonEditor';
import FormGenerator from './components/FormGenerator';
import { FormSchema } from './types';

const defaultSchema: FormSchema = {
  formTitle: 'Sample Form',
  fields: [],
};

function App() {
  const [schema, setSchema] = useState<FormSchema>(defaultSchema);

  return (
    <SplitScreen
      left={
        <JsonEditor schema={schema} onChange={(json) => setSchema(json as FormSchema)} />
      }
      right={<FormGenerator schema={schema} />}
    />
  );
}

export default App;
