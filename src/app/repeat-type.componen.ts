import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FieldArrayType, FormlyModule } from '@ngx-formly/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'formly-repeat-section',
  standalone: true,
  imports: [NgFor, NgIf, FormlyModule, MatButtonModule],
  template: `
    <div>
      <legend *ngIf="props.label">{{ props.label }}</legend>

      <div *ngFor="let field of field.fieldGroup; let i = index" class="flex">
        <formly-field [field]="field"></formly-field>
        <div>
          <button
            mat-raised-button
            color="warn"
            type="button"
            (click)="remove(i)"
          >
            Remove
          </button>
        </div>
      </div>
      <div style="margin:30px 0;">
        <button mat-raised-button type="button" color="primary" (click)="add()">
          Add
        </button>
      </div>
    </div>
  `,
})
export class RepeatTypeComponent extends FieldArrayType {}
