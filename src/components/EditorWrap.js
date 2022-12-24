import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

export default function EditorWrap(props) {

    const [open, setOpen] = useState(true);

    function changeButtonState() {
        setOpen(prevOpen => ! prevOpen);
        console.log(`button is pressed, expanded is ${open}`)
    }
    
    return (
        <div className={`editor-container ${open ? '': 'collapsed'}`}>
            <div className='editor-title'>
                {props.language}                
                <button 
                    className='expand-button' 
                    onClick={changeButtonState}>
                    <FontAwesomeIcon icon={open ? faExpandAlt : faCompressAlt}/>
                </button>
            </div>
            {props.children}
        </div>
    )
}

github.com/IliaRebenok/html-css-js-editor