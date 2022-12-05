export default function ({children, open, closeMe}) {
    if (open) return (
        <>
            <div className="overlay" />
            <div className = "fancy-modal">
                <button onClick = {closeMe}>X</button>
                <p>{open && children}</p>
            </div>
        </>
    )
}