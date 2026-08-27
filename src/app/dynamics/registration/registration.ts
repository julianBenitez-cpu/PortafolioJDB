import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  private formBuilder = inject(FormBuilder)

  registerForm = this.formBuilder.group({
    name:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required,Validators.minLength(6)]],
    confirmPassword:['', [Validators.required,Validators.minLength(6)]]
  });

  get Name()
  {
    return this.registerForm.get('name');
  }

  get Email()
  {
    return this.registerForm.get('email');
  }

  get Password()
  {
    return this.registerForm.get('password')
  }

  get Passwordconfirmation()
  {
    return this.registerForm.get('confirmPassword')
  }

  userRegistration()
  {
    if (this.registerForm.valid)
    {
      alert("Formulario válido")
      console.log(this.registerForm.value);
    }
    else {
      alert("Formulario NO VALIDO")
    }
  }
}


