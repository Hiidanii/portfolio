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
      title: 'Gestor de Tareas',
      description: 'Aplicación web para organizar tareas diarias en local storage.',
      image: '/projects/task-manager.png',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      link: 'https://github.com/Hiidanii/gestorTareas'
    },
    {
      title: 'Cronómetro',
      description: 'Cronómetro simple con funciones de inicio, pausa y reinicio.',
      image: '/projects/stopwatch.png',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      link: 'https://github.com/Hiidanii/cronometro'
    }
  ];
}
