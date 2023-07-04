export function DeleteButton({ text, onClick }) {
    return <button className="delete-btn" onClick={onClick}>{text}</button>
}

export function FilterButton({ text, isActive, onClick }) {
    return <button
        className={isActive ? "active-filter-btn" : "filter-btn"}
        onClick={onClick}>
        {text}
        </button>
}