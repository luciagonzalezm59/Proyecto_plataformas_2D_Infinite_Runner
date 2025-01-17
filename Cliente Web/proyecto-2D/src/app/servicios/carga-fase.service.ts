import { Injectable } from '@angular/core';
import { IFase } from '../interfaces/i-fase';

@Injectable({
  providedIn: 'root'
})
export class CargaFaseService {

  constructor() { }

  getFases(): IFase[] {
    return [
      {
        id: 1,
        nombre: 'Idea',
        descripcion: 'De todas las ideas que se nos puedan pasar por la cabeza, debemos elegir la que sea viable, la que se adapte a los recursos que tenemos.',
        fecha: new Date('2024-12-06'),
        enlace: 'https://goldenrod-index-ca2.notion.site/Documentaci-n-de-las-fases-17e5a0b5b42980cc915afb2fdf74848a?pvs=4'
      },
      {
        id: 2,
        nombre: 'Pitch',
        descripcion: 'Documento que condensa toda la información sobre el proyecto. Nos permite comunicar al equipo y a inversores nuestra idea, transmitiendo confianza sobre el proyecto.',
        fecha: new Date('2024-12-09'),
        enlace: 'https://docs.google.com/presentation/d/10wxacifCihO0nX7Pd0uXu-B0C2R1y6YsAGi49DJHKiM/edit?usp=sharing'
      },
      {
        id: 3,
        nombre: 'Preproducción',
        descripcion: 'Fase de prototipado de ideas que pusimos en el pitch. Nos ayuda a despejar incógnitas, a eliminar riesgos, a definir los procesos de trabajo (pipelines) y a estimar la producción con más detalle.',
        fecha: new Date('2024-12-12'),
        enlace: 'https://goldenrod-index-ca2.notion.site/Documentaci-n-de-las-fases-17e5a0b5b42980cc915afb2fdf74848a?pvs=4'
      },
      {
        id: 4,
        nombre: 'Producción',
        descripcion: 'En esta fase creamos el juego en sí, creando los niveles, los gráficos, las mecánicas, las voces, etc. Es la etapa que más tiempo lleva, por lo que definimos entregas periódicas para ver si vamos bien de tiempo y presupuesto.',
        fecha: new Date('2024-12-17'),
        enlace: 'https://goldenrod-index-ca2.notion.site/Documentaci-n-de-las-fases-17e5a0b5b42980cc915afb2fdf74848a?pvs=4'
      },
      {
        id: 5,
        nombre: 'Alfa',
        descripcion: 'Tenemos una versión jugable, pero el arte, voces, objetos,... no están en su versión final, sino que se pueden sustituir por placeholders (elementos vacíos que ocupan el lugar de otro).',
        fecha: new Date('2025-01-02'),
        enlace: 'https://goldenrod-index-ca2.notion.site/Documentaci-n-de-las-fases-17e5a0b5b42980cc915afb2fdf74848a?pvs=4'
      },
      {
        id: 6,
        nombre: 'Beta',
        descripcion: 'Versión final del juego a falta de resolver bugs. Se hacen los test por parte de QA, los TCR (los requisitos técnicos mínimos de las plataformas) y el rating de edad.',
        fecha: new Date('2025-01-08'),
        enlace: 'https://goldenrod-index-ca2.notion.site/Documentaci-n-de-las-fases-17e5a0b5b42980cc915afb2fdf74848a?pvs=4'
      },
      {
        id: 7,
        nombre: 'Gold',
        descripcion: 'El lanzamiento de la versión final. En esta etapa hacemos notas de prensa, mantenemos tareas de marketing y lanzamos el tráiler.',
        fecha: new Date('2025-01-13'),
        enlace: 'https://goldenrod-index-ca2.notion.site/Documentaci-n-de-las-fases-17e5a0b5b42980cc915afb2fdf74848a?pvs=4'
      },
    ];
  }
}
