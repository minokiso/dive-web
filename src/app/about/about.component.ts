import { Component } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgZorroModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
