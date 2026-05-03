import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private dark = signal(true);

  constructor() {
    this.applyTheme();
  }

  isDark() {
    return this.dark();
  }

  toggleTheme() {
    this.dark.update(v => !v);
    this.applyTheme();
  }

  private applyTheme() {
    if (this.dark()) {
      document.body.classList.remove('light-theme'); // DARK
    } else {
      document.body.classList.add('light-theme'); // LIGHT
    }
  }
}