import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { portfolioIdentity } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  private readonly document = inject(DOCUMENT);

  readonly identity = portfolioIdentity;

  scrollToContact(): void {
    const el = this.document.getElementById('contact');
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

