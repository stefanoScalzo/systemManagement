import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventPriorityComponent } from './home/event-priority/event-priority.component';
import { SurpassedComponent } from './home/surpassed/surpassed.component';
import { EventCreatorComponent } from './home/event-creator/event-creator.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'prio', component: EventPriorityComponent},
  {path: 'surpassed', component: SurpassedComponent},
  {path: 'event', component: EventCreatorComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
