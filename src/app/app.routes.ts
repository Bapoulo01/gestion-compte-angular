import { Routes } from '@angular/router';
import { CompteListe } from './pages/compte-liste/compte-liste';
import { CompteDetail } from './pages/compte-detail/compte-detail';
import { Dashboard } from './pages/dashboard/dashboard';
import { NewCompte } from './pages/new-compte/new-compte';

export const routes: Routes = [
    {
        path:'comptes',
        component: CompteListe
    },
    {
        path:'comptes/:numero/details',
        component: CompteDetail
    },
    {
        path:'dashboard',
        component: Dashboard
    },
    {
        path:'new-compte',
        component: NewCompte
    },
    {
        path:'',
        redirectTo: '/comptes',
        pathMatch: 'full'
    }
];
