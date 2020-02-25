import { BehaviorSubject } from "rxjs";

let bSubject = new BehaviorSubject('init data');

bSubject.subscribe(
    data => addItem('Observer 1: ' + data),
    err => addItem('Error: ' + err),
    () => addItem('Completed'),
);

bSubject.next('first data was send');
bSubject.next('----- after first -----');

let observer2 = bSubject.subscribe(
    data => addItem('Observer 2: ' + data)
)

bSubject.next('second data was send');
bSubject.next('first data was send');

observer2.unsubscribe();

bSubject.next('last data was send');

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}