import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerContactoComponent } from '../banner-contacto/banner-contacto.component';
import { CarouselOtrosJuegosComponent } from '../carousel-otros-juegos/carousel-otros-juegos.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule, BannerContactoComponent, CarouselOtrosJuegosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
