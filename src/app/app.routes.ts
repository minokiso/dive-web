import { Routes } from '@angular/router';
import { AthleteComponent } from './athlete/athlete.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ResultComponent } from './result/result.component';
import { MedalComponent } from './medal/medal.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: 'athlete', pathMatch: 'full' },
  { path: 'athlete', component: AthleteComponent },
  { path: 'athlete', component: AthleteComponent },
  { path: 'schedule', component: ScheduleComponent },
  // { path: 'result', component: ResultComponent },
  { path: 'medal', component: MedalComponent },
  { path: 'about', component: AboutComponent },
];
