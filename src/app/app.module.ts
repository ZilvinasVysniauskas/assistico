import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'planner', loadChildren: () => import('./features/app-sprint-planner/app-sprint-planner.module').then(m => m.AppSprintPlannerModule) },
      { path: 'calendar',
       loadChildren: () => import('./features/app-calendar/app-calendar.module')
      .then(m => m.AppCalendarModule) }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
