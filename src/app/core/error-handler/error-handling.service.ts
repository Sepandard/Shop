import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ErrorHandlingService {
  constructor(private toaster: ToastrService, private router: Router) {}

  private _applicationName = environment.applicationName;
  
  public catchHttpError(error: HttpErrorResponse) {
    const { status, message } = error;

    switch (status) {
      case 401:
        this._unauthorizedError();
        break;
      case 500:
        this._internalServerError();
        break;
      case 404:
        this._notFoundError();
        break;
      case 911:
        this._userExistError(message);
        break;
      case 912:
        this._userDeleteError();
        break;
      case 913:
        this._userDeleteError();
        break;
      case 915:
        this._userNotFoundError();
        break;
    }

    return throwError(error);
  }

  private _unauthorizedError() {
    this.toaster.error('Error 401', 'Unauthorized', {
      timeOut: 4000,
    });
    this.router.navigate([`/${this._applicationName}/auth/login`]);
  }

  private _internalServerError() {
    this.toaster.error('Error 500', 'internal server error', {
      timeOut: 4000,
    });
  }

  private _notFoundError() {
    this.toaster.error('Error 404', 'Not found', {
      timeOut: 4000,
    });
    this.router.navigate([`/${this._applicationName}/not-found-page`]);
  }

  private _userExistError(message: string) {
    this.toaster.error('Error 911', message, {
      timeOut: 4000,
    });
  }

  private _passwordWrongError() {
    this.toaster.error('Error 912', 'Password is wrong', {
      timeOut: 4000,
    });
  }

  private _userDeleteError() {
    this.toaster.error('Error 913', 'This user delete', {
      timeOut: 4000,
    });
  }

  private _userNotFoundError() {
    this.toaster.error('Error 915', 'User not found', {
      timeOut: 4000,
    });
  }
}
