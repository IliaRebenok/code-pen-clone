import s from './header.module.css'

export default function Header( props ) {

    return (
        <div className={s.headerWrap}>
            <button className={`${s.headerButton} ${ props.clear ? '' : s.bright}`} onClick={() => props.setClear(true)}>
                Clear all
            </button>
            <button className={`${s.headerButton} ${ props.undoLight ? s.bright : ""} `} onClick={() => props.setUndo(true)}>
                Undo clear
            </button>
        </div>
    )
}