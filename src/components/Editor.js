import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { tags as t } from '@lezer/highlight';

const myTheme = createTheme({
    theme: 'light',
    settings: {
        background: '#444',
        foreground: '#fff',
        caret: '#e022e0',
        selection: '#036dd626',
        selectionMatch: '#036dd626',
        lineHighlight: '#8a91991a',
        gutterBackground: '#666',
        gutterForeground: '#fff7',
    },
    styles: [
        { tag: t.comment, color: '#787b8099' },
        { tag: t.variableName, color: '#ff5' },
        { tag: [t.string, t.special(t.brace)], color: '#eee' },
        { tag: t.number, color: '#fafa' },
        { tag: t.bool, color: '#faf' },
        { tag: t.null, color: '#f6f' },
        { tag: t.keyword, color: '#ccc' },
        { tag: t.operator, color: '#fff6' },
        { tag: t.className, color: '#5c6166' },
        { tag: t.definition(t.typeName), color: '#eee' },
        { tag: t.typeName, color: '#5c6166' },
        { tag: t.angleBracket, color: '#5c6166' },
        { tag: t.tagName, color: '#5c6166' },
        { tag: t.attributeName, color: '#5c6166' },
    ],
});

const extensionsJS = [javascript({ jsx: true })];
const extensionsXML = [html({ html: true })];
const extensionsCSS = [css({ css: true })];

export default function Editor(props) {
    const extensions = props.language === 'js' ? extensionsJS :
        props.language === 'css' ? extensionsCSS :
            props.language === 'html' ? extensionsXML : extensionsJS;

    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);


    return (
        <div className='editor-container'>
            <div className='editor-title'>
                {props.language}
                <button>
                    O/C
                </button>
            </div>
            <CodeMirror
                theme={myTheme}
                value={props.value}
                height="100%"
                width='100%'
                className='code-mirror-wrapper'
                extensions={extensions}
                onChange={props.setValue}
            />
        </div>
    );
}