import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";

import "codemirror/mode/javascript/javascript";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

export default class CodeEditor extends React.Component {
  editor = null;

  onUpdate = () => {
    this.updateTokenLines();
  };

  onEditorDidMount = editor => {
    this.editor = editor;
  };

  updateTokenLines() {
    // TODO: Draw lines for tokens, fire event.
  }

  render() {
    return (
      <CodeMirror
        value=""
        options={{ mode: "javascript", theme: "material" }}
        editorDidMount={this.onEditorDidMount}
        onUpdate={this.onUpdate}
      />
    );
  }
}
