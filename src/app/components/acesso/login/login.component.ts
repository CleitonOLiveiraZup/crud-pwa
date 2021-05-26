import { Component, OnInit } from '@angular/core';
import { faTruckMoving } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from './usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faTruckMoving = faTruckMoving;

   loginForm!: FormGroup;
   usuario: Usuario = new Usuario();


  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
}

}
