import { basicSetup } from '@uiw/codemirror-extensions-basic-setup';
import { EditorState } from '@codemirror/state';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

const state = EditorState.create({
    doc: 'my source code',
    extensions: [
        basicSetup({
            foldGutter: false,
            dropCursor: false,
            allowMultipleSelections: false,
            indentOnInput: false,
            
        }),
    ],
});


const MyTheme = createTheme({
    theme: 'dark',
    settings: {
        background: '#444',
        foreground: '#fefefe',
        caret: '#e022e0',
        selection: '#036dd626',
        selectionMatch: '#036dd626',
        lineHighlight: '#8a91991a',
        gutterBackground: '#555',
        gutterForeground: '#888',
        
    },
    styles: [
        { tag: t.comment, color: '#7888cc' },
        { tag: t.variableName, color: '#ff5' },
        { tag: [t.string, t.special(t.brace)], color: '#fafa' },
        { tag: t.number, color: '#fafa' },
        { tag: t.bool, color: '#faf' },
        { tag: t.null, color: '#f6f' },
        { tag: t.keyword, color: '#ffaa' },
        { tag: t.operator, color: '#fff6' },
        { tag: t.className, color: '#ffaa' },
        { tag: t.definition(t.typeName), color: '#eee' },
        { tag: t.typeName, color: '#f6fa' },
        { tag: t.angleBracket, color: '#f6fa' },
        { tag: t.tagName, color: '#f6fa' },
        { tag: t.attributeName, color: '#6ffa' },
    ],
});

export default MyTheme;