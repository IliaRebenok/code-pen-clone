import React, { useState } from 'react';
import MyTheme from './EditorTheme'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import EditorWrap from './EditorWrap';
import { EditorView } from '@codemirror/view';

const extensionsJS = [javascript({ jsx: true }), EditorView.lineWrapping];
const extensionsXML = [html({ html: true  }), EditorView.lineWrapping];
const extensionsCSS = [css({ css: true }), EditorView.lineWrapping];

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

        <EditorWrap language='JS'>
        <CodeMirror
            theme={MyTheme}
            onChange={setJs}
            height="100%"
            width='100%'
            className='code-mirror-wrapper'
            extensions={extensionsJS}
            value={js}

            />
        </EditorWrap>

        <EditorWrap language='CSS'>
        <CodeMirror
            theme={MyTheme}
            onChange={setCss}
            height="100%"
            width='100%'
            className='code-mirror-wrapper'
            extensions={extensionsCSS}
            value={css}
            />
        </EditorWrap>

        <EditorWrap language='HTML'>
        <CodeMirror
            theme={MyTheme}
            onChange={setHtml}
            height="100%"
            className='code-mirror-wrapper'
            extensions={extensionsXML}
            value={html}
            
            />
        </EditorWrap>

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
