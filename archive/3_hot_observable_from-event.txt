import { Observable, fromEvent } from 'rxjs';
import { addItem } from './additional/add-item';

const observable = fromEvent(document, 'mousemove');

setTimeout(() => {
    let subscribtion = observable
        .subscribe((x: any) => addItem(x));
}, 2000);

