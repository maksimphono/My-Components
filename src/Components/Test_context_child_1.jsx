import { useEffect } from "react";
import {useContext} from "react";

export default function() {
    const data = useContext(cont);

    useEffect(() => console.table(data), []);

    return (
        <div>
            {data}
        </div>
    )
}