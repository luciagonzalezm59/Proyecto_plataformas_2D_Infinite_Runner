import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IFase } from '../../interfaces/i-fase';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-fase, [app-item-fase]',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './item-fase.component.html',
  styleUrl: './item-fase.component.css'
})
export class ItemFaseComponent implements OnInit {
  
  @Input() fase!: IFase;
  constructor() { }
  ngOnInit() { }
}

