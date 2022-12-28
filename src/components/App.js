import React, { useState, useEffect } from 'react';
import MyTheme from './editor/EditorTheme'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import EditorWrap from './editor/EditorWrap';
import { EditorView } from '@codemirror/view';
import useLocalStorage from '../hooks/UseLocalStorage'
import Header from './header/Header';

const extensionsJS = [javascript({ jsx: true }), EditorView.lineWrapping];
const extensionsXML = [html({ html: true }), EditorView.lineWrapping];
const extensionsCSS = [css({ css: true }), EditorView.lineWrapping];
let tmp = {
  Html: '',
  Js: '',
  Css: ''
};

function App() {

  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');
  const [clear, setClear] = useState(false);
  const [undo, setUndo] = useState(false);
  const [undoLight, setUndoLight] = useState(false);


  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (html !== '' || css !== '' || js !== '') {
        tmp = {
          Html: '',
          Js: '',
          Css: ''
        };
        setUndoLight(false);
      }
      setSrcDoc(`
        <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>
      `)
      
      console.log(tmp);
      console.log('from effect');
    }, 300)

    return () => clearTimeout(timeOut)

  }, [html, css, js])

  if (clear) {
    if (html === '' && css === '' && js === '') {   
      console.log('trying to clear CLEAR')   
    } else {
      tmp = {
        Html: html,
        Js: js,
        Css: css
      };
      setUndoLight(true);
    }

    console.log(tmp)
    console.log('from clear')

    setHtml('');
    setJs('');
    setCss('');

    setClear(false);
    console.log('clearing data');
  }

  if (undo) {
    if (tmp.Html === '' && tmp.Css === '' && tmp.Js === ''){
      setUndo(false);
      console.log('cannot undo what was not done %)')
    } else {
    setHtml(tmp.Html);
    setJs(tmp.Js);
    setCss(tmp.Css);
    setUndo(false);
    setUndoLight(false);
    console.log('undo clearing data');
    }
  }

  return (
    <div>
      <Header setClear={setClear} clear={clear} setUndo={setUndo} undoLight={undoLight} />
      <div className='pane top-pane'>
        <EditorWrap language='JS'>
          <CodeMirror
            theme={MyTheme}
            onChange={setJs}
            height="100%"
            width='100%'
            className='codeMirrorWrapper'
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
            className='codeMirrorWrapper'
            extensions={extensionsCSS}
            value={css}
          />
        </EditorWrap>
        <EditorWrap language='HTML'>
          <CodeMirror
            theme={MyTheme}
            onChange={setHtml}
            height="100%"
            className='codeMirrorWrapper'
            extensions={extensionsXML}
            value={html}
          />
        </EditorWrap>
      </div>
      <div height='100px' className='pane'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          width='100%'
        />
      </div>
    </div>
  )
}
export default App;
