import { Component } from '@angular/core';
import { StringWidget } from 'ngx-schema-form';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-controls-slider',
  standalone: true,
  imports: [MatSliderModule, ReactiveFormsModule],
  templateUrl: './form-controls-slider.component.html',
  styleUrl: './form-controls-slider.component.scss',
})
export class FormControlsSliderComponent extends StringWidget {}
