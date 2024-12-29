import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerContactoComponent } from '../banner-contacto/banner-contacto.component';

@Component({
  selector: 'app-pitch',
  standalone: true,
  imports: [RouterModule, BannerContactoComponent],
  templateUrl: './pitch.component.html',
  styleUrl: './pitch.component.css'
})
export class PitchComponent {

}
