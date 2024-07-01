import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SchemaFormModule, StringWidget } from 'ngx-schema-form';

@Component({
  selector: 'app-form-controls-number',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form-controls-number.component.html',
  styleUrl: './form-controls-number.component.scss'
})
export class FormControlsNumberComponent extends StringWidget {

}
