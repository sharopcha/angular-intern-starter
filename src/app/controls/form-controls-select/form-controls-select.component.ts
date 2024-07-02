import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { StringWidget } from 'ngx-schema-form';

@Component({
  selector: 'app-form-controls-select',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './form-controls-select.component.html',
  styleUrl: './form-controls-select.component.scss',
})
export class FormControlsSelectComponent extends StringWidget {

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

}
