
import { Compte,CompteList } from '../../../model/compte';
import USER_MOCK from '../../shared/mock/user.mock';
const COMPTE_MOCK : CompteList= [
    new Compte(1, 'C00123456',new Date().toISOString().split('T')[0], 10000, 'Epargne',USER_MOCK[0]),
    new Compte(2, 'C00123457',new Date().toISOString().split('T')[0], 5000, 'Cheque', USER_MOCK[1]),
    new Compte(3, 'C00123458',new Date().toISOString().split('T')[0], 2000, 'Epargne', USER_MOCK[2]),
    new Compte(4, 'C00123459',new Date().toISOString().split('T')[0], 15000, 'Cheque', USER_MOCK[3]),
    new Compte(5, 'C00123460',new Date().toISOString().split('T')[0], 3000, 'Epargne', USER_MOCK[0]),
    new Compte(6, 'C00123461',new Date().toISOString().split('T')[0], 8000, 'Cheque', USER_MOCK[1]),
    
]


export default COMPTE_MOCK;