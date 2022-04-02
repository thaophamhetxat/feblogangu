import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtResponse} from "../model/JwtResponse";
import {SingInFrom} from "../model/SingInFrom";
import {SingUpFrom} from "../model/SignUpFrom";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_SIGNUP = environment.API_LOCAL + 'auth/signup';
  private API_SIGNIN = environment.API_LOCAL + 'auth/signin';
  private API_CHANGE_AVATAR = environment.API_LOCAL + 'change-avatar';

  constructor(private http: HttpClient) {
  }

  signIn(signIn: SingInFrom): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.API_SIGNIN, signIn);
  }

  signUp(signUp: SingUpFrom): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.API_SIGNUP, signUp);
  }

  changeAvatar(info: any): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.API_CHANGE_AVATAR, info);
  }
}
