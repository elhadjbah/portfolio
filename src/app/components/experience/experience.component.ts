import { ChangeDetectionStrategy, Component } from '@angular/core';
import { experiences } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  readonly items = experiences;
}

