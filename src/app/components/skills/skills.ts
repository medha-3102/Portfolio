import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

 skillGroups = [
  {
    title: 'Frontend Engineering',
    desc: 'Crafting scalable, responsive, and user-centric web interfaces',
    skills: ['Angular', 'HTML', 'CSS', 'TypeScript'],
    color: 'purple'
  },
  {
    title: 'Backend & System Design',
    desc: 'Building robust APIs and managing structured, data-driven architectures',
    skills: ['Java', 'Spring Boot','OracleDB', 'SQL', 'Python', 'DSA'],  
    color: 'green'
  },
  {
    title: 'AI Integration & Developer Tools',
    desc: 'Leveraging AI, APIs, and modern tools to enhance development workflows',
    skills: ['Gen AI','RAG', 'MS Office Suite', 'Jira'],
    color: 'orange'
  }
];
}