import { Component, OnInit } from '@angular/core';
import { auth } from '../../shared/class/auth.class';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends auth implements OnInit {
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
      pageName: 'Sign up',
      description: `Welcome to ${this.projectName}, Join Our Family and Enjoy`,
      operationText: 'I already signed up.',
      submitBtb: 'Sign up',
      cancelBtn: 'Clear',
    };
  }
}
