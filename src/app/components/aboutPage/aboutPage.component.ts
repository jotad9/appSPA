import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'about-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './aboutPage.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent { }
