import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly SESSION_KEY = 'my-app-session';

  constructor() {}

  setSessionData(key: string, value: any): void {
    localStorage.setItem(this.SESSION_KEY + '.' + key, JSON.stringify(value));
  }

  getSessionData(key: string): any {
    const data = localStorage.getItem(this.SESSION_KEY + '.' + key);
    return data ? JSON.parse(data) : null;
  }

  clearSessionData(): void {
    localStorage.removeItem(this.SESSION_KEY);
  }
}
