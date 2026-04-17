import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { projects } from '../../data/portfolio.data';
import type { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  private readonly all = signal<Project[]>(projects);

  readonly featured = computed(() => this.all().find(p => p.featured));
  readonly others = computed(() => this.all().filter(p => !p.featured));
}

