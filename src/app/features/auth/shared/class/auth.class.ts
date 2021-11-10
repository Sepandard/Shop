import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { environment } from 'src/environments/environment';

export class auth {
  public projectName: string = environment.applicationTitle;
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  constructor() {}
}
