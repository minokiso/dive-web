import { Component } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../app.config';

@Component({
  selector: 'app-athlete',
  standalone: true,
  imports: [NgZorroModule],
  templateUrl: './athlete.component.html',
  styleUrl: './athlete.component.scss',
})
export class AthleteComponent {
  constructor(private http: HttpClient) {}
  loading = false;
  athletes: any = [];
  getAthletes() {
    this.http.get(`${baseUrl}/athlete`).subscribe((res) => {
      this.athletes = res;
    });
  }
  ngOnInit() {
    this.getAthletes();
  }
}
