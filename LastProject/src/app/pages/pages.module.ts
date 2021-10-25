import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { RemindersComponent } from './reminders/reminders.component';
import { PocketComponent } from './pocket/pocket.component';
import { CategoryComponent } from './category/category.component';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';



@NgModule({
  declarations: [
    DashboardComponent,
    TasksComponent,
    RemindersComponent,
    PocketComponent,
    CategoryComponent,
    ArchiveComponent,
    TrashComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArchiveComponent,
    CategoryComponent,
    DashboardComponent,
    PocketComponent,
    RemindersComponent,
    TasksComponent,
    TrashComponent
  ]
})
export class PagesModule { }
