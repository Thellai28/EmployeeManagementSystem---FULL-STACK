import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Added import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // Added CommonModule
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent { }