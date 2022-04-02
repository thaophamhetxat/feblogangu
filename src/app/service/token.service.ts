import {Injectable} from '@angular/core';
import {JwtResponse} from "../model/JwtResponse";

const TOKEN_KEY = 'Toke_key';
const NAME_KEY = 'Name_key';
const ROLE_KEY = 'Role_key';
const AVATAR_KEY = 'Avatar_key';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private roles: Array<string> = [];

  constructor() {
  }

  public setToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return <string>window.sessionStorage.getItem(TOKEN_KEY)
  }

  public setAvatar(avatar: string) {
    window.sessionStorage.removeItem(AVATAR_KEY);
    window.sessionStorage.setItem(AVATAR_KEY, avatar);
  }

  public getAvatar(): string {
    return <string>window.sessionStorage.getItem(AVATAR_KEY)
  }

  public setName(name: string) {
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, name);
  }

  public getName(): string {
    return <string>window.sessionStorage.getItem(NAME_KEY)
  }

  public setRoles(roles: string[]) {
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.setItem(ROLE_KEY, JSON.stringify(roles));
  }


  public getRoles(): string[] {
    this.roles = [];
    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(<string>sessionStorage.getItem(ROLE_KEY)).forEach((role: { authority: string; }) => {
        this.roles.push(role.authority)
      })
    }
    return this.roles;
  }
}
