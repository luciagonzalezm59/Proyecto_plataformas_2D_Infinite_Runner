import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerContactoComponent } from '../banner-contacto/banner-contacto.component';
import { ListaFasesComponent } from '../lista-fases/lista-fases.component';

@Component({
  selector: 'app-documentacion',
  standalone: true,
  imports: [RouterModule, BannerContactoComponent, ListaFasesComponent],
  templateUrl: './documentacion.component.html',
  styleUrl: './documentacion.component.css'
})
export class DocumentacionComponent {

}
