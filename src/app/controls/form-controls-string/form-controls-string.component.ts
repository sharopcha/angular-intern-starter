import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { StringWidget } from 'ngx-schema-form';



@Component({
  selector: 'app-form-controls-string',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-controls-string.component.html',
  styleUrl: './form-controls-string.component.scss'
})
export class FormControlsStringComponent extends StringWidget {

}
