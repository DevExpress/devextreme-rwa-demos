import { Component, OnInit, NgModule, ViewChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxScrollViewModule,
  DxSortableModule,
  DxButtonModule,
} from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';

import { TaskType, Status, Priority } from './../../types/planing-task-list';

@Component({
  selector: 'planning-kanban',
  templateUrl: './planning-kanban.component.html',
  styleUrls: ['./planning-kanban.component.scss']
})
export class PlanningKanbanComponent implements OnInit {
  @Input() dataSource: DataSource;

  kanbanDataSource: Array<{
    status: Status,
    tasks: Array<TaskType>
  }> = [];

  statuses: Array<Status> = [];

  constructor() {
    for(const status in Status) {
      this.statuses.push(Status[status]);
    }
  }

  onListReorder = (e) => {
    const list = this.kanbanDataSource.splice(e.fromIndex, 1)[0];
    this.kanbanDataSource.splice(e.toIndex, 0, list);
  }

  getTaskByStatus = (status: Status): Array<TaskType> => this.dataSource.items().filter(item => item.status === status);

  getFormatDate = (date: Date) => `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`

  getFirstLetterName = (name: string) => name.split(' ').map(l => l[0]).join('');

  onTaskDragStart(e) {
    e.itemData = e.fromData[e.fromIndex];
  }

  onTaskDrop(e) {
    e.fromData.splice(e.fromIndex, 1);
    e.toData.splice(e.toIndex, 0, e.itemData);
  }

  ngOnInit() {
    this.dataSource.load();

    for(const status in Status) {
      this.kanbanDataSource.push({
        status: Status[status],
        tasks: this.getTaskByStatus(Status[status])
      });
    }
  }
}

@NgModule({
  imports: [
    DxScrollViewModule,
    DxSortableModule,
    DxButtonModule,

    CommonModule
  ],
  providers: [],
  exports: [PlanningKanbanComponent],
  declarations: [PlanningKanbanComponent]
})
export class PlanningKanbanModule { }
