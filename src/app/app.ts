import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './statics/header/header';
import { Footer } from './statics/footer/footer';
import { Nav } from './statics/nav/nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto1');
}
