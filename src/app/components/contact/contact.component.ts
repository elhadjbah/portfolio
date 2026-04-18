import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { getRuntimeEmailJsConfig } from '../../core/runtime-emailjs-config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);

  private successTimer: ReturnType<typeof setTimeout> | null = null;
  private readonly emailJsConfig = getRuntimeEmailJsConfig();

  readonly submitted = signal(false);
  readonly successVisible = signal(false);
  readonly isSending = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  canSubmit(): boolean {
    return this.form.valid && !this.isSending();
  }

  constructor() {
    this.destroyRef.onDestroy(() => {
      if (this.successTimer) clearTimeout(this.successTimer);
    });
  }

  private hasInvalidEmailJsConfig(): boolean {
    const { publicKey, serviceId, templateId } = this.emailJsConfig;
    return [publicKey, serviceId, templateId].some(
      (value) => !value || value.includes('{{') || value.includes('}}')
    );
  }

  async submit(): Promise<void> {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formValues = this.form.getRawValue();
    this.isSending.set(true);
    this.errorMessage.set(null);

    try {
      if (this.hasInvalidEmailJsConfig()) {
        throw new Error('Configuration EmailJS invalide (publicKey/serviceId/templateId).');
      }

      await emailjs.send(
        this.emailJsConfig.serviceId,
        this.emailJsConfig.templateId,
        {
          name: formValues.name,
          email: formValues.email,
          subject: formValues.subject,
          message: formValues.message,
          to_email: 'elhadjbs59@gmail.com'
        },
        {
          publicKey: this.emailJsConfig.publicKey
        }
      );

      this.form.reset();
      this.submitted.set(false);
      this.successVisible.set(true);

      if (this.successTimer) clearTimeout(this.successTimer);
      this.successTimer = setTimeout(() => this.successVisible.set(false), 4000);
    } catch (error: unknown) {
      console.error('Erreur envoi EmailJS:', error);
      this.errorMessage.set(
        "L'envoi du message a échoué. Vérifie les identifiants EmailJS (Public Key / Service / Template)."
      );
    } finally {
      this.isSending.set(false);
    }
  }

  hasError(controlName: keyof typeof this.form.controls): boolean {
    const c = this.form.controls[controlName];
    return (c.touched || this.submitted()) && c.invalid;
  }
}

