import { Pipe, PipeTransform } from '@angular/core';
import { IFase } from '../interfaces/i-fase';

@Pipe({
  name: 'filtroFases'
})
export class FiltroFasesPipe implements PipeTransform {
  
  transform(fases: IFase[], filtro: string): IFase[] {
    return fases.filter(fase => fase.nombre.toLowerCase().includes(filtro.toLowerCase()));
  }
}
