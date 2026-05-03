import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  activeSection: string = 'hero';
  menuOpen = false;

  constructor(public theme: ThemeService) { }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = ['hero', 'impact', 'skills', 'projects', 'contact'];

    for (let id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop - 120;
        const bottom = top + el.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          this.activeSection = id;
        }
      }
    }
  }
}