import { useEffect } from "react";
import {useContext} from "react";
import {MyCont} from "./Test_context.jsx";

export default function() {
    const data = useContext(MyCont);

    useEffect(() => console.table(data), []);

    return (
        <div>
            {data.name}
        </div>
    )
}