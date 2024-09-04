import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { HomepageComponent } from './app/homepage/homepage.component';
import { SignInComponent } from './app/sign-in/sign-in.component';
import { SignUpComponent } from './app/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomepageComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent }
    ], withComponentInputBinding()),
    provideHttpClient(withFetch()), // Add withFetch() here
    BrowserAnimationsModule
  ]
});
