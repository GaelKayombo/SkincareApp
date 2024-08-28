import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkincareRoutineComponent } from './skincare-routine/skincare-routine.component';

const routes: Routes = [
  { path: '', redirectTo: '/routine', pathMatch: 'full' },
  { path: 'routine', component: SkincareRoutineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
