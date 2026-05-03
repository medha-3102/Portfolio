import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';
import { About } from './components/about/about';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Home, About, Projects, Skills, Contact],
  template: `
    <app-navbar></app-navbar>

    <section id="hero"><app-home /></section>
    <section id="impact"><app-about /></section>
    <section id="skills"><app-skills /></section>
    <section id="projects"><app-projects /></section>
    <section id="contact"><app-contact /></section>
  `
})
export class App {}