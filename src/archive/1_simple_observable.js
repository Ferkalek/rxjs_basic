import { Observable } from 'rxjs'

let observable = Observable.create((observer: any) => {
    observer.next('Hi everyone!');
    observer.next('How are you?');

    setInterval(() => observer.next('I am fine!'), 2000);

    // observer.error('Something was wrong!');
    // observer.complete();
    
    // observer.next('I am fine!');
});

let forUnsubscribe = observable.subscribe(
    (x: any) => addItem(x), // normal function
    (error: any) => addItem(error), // 2 always error function
    () => addItem('Completed') // 3 always complete function
);

let secondObserver = observable.subscribe(
    (x: any) => addItem('second plase where we subscribe on OBSERVABLE --- ' + x)
);


forUnsubscribe.add(secondObserver); // if we want unsubscribe from bougth subscribtions on one time


setTimeout(() => forUnsubscribe.unsubscribe(), 6001);

// -----------------------------------------------------------
function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

document.getElementById("btn").addEventListener('click', () => secondObserver.unsubscribe());