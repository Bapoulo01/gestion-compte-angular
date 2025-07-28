import { Routes } from '@angular/router';
import { CompteListe } from './pages/compte-liste/compte-liste';
import { CompteDetail } from './pages/compte-detail/compte-detail';
import { Dashboard } from './pages/dashboard/dashboard';
import { NewCompte } from './pages/new-compte/new-compte';
import { NewTransaction } from './pages/new-transaction/new-transaction';
import { NotFoundPage } from './shared/pages/not-found-page/not-found-page';

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
        path:'new-transaction',
        component: NewTransaction
    },
    {
        path:'',
        redirectTo: '/comptes',
        pathMatch: 'full'
    },
    {
        path:'**',
        component: NotFoundPage
    }
];
