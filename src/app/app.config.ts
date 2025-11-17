import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, platformBrowser, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  // providers: [provideRouter(routes), provideHttpClient(withFetch())]
  providers: [provideRouter(routes), provideHttpClient(withFetch()), importProvidersFrom(BrowserModule), importProvidersFrom(BrowserAnimationsModule)
  //validar si se debe importar provideClientHydration
]
};