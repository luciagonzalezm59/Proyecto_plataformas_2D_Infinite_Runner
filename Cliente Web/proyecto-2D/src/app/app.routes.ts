import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DescargarComponent } from './componentes/descargar/descargar.component';
import { PitchComponent } from './componentes/pitch/pitch.component';
import { DocumentacionComponent } from './componentes/documentacion/documentacion.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'descargar', component: DescargarComponent },
    { path: 'pitch', component: PitchComponent },
    { path: 'documentacion', component: DocumentacionComponent },
    { path: 'sobre-nosotros', component: SobreNosotrosComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '**', component: PaginaNoEncontradaComponent }
];
