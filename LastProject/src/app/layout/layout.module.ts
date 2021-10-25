import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MasterContainerComponent } from './master-container/master-container.component';
import { PagesModule } from '../pages/pages.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavBarComponent,
    MasterContainerComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    MasterContainerComponent
  ]
})
export class LayoutModule { }
