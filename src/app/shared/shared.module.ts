import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuantityComponent } from './quantity/quantity.component';

@NgModule({
  declarations: [QuantityComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    QuantityComponent
  ]
})
export class SharedModule { }
