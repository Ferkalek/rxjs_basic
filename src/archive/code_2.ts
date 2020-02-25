import { fromEvent } from "rxjs";
let count = 0;
const nodeLI = document.createElement("li");

nodeLI.setAttribute('id', 'li-id');
document.getElementById("output").appendChild(nodeLI);

let observable = fromEvent(document, 'mousemove');

setTimeout(() => {
    let sub = observable.subscribe((x: any) => {
        count++;
        printCount('Count: ' + count);
    });
}, 3000);

function printCount(val: string) {
    const elem = document.getElementById('li-id');
    elem.innerText = val;
}