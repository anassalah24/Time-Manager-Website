import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrashTaskComponent } from './trash-task/trash-task.component';
import { PocketTaskComponent } from './pocket-task/pocket-task.component';




@NgModule({
  declarations: [
    TrashTaskComponent,
    PocketTaskComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[TrashTaskComponent,PocketTaskComponent]
})
export class FeaturesModule { }
