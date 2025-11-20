import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences = [
    {
      date: '2025',
      title: 'Prácticas en WikiTic',
      description: 'Creación y gestión de páginas web en WordPress y trabajos con frameworks como Vue.js y Angular para pequeños proyectos.',
      type: 'Prácticas'
    },
    {
      date: '2024',
      title: 'Prácticas en el Antiguo Hospital Militar de Sevilla',
      description: 'Apoyo en mantenimiento de equipos y redes y soporte básico a usuarios y resolución de incidencias.',
      type: 'Prácticas'
    }
  ];
}
