import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

export const validateOrderedDates = (formArray: FormArray) => {
  const dates = formArray.controls.map((ac: AbstractControl) => {
    if (ac instanceof FormGroup) {
      if ('date' in ac.controls) {
        const date = ac.controls['date'].value;
        if (date) {
          return date;
        }
      }
    }
  });

  if (dates.length < 2) {
    return;
  }

  let previous = dates[0];
  for (let i = 1; i < dates.length; i++) {
    const current = dates[i];
    if (current < previous) {
      const formGroup = formArray.controls[i];
      if (!(formGroup instanceof FormGroup)) {
        throw new Error(`group at index ${i} is not a FormGroup`);
      }
      formGroup.controls['date'].setErrors({
        order: { current, previous },
      });
      return;
    }
  }
};
