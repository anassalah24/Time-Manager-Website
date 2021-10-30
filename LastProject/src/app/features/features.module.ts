import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrashTaskComponent } from './trash-task/trash-task.component';




@NgModule({
  declarations: [
    TrashTaskComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[TrashTaskComponent]
})
export class FeaturesModule { }
