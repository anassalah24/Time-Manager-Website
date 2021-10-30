import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { RemindersComponent } from './reminders/reminders.component';
import { PocketComponent } from './pocket/pocket.component';
import { CategoryComponent } from './category/category.component';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';
import { FeaturesModule } from '../features/features.module';



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
    CommonModule,FeaturesModule
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
