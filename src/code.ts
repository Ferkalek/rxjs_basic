import { Observable } from 'rxjs';
import { addItem } from './additional/add-item';

const observer = {
    next: function(value: any) {
        addItem('NEXT:' + value);
    },
    error: function(error: any) {
        addItem('ERROR:' + error);
    },
    complete: function() {
        addItem('COMPLETE');
    },
};

Observable.create(function(obs: any) {
    obs.next('A value 1');
    obs.error('something hepened');
    obs.next('Next value');
})
    .subscribe(observer);
