import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Enable production mode if the environment is set to production
if (environment.production) {
  enableProdMode();
}

// Bootstrap the application with the AppModule
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
