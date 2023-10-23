import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private fb: FormBuilder) {}

  createForm(): FormGroup {
    return this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(25)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      age: [0, [Validators.required, Validators.min(1)]],
    });
  }
}
