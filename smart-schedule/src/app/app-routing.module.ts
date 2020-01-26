import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventPriorityComponent } from './home/event-priority/event-priority.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'prio', component: EventPriorityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
