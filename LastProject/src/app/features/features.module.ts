import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrashTaskComponent } from './trash-task/trash-task.component';
import { TasksMainComponent } from './tasks-main/tasks-main.component';
import { PocketTaskComponent } from './pocket-task/pocket-task.component';





@NgModule({
  declarations: [
    TrashTaskComponent,
    TasksMainComponent,
    PocketTaskComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    TrashTaskComponent,
    TasksMainComponent,
    PocketTaskComponent
  ]
})
export class FeaturesModule { }
