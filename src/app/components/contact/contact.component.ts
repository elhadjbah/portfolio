import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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

  readonly submitted = signal(false);
  readonly successVisible = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  readonly canSubmit = computed(() => this.form.valid && !this.successVisible());

  constructor() {
    this.destroyRef.onDestroy(() => {
      if (this.successTimer) clearTimeout(this.successTimer);
    });
  }

  submit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = this.form.getRawValue();

    // TODO: brancher EmailJS ou une API Spring Boot pour envoyer `payload`.
    // Exemple: POST /api/contact avec { name, email, subject, message }.
    void payload;

    this.form.reset();
    this.submitted.set(false);
    this.successVisible.set(true);

    if (this.successTimer) clearTimeout(this.successTimer);
    this.successTimer = setTimeout(() => this.successVisible.set(false), 4000);
  }

  hasError(controlName: keyof typeof this.form.controls): boolean {
    const c = this.form.controls[controlName];
    return (c.touched || this.submitted()) && c.invalid;
  }
}

