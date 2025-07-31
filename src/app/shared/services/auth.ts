
import { USER_MOCK } from '../../shared/mock/user.mock';
import { Injectable, signal } from '@angular/core';
import { UserModel } from '../../../model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private users: USER_MOCK;
  private readonly KEY_LOCALSTORAGE = 'user-connect';
  userSignal = signal<UserModel | undefined>(this.loadDataLocalStorage());
constructor() {}

  login(email: string, password: string):void {
   const user = this.users.find((user)=>user.email === email && user.password === password);
   this.userSignal.set(user);
   localStorage.setItem(this.KEY_LOCALSTORAGE, JSON.stringify(user));


  }

  isConnected(): boolean {
    return this.userSignal() != undefined;
  }

  getUsers(): UserModel | undefined {
    return this.userSignal();
  }

  isAdmin(): boolean {
    return this.getUsers()!.role == 'Admin';
  }

  isClient(): boolean {
    return this.getUsers()!.role == 'Client';
  }

  logOut() {
    this.userSignal.set(undefined);
    localStorage.removeItem(this.KEY_LOCALSTORAGE);
  }

  private loadDataLocalStorage(): UserModel | undefined {
    const data = localStorage.getItem(this.KEY_LOCALSTORAGE)
    return localStorage.getItem(this.KEY_LOCALSTORAGE)=== null ? undefined : JSON.parse(data!) as UserModel;

  }

}
