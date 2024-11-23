import React, { useEffect, useRef } from 'react';
import JSONEditor from 'jsoneditor';

import 'jsoneditor/dist/jsoneditor.css';

interface Props {
  schema: object;
  onChange: (json: object) => void;
}

const JsonEditor: React.FC<Props> = ({ schema, onChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const editorInstance = useRef<JSONEditor | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      editorInstance.current = new JSONEditor(editorRef.current, {
        mode: 'code',
        onChange: () => {
          try {
            const updatedJson = editorInstance.current?.get();
            if (updatedJson) onChange(updatedJson);
          } catch (e) {
            console.error('Invalid JSON:', e);
          }
        },
      });
      editorInstance.current.set(schema);

      
    }
    return () => {
      editorInstance.current?.destroy();
    };
  }, [schema, onChange]);

  return <div className="h-full" ref={editorRef}></div>;
};

export default JsonEditor;
