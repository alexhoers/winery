import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  email: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  login(formValues: any) {
    console.log(formValues.value);
  }

}
