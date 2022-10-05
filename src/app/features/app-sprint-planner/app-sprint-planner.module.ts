import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlannerBacklogComponent } from './components/planner-backlog/planner-backlog.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PlannerBacklogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PlannerBacklogComponent }
    ])
  ]
})
export class AppSprintPlannerModule { }
