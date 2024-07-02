import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ISchema, SchemaFormModule } from 'ngx-schema-form';
import { ConfigModule } from '../../config/config.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, SchemaFormModule, ConfigModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // The schema that will be used to generate a form
  mySchema: ISchema = {
    properties: {
      respondentDetails: {
        type: 'object',
        description: 'Respondent Details',
        properties: {
          age: {
            type: 'number',
            description: 'Age',
            minimum: 0,
          },
          residence: {
            type: 'string',
            description: 'Residence',
          },
          email: {
            type: 'string',
            description: 'Email',
          },
        },
      },
      localServicesEvaluation: {
        type: 'object',
        description: 'Local Services Evaluation',
        properties: {
          publicTransport: {
            type: 'number',
            widget: 'slider',
            description: 'Public Transport',
            max: 5,
            min: 1,
            showTickMarks: true,
            discrete: true,
          },
          healthcareQuality: {
            type: 'number',
            widget: 'slider',
            max: 5,
            min: 1,
            showTickMarks: true,
            discrete: true,
            description: 'Healthcare Quality',
          },
          parksAndRecreation: {
            type: 'string',
            description: 'Parks and Recreation',
            widget: 'select',
            enum: ['Very Good', 'Good', 'Average', 'Poor', 'Very Poor', 'Not Applicable'],
          },
          sanitationServices: {
            type: 'string',
            description: 'Sanitation Services',
            widget: 'select',
            enum: ['Very Good', 'Good', 'Average', 'Poor', 'Very Poor', 'Not Applicable'],
          },
        },
      },
    },
  };
}
