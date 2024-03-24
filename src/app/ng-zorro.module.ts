import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NgModule } from '@angular/core';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
let modules = [
  NzDrawerModule,
  NzCollapseModule,
  NzTableModule,
  NzSpinModule,
  NzCarouselModule,
  NzCardModule,
  NzProgressModule,
  NzStatisticModule,
  NzGridModule,
  NzDatePickerModule,
  NzRadioModule,
  NzInputModule,
  NzTabsModule,
  NzButtonModule,
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
  NzFormModule,
  NzIconModule,
  NzFlexModule,
  NzSpaceModule,
  NzSelectModule,
  NzDividerModule,
  NzInputNumberModule,
  NzMenuModule,
  NzListModule,
  NzAvatarModule,
  NzTimelineModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class NgZorroModule {}
