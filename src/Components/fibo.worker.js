export default function() {
    this.onmessage = (message) => {
        const nbr = message.data;
        let result = 1;
        
        for (let i = 1; i < nbr; i++){
            result += i;
        }
        setTimeout(() => postMessage("Counted result from worker : " + result), 0);
    }
}