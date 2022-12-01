/*
    Instruction : 

    Install package:
    npm install --force @koale/useworker

    useWorker(fn, option)   hook takes in 
        fn (expensive function, that must be executed)
        options (object with values : 
            timeout - time to stop worker execution
            remoteDependencies - array of strings, contains the remote dependencies needed to run the worker
            autoTerminate - bool kill the worker once it's done
        )
    and returns Array of 2 values : expensive function promice and controller:
        controller is an Object of 2 keys: status (status of resurned callback) and kill (callback to terminate worker)
*/

import {useEffect, useMemo, useCallback} from "react";
import {useWorker} from "@koale/useworker";

export default function Test_useWorker(props){
    const arr = useMemo(() => [...Array(9999999)].map(e => Math.random() * 1000000), []);
    const sortFn = useCallback(array => array.sort(), []);

    const [workerFn] = useWorker(sortFn);

    const runSort = async () => {
        const result = await workerFn(arr);
        alert("Worker end up sort with result : ");
        console.table(result.slice(0, 6));
    };

    return (
        <button onClick = {runSort}>
            Sort
        </button>
    );
}