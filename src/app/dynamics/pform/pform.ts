import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Data } from '../../services/data';


@Component({
  selector: 'app-pform',
  imports: [ReactiveFormsModule],
  templateUrl: './pform.html',
  styleUrl: './pform.css',
})
export class Pform {

constructor(private service:Data, private cdr:ChangeDetectorRef){}
  private formBuilder = inject(FormBuilder)

  pForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    url_github: ['', Validators.required],
    img: ['', Validators.required],
    alt_img: ['', Validators.required]   
});

get Title() {
  return this.pForm.get('title');
}

get Description() {
  return this.pForm.get('description');
}

get UrlGithub() {
  return this.pForm.get('url_github');
}

get Img() {
  return this.pForm.get('img');
}

get AltImg() {
  return this.pForm.get('alt_img');
}

projectRegistration() {
  {
    if (this.pForm.valid)
    {
      alert("Formulario válido")
      console.log(this.pForm.value);
    }
    else {
      alert("Formulario NO VALIDO")
    }
    
    this.service.postProject(this.pForm.value).subscribe( {
      next: (data) => 
        {console.log(data);
        },
      error: (error) => console.error(error),
      complete: () => {
        this.cdr.detectChanges()
      } 
    })
  }};
}

