import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CheckboxWidget } from 'ngx-schema-form';


@Component({
  selector: 'app-form-controls-checkbox',
  standalone: true,
  imports: [
    MatCheckboxModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './form-controls-checkbox.component.html',
  styleUrl: './form-controls-checkbox.component.scss',
})
export class FormControlsCheckboxComponent extends CheckboxWidget implements OnInit {

  ngOnInit() {
    console.log(this.schema)
  }
}
