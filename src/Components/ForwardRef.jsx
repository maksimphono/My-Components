import { forwardRef, useRef } from "react";

const FancyButton = forwardRef(({children, onClick}, ref) => {
    return <button onClick = {() => alert("Click")} ref = {ref} className = "FancyButton">{children}</button>
});

export default function () {
    const btnRef = useRef();

    const handleClick = () => {
        console.log(btnRef.current);
    }

    return (
        <>
            <FancyButton ref = {btnRef}>
                Im button
            </FancyButton>
            <button onClick={handleClick}>Focus</button>
        </>
    );
}