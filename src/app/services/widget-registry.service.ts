import { Injectable } from '@angular/core';
import { DefaultWidgetRegistry } from 'ngx-schema-form';
import { FormControlsStringComponent } from '../controls/form-controls-string/form-controls-string.component';
import { FormControlsNumberComponent } from '../controls/form-controls-number/form-controls-number.component';
import { FormControlsCheckboxComponent } from '../controls/form-controls-checkbox/form-controls-checkbox.component';

@Injectable({
  providedIn: 'root'
})
export class WidgetRegistryService extends DefaultWidgetRegistry {

  constructor() {
    super();

    this.register('string', FormControlsStringComponent);
    this.register('number', FormControlsNumberComponent);
    this.register('checkbox', FormControlsCheckboxComponent);
  }
}
