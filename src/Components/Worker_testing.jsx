import WorkerBuilder from "./worker-builder.js";
import FiboWorker from "./fibo.worker.js";
import {useEffect} from "react";

const workerInstance = new WorkerBuilder(FiboWorker);

export default function () {
    useEffect(() => {
        workerInstance.onmessage = (message) => {
            console.log("Message from worker ", message.data);
        }
    }, []);
    return (
        <button onClick = {() => workerInstance.postMessage(799999999999)}>
            Send Message
        </button>
    )
}