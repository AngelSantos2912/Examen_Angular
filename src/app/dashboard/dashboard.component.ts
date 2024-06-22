import { Component } from '@angular/core';
import { MaterialModule } from '../angular_material/material/material.module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router : Router, private route : ActivatedRoute, private authService : AuthService){

  }


  irpregunat1(){
     this.router.navigate(["pregunta1"], {relativeTo: this.route})
  }

  irpregunta2(){
    this.router.navigate(["pregunta2"], {relativeTo: this.route})
  }

  irpregunta3(){
    this.router.navigate(["pregunta3"], {relativeTo: this.route})
  }

  irpregunta4(){
    this.router.navigate(["pregunta4"], {relativeTo: this.route})
  }

  logout(){
    this.authService.logout();
    this.router.navigate(["login"])
  }
}



