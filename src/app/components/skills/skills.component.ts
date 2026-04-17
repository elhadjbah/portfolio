import { ChangeDetectionStrategy, Component } from '@angular/core';
import { skillCategories } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  readonly categories = skillCategories;
}

