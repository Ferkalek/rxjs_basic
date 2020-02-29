import { observer } from './observable-notification';

export const pushNotification = (data: string) => {
    observer.next(data);
}