import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-descargar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './descargar.component.html',
  styleUrl: './descargar.component.css'
})
export class DescargarComponent {

  descargarAndroid(): void {
    const link = document.createElement('a');
    link.href = '../../../assets/builds/EscapeFromTheLaundry.apk';
    link.download = 'EscapeFromTheLaundry.apk';
    link.click();
  }

  descargarXbox(): void {
    const link = document.createElement('a');
    link.href = '../../../assets/builds/EscapeFromTheLaundryXbox.zip';
    link.download = 'EscapeFromTheLaundryXbox.zip';
    link.click();
  }
}
