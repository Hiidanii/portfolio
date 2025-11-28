import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() project!: {
    title: string;
    description: string;
    image: string;
    tech: string[];
    link: string;
  }
}
