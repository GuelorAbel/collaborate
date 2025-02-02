import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register } from 'swiper/element/bundle';
// enregistrement des éléments personnalisés swiper
register();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
