import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../model/user.interface';
import { AuthResponse } from '../model/auth-response.interface';
import * as CryptoJS from 'crypto-js';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USERS_KEY = 'app_users';
  private readonly USER_KEY = 'app_user';

  constructor(private storageService: StorageService) { }


  isAuthenticated(): boolean {
    return !!this.storageService.getToken() && !!localStorage.getItem(this.USER_KEY);
  }

  logout(): void {
    this.storageService.removeToken();
    localStorage.removeItem(this.USER_KEY);
  }

  getUser(): User | null {
    const userJson = localStorage.getItem(this.USER_KEY);
    if (!userJson) return null;
    return JSON.parse(userJson) as User;
  }

  private readUsers(): { users: User[] } {
    const usersJson = localStorage.getItem(this.USERS_KEY);
    if (!usersJson) return { users: [] };
    return JSON.parse(usersJson);
  }

  private writeUsers(data: { users: User[] }): void {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(data));
  }


  register(user: User): Observable<AuthResponse> {
    let data = this.readUsers();
    const exists = data.users.find(u => u.email === user.email);
    if (exists) {
      return throwError(() => new Error('Usuario ya registrado'));
    }

    const newUser: User = {
      id: uuidv4(),
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      password: CryptoJS.SHA256(user.password).toString(CryptoJS.enc.Hex),
      country: user.country
    };

    data.users.push(newUser);
    this.writeUsers(data);

    const response: AuthResponse = {
      token: '', 
      expiresIn: 0,
      user: newUser
    };

    return of(response);
  }

  login(credentials: Pick<User, 'email' | 'password'>): Observable<AuthResponse> {
    const { email, password } = credentials;
    let data = this.readUsers();
    const user = data.users.find(u => u.email === email);

    if (!user) {
      return throwError(() => new Error('Usuario no encontrado'));
    }

    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    if (user.password !== hashedPassword) {
      return throwError(() => new Error('Credenciales inválidas'));
    }

    const response: AuthResponse = {
      token: uuidv4(),
      expiresIn: 3600,
      user
    };
    
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));

    return of(response).pipe(
      tap(res => this.storageService.saveToken(res.token))
    );
  }
}
