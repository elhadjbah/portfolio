import {Component, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  submitted = signal(false);
  success = signal(false);

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name:    ['', Validators.required],
      email:   ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit(): void {
    this.submitted.set(true);
    if (this.contactForm.invalid) return;

    // TODO: brancher EmailJS ou ton API Spring Boot
    console.log('Message envoyé :', this.contactForm.value);

    this.success.set(true);
    this.contactForm.reset();
    this.submitted.set(false);
    setTimeout(() => this.success.set(false), 4000);
  }
}
