import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-otros-juegos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './carousel-otros-juegos.component.html',
  styleUrl: './carousel-otros-juegos.component.css'
})
export class CarouselOtrosJuegosComponent implements OnInit {

  images = [
    { src: '../../../assets/imagenes/juego_marta.webp', alt: 'Juego de Marta' },
    { src: '../../../assets/imagenes/juego_ricardo.webp', alt: 'Juego de Ricardo' },
    { src: 'https://placehold.co/400/png?text=Imagen+3', alt: 'Image 3' },
    { src: '../../../assets/imagenes/juego_lucia.webp', alt: 'Juego de Lucía' },
    { src: '../../../assets/imagenes/juego_javier.webp', alt: 'Juego de Javier' },
  ];

  selectedIndex: number = 2;

  constructor() { }

  ngOnInit(): void { }

  getCarouselClass(index: number): string {
    if (index === this.selectedIndex) return 'selected';
    if (index === this.selectedIndex - 1) return 'prev';
    if (index === this.selectedIndex + 1) return 'next';
    if (index === this.selectedIndex - 2) return 'prevLeftSecond';
    if (index === this.selectedIndex + 2) return 'nextRightSecond';
    if (index < this.selectedIndex - 2) return 'hideLeft';
    if (index > this.selectedIndex + 2) return 'hideRight';
    return '';
  }

  moveToSelected(direction: string | number): void {
    if (direction === 'prev') {
      this.selectedIndex = (this.selectedIndex - 1 + this.images.length) % this.images.length;
    } else if (direction === 'next') {
      this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
    } else {
      this.selectedIndex = direction as number;
    }
  }

  onKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        this.moveToSelected('prev');
        break;
      case 'ArrowRight':
        this.moveToSelected('next');
        break;
      default:
        return;
    }
  }
}
