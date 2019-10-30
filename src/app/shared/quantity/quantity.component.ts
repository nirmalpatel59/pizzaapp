import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {
  isQuantityAdded = false;
  quantityForm = new FormGroup({
    quantity: new FormControl('1')
  });
  constructor() { }

  ngOnInit() {
  }

  updateQuantity(type: string): void {
    if (type && type === 'plus') {
      this.quantityForm.controls.quantity.setValue(+this.quantityForm.controls.quantity.value + 1);
    } else if (type && type === 'minus') {
      if (this.quantityForm.controls.quantity.value == 1) {
        this.isQuantityAdded = !this.isQuantityAdded;
      } else {
        this.quantityForm.controls.quantity.setValue(+this.quantityForm.controls.quantity.value - 1);
      }
    } else {
      console.log(this.quantityForm.controls);
      this.isQuantityAdded = !this.isQuantityAdded;
    }
  }
}
