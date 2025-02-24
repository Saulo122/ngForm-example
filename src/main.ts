import { bootstrapApplication, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [provideClientHydration(withEventReplay())]
})
  .catch((err) => console.error(err));
