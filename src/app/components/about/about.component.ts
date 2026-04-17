import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  readonly hasPhoto = signal(false);

  readonly metrics = computed(() => [
    { label: "2 ans d'XP" },
    { label: '5+ projets' },
    { label: 'Bac +5 EPSI' }
  ]);
}
