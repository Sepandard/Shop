import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { environment } from 'src/environments/environment';
import { AuthPageConfig } from '../models/auth.page';

export abstract class auth {
  public projectName: string = environment.applicationTitle;
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};

  pageConfig!: AuthPageConfig;
  abstract onSubmit(): void;
  constructor() {}
}
