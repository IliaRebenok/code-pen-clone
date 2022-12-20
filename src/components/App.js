import React, { useState } from 'react';
import MyTheme from './EditorTheme'
import Editor from './Editor';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';

const extensionsJS = [javascript({ jsx: true })];
const extensionsXML = [html({ html: true })];
const extensionsCSS = [css({ css: true })];

function App() {

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  const srcDoc = `
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>
  `

  return (
    <div>
      <div className='pane top-pane'>
        <Editor language='js' value={js} onChange={setJs} />
        <Editor language='css' value={css} onChange={setCss} />
        {/* <Editor language='html' value={html} onChange={() => setHtml} /> */}

        <div className='editor-container'>
          <div className='editor-title'>
            HTML
            <button>
              O/C
            </button>
          </div>
          <CodeMirror
            theme={MyTheme}
            onChange={setHtml}
            height="100%"
            width='100%'
            className='code-mirror-wrapper'
            extensions={extensionsXML}
            value={html}
            />
        </div>





      </div>
      <div className='pane'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          width='100%'
          height='100%'
        />
      </div>
    </div>
  )
}
export default App;
