import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ISchema, SchemaFormModule } from 'ngx-schema-form';
import { ConfigModule } from '../../config/config.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    SchemaFormModule,
    ConfigModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // The schema that will be used to generate a form
  mySchema: ISchema = {
    properties: {
      email: {
        type: "number",
        description: "email",
      },
      password: {
        type: "string",
        description: "Password",
      },
      rememberMe: {
        type: "boolean",
        widget: "checkbox",
        default: false,
        description: "Remember me",
        labelPosition: "before",
        align: 'center'
      },
    },
    required: ["email", "password", "rememberMe"],
  };

}
