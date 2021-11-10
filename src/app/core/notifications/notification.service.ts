import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotificationType } from './notification.type';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private readonly toastr: ToastrService) {}

  showNotification(
    header: string,
    message: string,
    type: NotificationType,
    timeOut: number = 3000
  ) {
    switch (type) {
      case NotificationType.success: {
        this.toastr.success(header, message, {
          timeOut: timeOut,
        });
        break;
      }
      case NotificationType.error: {
        this.toastr.error(header, message, {
          timeOut: timeOut,
        });
        break;
      }
      case NotificationType.info: {
        this.toastr.info(header, message, {
          timeOut: timeOut,
        });
        break;
      }
      case NotificationType.warning: {
        this.toastr.warning(header, message, {
          timeOut: timeOut,
        });
        break;
      }
    }
  }
}
