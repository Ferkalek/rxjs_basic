import { fromEvent } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

const inp = document.getElementById('inp')
const inp2 = document.getElementById('inp2')
const result = document.getElementById('result');

const observable1 = fromEvent(inp, 'input');
const observable2 = fromEvent(inp2, 'input');

observable1
.pipe(
    mergeMap((event1: any) => {
        return observable2
            .pipe(map(
                (event2: any) => {
                    return event2.target.value + ' ' + event1.target.value;
                }
            ))
    })
)
.subscribe((data: any) => {
    result.textContent = data;
});