import { Component } from '@angular/core';
import { MaterialModule } from '../angular_material/material/material.module';

@Component({
  selector: 'app-pagina-no-existente',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pagina-no-existente.component.html',
  styleUrl: './pagina-no-existente.component.css'
})
export class PaginaNoExistenteComponent {


}
