import { Compte } from './../../../model/compte';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import COMPTE_MOCK from '../../shared/mock/compte.mock';

@Component({
  selector: 'app-compte-detail',
  imports: [RouterLink],
  templateUrl: './compte-detail.html',
  styleUrl: './compte-detail.css'
})
export class CompteDetail implements OnInit {
route = inject(ActivatedRoute);
router=inject(Router);
compte=signal<Compte | undefined>(undefined);
ngOnInit(): void {
    const numero = this.route.snapshot.paramMap.get("numero");
    const compteData=COMPTE_MOCK.find(compte => compte.numero === numero);
    if (!compteData) {
        this.router.navigate(['/**']);
    } else {
      this.compte.set(compteData);
    }
}
}
