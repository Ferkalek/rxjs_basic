import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from "rxjs";
import { addItem } from './additional/add-item';

// let subject = new BehaviorSubject('----------- START ------------');
// let subject = new Subject()
let subject = new ReplaySubject(2)
// let subject = new AsyncSubject();

subject.subscribe(
    data => addItem('Observer 1: ' + data),
    err => addItem('Error: ' + err),
    () => addItem('Completed'),
);

// for AsyncSubject - does not have error function
// subject.subscribe(
//     data => addItem('Observer 1: ' + data),
//     () => addItem('Completed'),
// );

subject.next('text 1');
subject.next('text 2');
subject.next('text 3');
subject.next('text 4');

let observer2 = subject.subscribe(
    data => addItem('--------- Observer ---- 2: ' + data)
)

// subject.complete(); // for AsyncSubject - after complete show last value

subject.next('text 5');
subject.next('text 6');

observer2.unsubscribe();

subject.next('text 7');
subject.next('text 8');