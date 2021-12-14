import { FormlyFieldConfig } from '@ngx-formly/core';

export interface AuthPageConfig {
  formConfigs: FormlyFieldConfig[];
  pageName: string;
  description: string;
  operationText: string;
  submitBtb: string;
  cancelBtn: string;
}
