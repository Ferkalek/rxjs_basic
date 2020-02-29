import { Observable } from 'rxjs'

const button = document.getElementById("btn");

let observable = Observable.create((observer: any) => {
    observer.next('Hi everyone!');
    observer.next('How are you?');

    setInterval(() => observer.next('I am fine!'), 2000);

    // observer.error('Something was wrong!');
    // observer.complete();
    
    // observer.next('I am fine!');
});


// ------------------------------------------------------

let observable_3 = Observable.create();
let newObserver = observable_3.subscribe(
    (d: any) => addItem('==> ' + d),
    (err: string) => {
        addItem('ERROR: ' + err);
        console.log('newObserver.closed', newObserver.closed);
    },
    () => {
        addItem('Complete observable');
        console.log('newObserver.closed', newObserver.closed);
    }
);
let counter = 0;

console.log('--------', newObserver.closed);

setInterval(() => {
    counter++;
    newObserver.next('3d observable -- emit -- ' + counter);
}, 1000);

setTimeout(() => {
    newObserver.complete('3d observable');
    disabledBtn();
}, 6001);


// ------------------------------------------------------


let forUnsubscribe = observable.subscribe(
    (x: any) => addItem(x), // normal function
    (error: any) => addItem(error), // 2 always error function
    () => addItem('Completed') // 3 always complete function
);

let secondObserver = observable.subscribe(
    (x: any) => addItem('second plase where we subscribe on OBSERVABLE --- ' + x),
    (err: any) => addItem('error from SECOND observable ' + err),
    () => addItem('complete from SECOND observable'),
);

secondObserver.next('--- SUPER PUPER NEW TEXT ---');
secondObserver.error('--- ERROR ---');

forUnsubscribe.add(secondObserver); // if we want unsubscribe from bougth subscribtions on one time


setTimeout(() => forUnsubscribe.unsubscribe(), 6001);

// -----------------------------------------------------------
function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

function disabledBtn() {
    button.setAttribute('disabled', 'disabled');
}

button.addEventListener('click', (e: any) => {
    newObserver.unsubscribe();
    console.log('newObserver.closed', newObserver.closed);
    e.target.disabled = true;
});