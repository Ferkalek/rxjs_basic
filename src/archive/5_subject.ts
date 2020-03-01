import { Subject } from "rxjs";
import { addItem } from './additional/add-item';

let subject = new Subject();

subject.subscribe(
    data => addItem('Observer 1: ' + data),
    err => addItem('Error: ' + err),
    () => addItem('Completed'),
);

subject.next('text 1');
subject.next('text 2');

let observer2 = subject.subscribe(
    data => addItem('--------- Observer ---- 2: ' + data)
)

subject.next('text -- 3');
subject.next('text -- 4');

observer2.unsubscribe();

subject.next('text .... 5');
subject.next('text .... 6');