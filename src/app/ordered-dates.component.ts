import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { JsonPipe } from '@angular/common';
import { validateOrderedDates } from './validate-ordered-dates';

@Component({
  selector: 'ordered-dates',
  imports: [ReactiveFormsModule, FormlyModule, JsonPipe],
  template: ` <form [formGroup]="form">
    <formly-form [form]="form" [fields]="fields" [model]="person"></formly-form>
    <pre>{{ form.value | json }}</pre>
  </form>`,
  standalone: true,
})
export class OrderedDatesComponent {
  form = new FormGroup({});

  person = {
    firstname: 'Rudolf',
    lastname: 'Trugschitz',
    events: [
      {
        date: '1976-05-08',
        name: 'Birthday',
      },
      {
        date: '1983-09-03',
        name: 'School Entry',
      },
    ],
  };

  fields: FormlyFieldConfig[] = [
    {
      fieldGroup: [
        {
          key: 'firstname',
          type: 'input',
          templateOptions: { label: 'firstname' },
        },
        {
          key: 'lastname',
          type: 'input',
          templateOptions: { label: 'name', required: true },
        },
        {
          key: 'events',
          type: 'repeat',
          props: {
            label: 'Events',
          },
          validators: {
            date: validateOrderedDates,
          },
          fieldArray: {
            fieldGroupClassName: 'flex',
            fieldGroup: [
              {
                type: 'input',
                key: 'date',
                templateOptions: { label: 'Date', required: true },
              },
              {
                type: 'input',
                key: 'name',
                templateOptions: { label: 'Name', required: true },
              },
            ],
          },
        },
      ],
    },
  ];
}
