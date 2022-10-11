import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RepeatTypeComponent } from './repeat-type.componen';
import { OrderedDatesComponent } from './ordered-dates.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormlyModule.forRoot({
      types: [{ name: 'repeat', component: RepeatTypeComponent }],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        {
          name: 'order',
          message: ({ previous, current }) =>
            `${previous} is before ${current} (input field above)`,
        },
      ],
    }),
    FormlyMaterialModule,
    ReactiveFormsModule,
    MatButtonModule,
    RepeatTypeComponent,
    OrderedDatesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
