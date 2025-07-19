
import { Compte,CompteList } from '../../../model/compte';
const COMPTE_MOCK : CompteList= [
    new Compte(1, 'C00123456',new Date().toISOString().split('T')[0], 10000, 'Epargne', { id: 1, nom: 'Dupont', prenom: 'Jean' }),
    new Compte(2, 'C00123457',new Date().toISOString().split('T')[0], 5000, 'Cheque', { id: 2, nom: 'Martin', prenom: 'Sophie' }),
    new Compte(3, 'C00123458',new Date().toISOString().split('T')[0], 2000, 'Epargne', { id: 3, nom: 'Durand', prenom: 'Pierre' }),
    new Compte(4, 'C00123459',new Date().toISOString().split('T')[0], 15000, 'Cheque', { id: 4, nom: 'Lefebvre', prenom: 'Marie' }),
    new Compte(5, 'C00123460',new Date().toISOString().split('T')[0], 3000, 'Epargne', { id: 5, nom: 'Moreau', prenom: 'Luc' }),
    new Compte(6, 'C00123461',new Date().toISOString().split('T')[0], 8000, 'Cheque', { id: 6, nom: 'Girard', prenom: 'Claire' }),
    
]


export default COMPTE_MOCK;