import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  userForm = new FormGroup({
    name: new FormControl(''),
    mobileNumber: new FormControl(''),
    email: new FormControl(''),
    language: new FormControl(''),
    gender: new FormControl(''),
  });
}
