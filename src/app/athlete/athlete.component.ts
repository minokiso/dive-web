import { Component } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';
import { HttpClient } from '@angular/common/http';

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
    this.http.get('http://127.0.0.1:8000/athlete').subscribe((res) => {
      this.athletes = res;
    });
  }
  ngOnInit() {
    this.getAthletes();
  }
}
