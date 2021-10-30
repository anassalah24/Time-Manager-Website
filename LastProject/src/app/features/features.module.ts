import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrashTaskComponent } from './trash-task/trash-task.component';
import { TasksMainComponent } from './tasks-main/tasks-main.component';




@NgModule({
  declarations: [
    TrashTaskComponent,
    TasksMainComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[TrashTaskComponent,
    TasksMainComponent
  ]
})
export class FeaturesModule { }
