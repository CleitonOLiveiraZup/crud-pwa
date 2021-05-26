import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { faTruckMoving } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faTruckMoving = faTruckMoving;
  constructor() { }

  ngOnInit(): void {
  }

}
