import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InsertComponent } from './insert.component';

export const routes: Routes = [
  { path: 'insert', component: InsertComponent }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    InsertComponent
  ],
  exports: [
    InsertComponent
  ]
})
export class InsertModule { }
