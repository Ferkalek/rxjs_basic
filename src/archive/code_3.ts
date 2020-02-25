import { Subject } from "rxjs";

let subject = new Subject();

subject.subscribe(
    data => addItem('Observer 1: ' + data),
    err => addItem('Error: ' + err),
    () => addItem('Completed'),
);

subject.next('first data was send');
subject.next('----- after first -----');

let observer2 = subject.subscribe(
    data => addItem('Observer 2: ' + data)
)

subject.next('second data was send');
subject.next('first data was send');

observer2.unsubscribe();

subject.next('last data was send');

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}