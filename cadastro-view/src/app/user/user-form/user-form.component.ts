import { User } from './../../model/user.model';
import { UserService } from '../user.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']

})
export class UserFormComponent implements OnInit{
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private location: Location,
              private service: UserService) {
    this.form = this.fb.group({
            name: [''],
            cpf: [''],
            email: ['', Validators.required],
            phone: [''],
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.form.valid) {
      const user: User = this.form.value;
      this.service.save(user);
      this.onCancel();
    } else {
      this.form.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.location.back();
  }

  isFieldRequired(fieldName: string): boolean {
   return this.form.get(fieldName)?.hasError('required') ?? false;
  }
}
