import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  standalone: true,
imports: [
  CommonModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
 projects = [
    {
    name: 'AskMe',
    desc: 'AI-powered chatbot that retrieves and answers queries from uploaded documents(pdfs) using RAG architecture.',
    role: 'AI Workflow Design & Backend Development',
    tech: ['Python', 'RAG', 'ChromaDB', 'Hugging Face Transformers', 'Sentence-Transformers', 'PyPdf'],
        highlights: [
      'AI-powered chatbot'
    ],
    color: 'orange',
    github: 'https://github.com/medha-3102/AskMe'
  },
  {
    
    name: 'Resource Project Tracker',
    desc: 'Full-stack application for managing employees, clients, and projects with secure authentication and real-time dashboards.',
    role: 'Full Stack Development',
    tech: ['Angular', 'Spring Boot', 'OracleDB', 'JWT', 'Material UI'],
    highlights: [
      'Labcorp Internship Project'
    ],
    color: 'purple',
    github: 'https://drive.google.com/file/d/1bl2BFBFfp1eMmoj4MMNowWr8JswM4jMC/view?usp=drivesdk'
  },

  {
    name: 'Personal Portfolio Website',
    desc: ' Designed and developed my 100% responsive portfolio website',
    role: 'Frontend Development',
    tech: ['Angular', 'Material UI', 'TypeScript', 'SCSS'],
    highlights: [
      'Deployed Website'
    ],
    color: 'green',
    github: 'https://github.com/medha-3102/Portfolio'
  },


];

openProject(url?: string) {
  if (!url) return;
  window.open(url, '_blank');
}
}