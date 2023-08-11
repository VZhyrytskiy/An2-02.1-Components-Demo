import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  hasRole(role: 'admin' | 'user'): boolean {
    if (role === 'admin') {
      return true;
    }
    return false;
  }

}
