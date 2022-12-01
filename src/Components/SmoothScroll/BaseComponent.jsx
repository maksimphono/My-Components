import NamedSection from "./ScrollSections/ScrollSections.jsx";
import NavBar from "./Navigation.jsx";

export default function () {
    return (
        <>
            <NavBar />
            <NamedSection name = "section1">Section 1</NamedSection>
            <NamedSection name = "section2">Section 2</NamedSection>
            <NamedSection name = "section3">Section 3</NamedSection>
        </>
    );
}