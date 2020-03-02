import { interval } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
import { addItem } from './additional/add-item';

const observer = {
    next: function(value: any) {
        addItem('NEXT: -- ' + value);
    },
    error: function(error: any) {
        addItem('ERROR:' + error);
    },
    complete: function() {
        addItem('COMPLETE');
    },
};

let observable = interval(1000);

let subscription = observable
    .pipe(
        map((d: any) => ' It is nev price ' + (d * 2) + ',00 USD'),
        throttleTime(2000)
    )
    .subscribe(observer);

    setTimeout(() => subscription.unsubscribe(), 10001);