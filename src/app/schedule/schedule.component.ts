import { Component } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';
import { HttpClient } from '@angular/common/http';
import { UtcToLocalPipe } from '../utc-to-local.pipe';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-schedule',
  standalone: true,
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
  imports: [NgZorroModule, UtcToLocalPipe],
})
export class ScheduleComponent {
  constructor(
    private http: HttpClient,
    private drawerService: NzDrawerService
  ) {}
  loading = false;
  schedules: any = [];
  getKeys(): any {
    return Object.keys(this.schedules);
  }
  getSchedules() {
    this.http.get('http://127.0.0.1:8000/schedule').subscribe((res) => {
      this.schedules = this.groupByDate(res);
      console.log(this.schedules);
    });
  }

  groupByDate(array: any) {
    return array.reduce((acc: any, currentValue: any) => {
      const date = currentValue.Date;
      if (!acc[date]) {
        acc[date] = { isExpanded: true, schedules: [] };
      }
      acc[date].schedules.push(currentValue);
      return acc;
    }, {});
  }

  showDetail(detail: any) {
    this.drawerService.create({
      nzTitle: detail.name,
      nzContent: ResultComponent,
      nzContentParams: {
        results: detail.Result,
      },
      nzWidth: '700px',
    });
  }

  ngOnInit() {
    this.getSchedules();
  }
}
