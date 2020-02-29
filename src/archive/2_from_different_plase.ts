import { observer } from './from-others-plase/observable-notification';
import { pushNotification } from './from-others-plase/listener-1';

observer.next('Push notification from CODE file');

setTimeout(() => pushNotification('Add new text'), 1500);