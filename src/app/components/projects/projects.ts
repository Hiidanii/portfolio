import { Component } from '@angular/core';
import { ProjectCard } from "../project-card/project-card";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  imports: [ProjectCard, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {
      title: 'Portfolio Angular',
      description: 'Portfolio personal desarrollado en Angular con CSS nativo y componentes modulares.',
      image: 'assets/projects/portfolio.png',
      tech: ['Angular', 'CSS', 'HTML']
    },
    {
      title: 'Gestor de Tareas',
      description: 'Aplicación web para organizar tareas diarias en local storage.',
      image: 'assets/projects/task-manager.png',
      tech: ['Angular', 'CSS', 'HTML', 'JavaScript']
    }
  ];
}
