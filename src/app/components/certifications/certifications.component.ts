import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { certifications } from '../../data/portfolio.data';
import type { Certification } from '../../models/portfolio.model';

@Component({
  selector: 'app-certifications',
  standalone: true,
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificationsComponent {
  readonly items = signal<Certification[]>(certifications);
  readonly hasItems = computed(() => this.items().length > 0);

  logoText(c: Certification): string {
    if (c.logo?.trim()) return c.logo.trim();
    const parts = c.issuer.trim().split(/\s+/).slice(0, 2);
    return parts.map(p => p[0]?.toUpperCase() ?? '').join('');
  }
}

