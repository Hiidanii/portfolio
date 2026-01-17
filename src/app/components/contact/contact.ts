import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})

export class Contact {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.contactForm.valid) {
      const { name, email, message } = this.contactForm.value as { name?: string; email?: string; message?: string };

      const subject = `Contacto desde portfolio: ${name || 'Sin nombre'}`;
      const body = [
        `Nombre: ${name || ''}`,
        `Correo: ${email || ''}`,
        '',
        message || ''
      ].join('\n');

      const mailto = `mailto:danielfabian.rando@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Abrir el cliente de correo del usuario con los campos pre-rellenados
      window.location.href = mailto;

      // resetear el formulario ligeramente después
      setTimeout(() => this.contactForm.reset(), 300);
    }
  }
}
