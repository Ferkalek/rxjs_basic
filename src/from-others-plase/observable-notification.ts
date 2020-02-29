import { Observable } from 'rxjs';
import { addItem } from '../additional/add-item';

const notificationObservable = Observable.create();

export const observer = notificationObservable.subscribe((data: any) => addItem(data))