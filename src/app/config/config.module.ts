import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemaFormModule, WidgetRegistry } from 'ngx-schema-form';
import { WidgetRegistryService } from '../services/widget-registry.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SchemaFormModule.forRoot()
  ],
  providers: [
    { provide: WidgetRegistry, useClass: WidgetRegistryService }
  ]
})
export class ConfigModule { }
