import { Component, OnInit } from '@angular/core';
import { auth } from '../../shared/class/auth.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends auth implements OnInit {
  constructor() {
    super();
  }
  images = [
    {path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-W9TbFJWoSwCzy2GhRzyK4BTtWQ9C0y6iw&usqp=CAU'},
    {path: 'https://png.pngtree.com/background/20210711/original/pngtree-blue-abstract-background-picture-image_1159560.jpg'}
  ]
  ngOnInit(): void {
    this.initForm();
  }
  onSubmit() {}

  initForm() {
    this.fields = [
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
  }
}
