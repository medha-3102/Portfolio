import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

/* MUI IMPORTS */
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit {

  @ViewChild('typingText') typingText!: ElementRef;

  ngAfterViewInit(): void {
    new Typed(this.typingText.nativeElement, {
      strings: [
        "Medha Gupta",
        "Web Developer",
        "Full Stack Developer"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: false
    });
  }

  scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/MedhaGuptaResume-PRJ.pdf';
    link.download = 'Medha_Gupta_Resume.pdf';
    link.click();
  }
}