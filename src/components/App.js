import React, { useState } from 'react';
import Editor from './Editor';


function App() {

  const [html,setHtml] = useState('');
  const [css,setCss] = useState('');
  const [js,setJs] = useState('');

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
        <Editor language='css' value={css} onChange={setCss}  />
        <Editor language='html' value={html} onChange={setHtml} />
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
