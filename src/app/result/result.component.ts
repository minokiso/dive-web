import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, first, map } from 'rxjs';
import { baseUrl } from '../app.config';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [NgZorroModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent {
  @Input() results: any[] = [];
  constructor(private http: HttpClient) {}

  getImage(ResultId: string): Observable<any> {
    return this.http
      .put<any>(`${baseUrl}/athlete`, {
        ResultId: ResultId.slice(1, ResultId.length),
      })
      .pipe(
        filter((res: any) => res !== null),
        map((res) => (res ? res : undefined)),
        first()
      );
  }

  ngOnInit() {
    console.log(this.results);
    this.results.forEach((r) => {
      this.getImage(r.ResultId).subscribe((res) => {
        r.image = res;
      });
    });
  }
}
