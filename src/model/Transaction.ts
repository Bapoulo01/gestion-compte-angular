import { Compte } from "./compte";
export interface Transaction {
    id: number;
    numero?: string; // ID du compte associé à la transaction
    date: string; // Date de la transaction
    montant: number; // Montant de la transaction
    type: TypeTransaction; // Type de transaction
    soldeApres?: number; // Solde du compte après la transaction
    description?: string; // Description optionnelle de la transaction
    compte:Compte
}
export type TypeTransaction = 'Dépot' | 'Retrait';
export type TransactionList = Transaction[];