import { Routes } from '@angular/router';
import { BuscaCepComponent } from '../teste-tecnico/pages/busca-cep/busca-cep.component';
import { HelloComponent } from './hello.component';

export const routes: Routes = [
    {
        path: '',
        component: HelloComponent
    },
    { path: 'busca-cep', component: BuscaCepComponent }
];
