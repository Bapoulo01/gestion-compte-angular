import { Routes } from '@angular/router';
import { CompteListe } from './pages/compte/compte-liste/compte-liste';
import { CompteDetail } from './pages/compte/compte-detail/compte-detail';
import { Dashboard } from './pages/compte/dashboard/dashboard';
import { NewCompte } from './pages/compte/new-compte/new-compte';
import { NewTransaction } from './pages/compte/new-transaction/new-transaction';
import { NotFoundPage } from './shared/pages/not-found-page/not-found-page';
import { Login } from './pages/security/login/login';
import { Security } from './pages/security/security';
import { CompteComponent } from './pages/compte/compte';

export const routes: Routes = [
    {
        path:'compte',
        component: CompteComponent,
        children: 
        [
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
            redirectTo: '/compte/comptes',
            pathMatch: 'full'
            },
        ]
    },
    {
        path:'security',
        component: Security,
        children:
        [
            {
                path:'login',
                component: Login
            },
        ]
    },
    {
        path:'',
        redirectTo: '/security/login',
        pathMatch: 'full'
    },
    {
        path:'**',
        component: NotFoundPage
    }
];
