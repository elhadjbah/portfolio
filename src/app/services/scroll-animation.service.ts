import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollAnimationService {
  private readonly document = inject(DOCUMENT);
  private observer: IntersectionObserver | null = null;

  observe(selector: string): void {
    if (typeof window === 'undefined') return;
    if (typeof IntersectionObserver === 'undefined') return;

    this.observer?.disconnect();

    this.observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).classList.add('visible');
          this.observer?.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    const elements = this.document.querySelectorAll(selector);
    for (const el of elements) {
      this.observer.observe(el);
    }
  }
}
