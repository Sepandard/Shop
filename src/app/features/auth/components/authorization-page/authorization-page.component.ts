import { Component, Input, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { auth } from '../../shared/class/auth.class';

@Component({
  selector: 'auth-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.scss'],
})
export class AuthorizationPageComponent extends auth implements OnInit {
  @Input() formConfig!: FormlyFieldConfig[];
  @Input() pageName!: string;
  @Input() description!: string;
  @Input() operationText!: string;
  @Input() submitBtb!: string;
  @Input() cancelBtn!: string;
  constructor() {
    super();
  }

  ngOnInit(): void {}

  onSubmit() {}
}
