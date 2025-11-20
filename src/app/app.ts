import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Projects } from "./components/projects/projects";
import { Experience } from "./components/experience/experience";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, About, Projects, Experience, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
