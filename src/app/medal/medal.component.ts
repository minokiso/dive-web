import { Component } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../app.config';

@Component({
  selector: 'app-medal',
  standalone: true,
  imports: [NgZorroModule],
  templateUrl: './medal.component.html',
  styleUrl: './medal.component.scss',
})
export class MedalComponent {
  constructor(private http: HttpClient) {}
  loading = false;
  medals: any = [];
  getMedals() {
    this.http.get(`${baseUrl}/medal`).subscribe((res) => {
      this.medals = res;
    });
  }
  ngOnInit() {
    this.getMedals();
  }
}
