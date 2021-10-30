import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrashTaskComponent } from './trash-task/trash-task.component';
import { TasksMainComponent } from './tasks-main/tasks-main.component';
import { PocketTaskComponent } from './pocket-task/pocket-task.component';
import { TaskArchiveComponent } from './task-archive/task-archive.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    TrashTaskComponent,
    TasksMainComponent,
    PocketTaskComponent,
    TaskArchiveComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    TrashTaskComponent,
    TasksMainComponent,
    PocketTaskComponent,
    TaskArchiveComponent,
    SearchComponent
  ]
})
export class FeaturesModule { }
