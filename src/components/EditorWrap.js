
export default function EditorWrap(props) {
    return (
        <div className='editor-container'>
            <div className='editor-title'>
                {props.language}
                <button>
                    O/C
                </button>
            </div>
            {props.children}
        </div>
    )
}