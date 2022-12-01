import "./style.css";

function NamedSection({children, ...props}) {
    return (
        <section {...props}>
            {children}
        </section>
    )
}

export default NamedSection;