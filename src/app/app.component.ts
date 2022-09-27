import { Component, inject } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormBuilder } from '@angular/forms';

export type Address = {
  id: number;
  street: string;
  streetNumber: string;
  zip: string;
  city: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = inject(FormBuilder).nonNullable.group<Address>({
    id: 0,
    street: '',
    streetNumber: '',
    zip: '',
    city: '',
  });

  address: Address = {
    id: 1,
    street: 'Domgasse',
    streetNumber: '5',
    zip: '1010',
    city: 'Vienna',
  };

  fields: FormlyFieldConfig[] = [
    { key: 'id', type: 'input' },
    { key: 'street', type: 'input' },
    { key: 'streetNumber', type: 'input' },
    { key: 'zip', type: 'input' },
    { key: 'city', type: 'input' },
  ];

  handleSubmit() {
    console.log(this.form.getRawValue());
  }
}
