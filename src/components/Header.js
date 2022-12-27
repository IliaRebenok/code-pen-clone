
export default function Header( {setClear, clear, setUndo} ) {

    return (
        <div className="header-wrap">
            <button className={`header-button ${ clear ? '' : "bright"}`} onClick={() => setClear(true)}>
                Clear all
            </button>
            <button className={`header-button `} onClick={() => setUndo(true)}>
                Undo clear
            </button>
        </div>
    )
}