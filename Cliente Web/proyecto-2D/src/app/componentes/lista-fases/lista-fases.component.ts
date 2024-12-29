import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IFase } from '../../interfaces/i-fase';
import { FiltroFasesPipe } from '../../pipes/filtro-fases.pipe';
import { FormsModule } from '@angular/forms';
import { ItemFaseComponent } from '../item-fase/item-fase.component';
import { CargaFaseService } from '../../servicios/carga-fase.service';

@Component({
  selector: 'app-lista-fases',
  standalone: true,
  imports: [RouterModule, CommonModule, FiltroFasesPipe, FormsModule, ItemFaseComponent],
  templateUrl: './lista-fases.component.html',
  styleUrl: './lista-fases.component.css'
})
export class ListaFasesComponent implements OnInit {
  titulo = 'Fases';
  cabeceras = {
    fases: 'Fases',
    descripcion: 'Descripción',
    fecha: 'Fecha',
    enlace: 'Documento'
  };
  filtroBusqueda = '';
  fases: IFase[] = [];
  constructor(private cargaFase: CargaFaseService) { }
  ngOnInit() {
    this.fases = this.cargaFase.getFases();
  }
}






