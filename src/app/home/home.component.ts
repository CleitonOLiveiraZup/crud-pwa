import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../components/acesso/service/auth.service';
import { faTruckMoving } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public getCapture(event:any) {
    console.log(event);
  }

  faBars = faBars;
  mostrarMenu: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

}
