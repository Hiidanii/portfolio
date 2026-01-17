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
      title: 'Mood Calendar',
      description: 'Aplicación web para registrar y visualizar el estado de ánimo diario a lo largo del año, organizada por meses, usando solo frontend y localStorage.',
      image: '/projects/mood-calendar.png',
      tech: ['Angular', 'TypeScript', 'LocalStorage'],
      link: 'https://github.com/Hiidanii/mood-calendar'
    }
  ];
}
