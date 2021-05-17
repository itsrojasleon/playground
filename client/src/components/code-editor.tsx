import React, { useRef, useEffect } from 'react';
import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
import prettier from 'prettier';
import babelParser from 'prettier/parser-babel';
import markdownParser from 'prettier/parser-markdown';
import type { Languages } from 'state/types';
import styles from './code-editor.module.sass';

interface CodeEditorProps {
  initialValue: string;
  onChange: (value: string) => void;
  language: Languages;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  initialValue,
  onChange,
  language,
}) => {
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
      // `babel` will format javascript/typescript code
      parser: language === 'markdown' ? 'markdown' : 'babel',
      // `babelParser` will work with javascript/typescript code
      plugins: [language === 'markdown' ? markdownParser : babelParser],
      useTabs: false,
      semi: true,
      singleQuote: true,
      trailingComma: 'none',
    });

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
        language={language}
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
