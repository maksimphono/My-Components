import {createContext, Context} from "react"

export default function() {
    const cont = createContext({"name" : "Max"});

    return 
        <cont.Provider value = {{name : "Yuli"}}>

        </cont.Provider>
}