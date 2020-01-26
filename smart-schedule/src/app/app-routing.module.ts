import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventPriorityComponent } from './home/event-priority/event-priority.component';
import { SurpassedComponent } from './home/surpassed/surpassed.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'prio', component: EventPriorityComponent},
  {path: 'surpassed', component: SurpassedComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
