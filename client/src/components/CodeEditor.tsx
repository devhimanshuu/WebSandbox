import { useCallback, useState } from "react";
import { dracula } from "@uiw/codemirror-theme-dracula";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
const CodeEditor = () => {
  const [value, setValue] = useState("console.log('hello world!');");
  const onChange = useCallback((val: string) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <CodeMirror
      value={value}
      height="500px"
      width="500px"
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
      theme={dracula}
    />
  );
};

export default CodeEditor;
