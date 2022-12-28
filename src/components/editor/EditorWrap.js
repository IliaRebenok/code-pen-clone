import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import s from './editor.module.css'

export default function EditorWrap(props) {

    const [open, setOpen] = useState(true);

    function changeButtonState() {
        setOpen(prevOpen => ! prevOpen);
        console.log(`button is pressed, expanded is ${open}`)
    }
    
    return (
        <div className={`${s.editorContainer} ${open ? '' : s.collapsed}`}>
            <div className={s.editorTitle}>
                {props.language}                
                <button 
                    className={s.expandButton} 
                    onClick={changeButtonState}>
                    <FontAwesomeIcon icon={open ? faExpandAlt : faCompressAlt}/>
                </button>
            </div>
            {props.children}
        </div>
    )
}

