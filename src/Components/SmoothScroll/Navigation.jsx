import {Link} from "react-scroll";

export default function () {
    return (
        <nav>
            <div>
                <Link to = "section1" smooth = {true} duration = {500}>Sect 1</Link>
                <Link to = "section2" smooth = {true} duration = {500}>Sect 2</Link>
                <Link to = "section3" smooth = {true} duration = {500}>Sect 3</Link>
            </div>
        </nav>
    )
}