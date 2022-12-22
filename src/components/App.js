import React, { useState } from 'react';
import MyTheme from './EditorTheme'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import EditorWrap from './EditorWrap';
import { EditorView } from '@codemirror/view';
import useLocalStorage from '../hooks/UseLocalStorage'
import { useEffect } from 'react';

const extensionsJS = [javascript({ jsx: true }), EditorView.lineWrapping];
const extensionsXML = [html({ html: true }), EditorView.lineWrapping];
const extensionsCSS = [css({ css: true }), EditorView.lineWrapping];


function App() {

  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`
        <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>
      `)
    }, 300)

    return () => clearTimeout(timeOut) 
    
  }, [html, css, js])


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
