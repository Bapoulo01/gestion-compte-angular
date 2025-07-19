import { Component, signal } from '@angular/core';
import COMPTE_MOCK from '../../shared/mock/compte.mock';
import { CompteList } from '../../../model/compte';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-compte-liste',
  imports: [NgClass, RouterLink],
  templateUrl: './compte-liste.html',
  styleUrl: './compte-liste.css'
})
export class CompteListe {
  comptes = signal<CompteList>(COMPTE_MOCK);

}
