import { Component, inject } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormBuilder } from '@angular/forms';

export type Address = {
  street: string;
  streetNumber: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = inject(FormBuilder).nonNullable.group<Address>({
    street: '',
    streetNumber: '',
  });

  address: Address = {
    street: 'Domgasse',
    streetNumber: '5',
  };

  formAddress: Address | undefined;

  fields: FormlyFieldConfig[] = [
    { key: 'street', type: 'input' },
    { key: 'streetNumber', type: 'input' },
  ];

  handleSubmit() {
    this.formAddress = this.form.getRawValue();
  }
}
