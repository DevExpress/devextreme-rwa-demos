import {
  Component, NgModule, Input, SimpleChanges, OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DxGanttModule } from 'devextreme-angular/ui/gantt';
import { DxLoadPanelModule } from 'devextreme-angular/ui/load-panel';
import { Task } from 'src/app/shared/types/task';

@Component({
  selector: 'task-list-gantt',
  templateUrl: './task-list-gantt.component.html',
  styleUrls: ['./task-list-gantt.component.scss'],
})
export class TaskListGanttComponent implements OnChanges {
  @Input() dataSource: Task[];

  isLoading = true;

  constructor(private router: Router) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isLoading = !changes.dataSource.currentValue;
  }

  navigateToDetails = () => {
    this.router.navigate(['/planning-task-details']);
  };
}

@NgModule({
  imports: [
    DxGanttModule,
    DxLoadPanelModule,

    CommonModule,
  ],
  providers: [],
  exports: [TaskListGanttComponent],
  declarations: [TaskListGanttComponent],
})
export class TaskListGanttModule { }
