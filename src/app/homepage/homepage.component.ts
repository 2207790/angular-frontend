import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule, MatSlideToggleChange} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatProgressBarModule
  ],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent {
  selected: Date = new Date();

  constructor(private router: Router, private renderer: Renderer2) {}

  slide(event: MatSlideToggleChange) {
    if (event.checked) {
      this.changeBackgroundColor('lightblue');
    } else {
      this.changeBackgroundColor('antiquewhite');
    }
  }

  changeBackgroundColor(color: string) {
    this.renderer.setStyle(document.body, 'background-color', color);
  }

  navigateToSignIn() {
    this.router.navigate(['/sign-in']);
  }

  navigateToSignUp() {
    this.router.navigate(['/sign-up']);
  }
}
