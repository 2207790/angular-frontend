import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { HomepageComponent } from "./homepage/homepage.component";
// import { SignInComponent } from './sign-in/sign-in.component';
// import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterModule, HomepageComponent, SignInComponent, SignUpComponent],
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
}
