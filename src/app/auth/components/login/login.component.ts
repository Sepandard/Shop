import { Component, OnInit } from '@angular/core';
import { auth } from '../../shared/class/auth.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends auth implements OnInit {
  fields = [
    {
      fieldGroupClassName: 'flex-container',
      fieldGroup: [
        {
          className: 'flex-100 padding-x-5',
          key: 'UserEmail',
          type: 'input',
          templateOptions: {
            label: 'Email',
            appearance: 'outline',
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'flex-container',
      fieldGroup: [
        {
          className: 'flex-100 padding-x-5',
          key: 'PassWord',
          type: 'input',
          templateOptions: {
            type: 'password',
            label: 'Password',
            appearance: 'outline',
          },
        },
      ],
    },
  ];
  constructor() {
    super();

  }

  ngOnInit(): void {
    this.initForm();
  }
  onSubmit() {}

  initForm() {
    this.pageConfig = {
      formConfigs: this.fields,
      pageName: 'Login',
      description: `Welcome ${this.projectName}, Nice To meet you. Join Our Family`,
      operationText: 'forget your password?',
      submitBtb: 'Login Now',
      cancelBtn: 'Create My Account',
    };
  }
}
