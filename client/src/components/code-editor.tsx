import React, { useRef, useEffect } from 'react';
import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import styles from './code-editor.module.sass';

interface CodeEditorProps {
  initialValue: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const editorRef = useRef<any>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor;

    monacoEditor.onDidChangeModelContent(() => {
      onChange(getValue());
    });

    monacoEditor.getModel()?.updateOptions({ tabSize: 2 });
  };

  const onFormatClick = () => {
    const unformatted = editorRef.current.getModel().getValue();

    const formatted = prettier.format(unformatted, {
      parser: 'babel',
      plugins: [parser],
      useTabs: false,
      semi: true,
      singleQuote: true,
      trailingComma: 'none',
    });
    // .replace(/\n$/, '');

    editorRef.current.setValue(formatted);
  };

  useEffect(() => {
    if (!sectionRef.current) return;
  }, []);

  return (
    <section className={styles.wrapper}>
      <button className={styles.format} onClick={onFormatClick}>
        Format
      </button>
      <MonacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
        height="100%"
        language="javascript"
        theme="vs-dark"
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </section>
  );
};

export default CodeEditor;
