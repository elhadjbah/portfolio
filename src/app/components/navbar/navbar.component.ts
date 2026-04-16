import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent } from 'rxjs';
import { auditTime, startWith } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { navLinks } from '../../data/portfolio.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  readonly links = navLinks;
  readonly isScrolled = signal(false);

  readonly ariaLabel = computed(() => (this.isScrolled() ? 'Navigation (scrolled)' : 'Navigation'));

  constructor() {
    const win = this.document.defaultView;
    if (!win) return;

    fromEvent(win, 'scroll')
      .pipe(
        auditTime(60),
        startWith(null),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.isScrolled.set(win.scrollY > 8);
      });
  }

  scrollTo(targetId: string): void {
    const el = this.document.getElementById(targetId);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

