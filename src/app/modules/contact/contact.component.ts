import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form: FormGroup = this.fb.group({
    to_name: 'Admin',
    prenom: '',
    nom: '',
    message: '',
    email: '',
    sujet: '',
    telephone: '', 
  });
  sujetSelectionne: string = '';

  constructor(private fb: FormBuilder) {}

  async send() {
    emailjs.init('Df7CCdPP_KMI6yZn-');
    let response = await emailjs.send("service_uvle7ad", "template_8q2uwxi", {
      to_name: this.form.value.to_name,
      nom: this.form.value.nom,
      prenom: this.form.value.prenom,
      message: this.form.value.message,
      email: this.form.value.email,
      telephone: this.form.value.telephone, 
      sujet: this.form.value.sujetSelectionne,
    });

    alert('Message has been sent.');
    this.form.reset();
  }
}