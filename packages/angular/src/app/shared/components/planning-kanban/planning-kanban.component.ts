import { Component, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxScrollViewModule,
  DxSortableModule,
  DxButtonModule,
} from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import { Status, statusList } from 'src/app/shared/types/status';
import { getTasks } from 'dx-rwa-data';

@Component({
  selector: 'planning-kanban',
  templateUrl: './planning-kanban.component.html',
  styleUrls: ['./planning-kanban.component.scss']
})
export class PlanningKanbanComponent implements OnInit {
  dataSource: Array<any>;

  kanbanDataSource: Array<{
    status: Status,
    tasks: any[]
  }> = [];

  constructor() {
  }

  onListReorder = (e) => {
    const list = this.kanbanDataSource.splice(e.fromIndex, 1)[0];
    this.kanbanDataSource.splice(e.toIndex, 0, list);
  }

  getTaskByStatus = (status: Status) : Array<any> => this.dataSource.filter(item => item.status === status);

  getFirstLetterName = (name: string) => name.split(' ').map(l => l[0]).join('');

  onTaskDragStart(e) {
    e.itemData = e.fromData[e.fromIndex];
  }

  onTaskDrop(e) {
    e.fromData.splice(e.fromIndex, 1);
    e.toData.splice(e.toIndex, 0, e.itemData);
  }

  ngOnInit() {
    getTasks().then(tasks => {
      this.dataSource = tasks;
      
      for(const status of statusList) {
        this.kanbanDataSource.push({
          status: <Status>status,
          tasks: this.getTaskByStatus(<Status>status)
        });
      }
    })

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
