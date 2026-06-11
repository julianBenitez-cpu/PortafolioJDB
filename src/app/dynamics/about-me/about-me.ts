import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {}
