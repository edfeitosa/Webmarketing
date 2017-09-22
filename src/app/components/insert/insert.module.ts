import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InsertComponent } from './insert.component';
import { InsertService } from '../../services/insert.service';

export const routes: Routes = [
  { path: 'insert', component: InsertComponent }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  declarations: [
    InsertComponent
  ],
  exports: [
    InsertComponent
  ],
  providers: [
    InsertService
  ]
})
export class InsertModule { }
