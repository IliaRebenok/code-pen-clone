
import { basicSetup, minimalSetup } from '@uiw/codemirror-extensions-basic-setup';
import { EditorView } from '@codemirror/view';
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

const view = new EditorView({
    parent: document.querySelector('#editor'),
    state,
});

const MyTheme = createTheme({
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

export default MyTheme;