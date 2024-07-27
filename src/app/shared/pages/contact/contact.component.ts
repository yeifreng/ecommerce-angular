import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

 formContact: FormGroup;

  constructor(private form: FormBuilder){
    this.formContact = this.form.group({
      name:['', Validators.required],
      lastName:['', Validators.required],
      phone:['', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]],
      email:['', [Validators.required, Validators.email]],
      description:['', [Validators.required, Validators.maxLength(10)]]
    })
  }

  enviar(){

    console.log(this.formContact.value)

  }

  hasErrors(controlName:string, errorType:string){
    return this.formContact.get(controlName)?.hasError(errorType) && this.formContact.get(controlName)?.touched;
  }

}
