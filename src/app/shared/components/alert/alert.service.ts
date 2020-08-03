import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

import { Alert, AlertType } from './alert';

@Injectable({ providedIn: 'root' })
export class AlertService {

  alertSubject: Subject<Alert> = new Subject<Alert>();
  keepAfertRouteChange = false;

  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfertRouteChange) {
          this.keepAfertRouteChange = false
        } else {
          this.clear();
        }
      }
    })
  }

  sucess(message: string, keepAfertRouteChange: boolean = false) {
    this.alert(AlertType.SUCESS, message, keepAfertRouteChange);
  }

  warning(message: string, keepAfertRouteChange: boolean = false) {
    this.alert(AlertType.WARNING, message, keepAfertRouteChange);
  }

  danger(message: string, keepAfertRouteChange: boolean = false) {
    this.alert(AlertType.DANGER, message, keepAfertRouteChange);
  }

  info(message: string, keepAfertRouteChange: boolean = false) {
    this.alert(AlertType.INFO, message, keepAfertRouteChange);
  }

  private alert(alertType: AlertType, message: string, keepAfertRouteChange: boolean ) {
    this.keepAfertRouteChange = keepAfertRouteChange;
    this.alertSubject.next(new Alert(alertType, message));
  }

  getAlert() {
    return this.alertSubject.asObservable();
  }

  clear() {
    this.alertSubject.next(null);
  }
}