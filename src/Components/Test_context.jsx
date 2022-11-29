import {createContext, Context} from "react"
import Child from "./Test_context_child_1.jsx";
import { useEffect, useState } from "react";
import {useContext} from "react";

export const MyCont = createContext();

export default function() {
    const [name, setName] = useState({name : "Max"});
    return (
        <MyCont.Provider value = {{name : "Yuli", age : 27}}>
            <Child>
            </Child>
        </MyCont.Provider>
    )
}

