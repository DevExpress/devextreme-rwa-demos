import {
  Component, NgModule, ViewChild, EventEmitter, Output, Input, SimpleChanges, OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  DxButtonModule,
  DxDataGridComponent,
  DxDataGridModule,
  DxDropDownButtonModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxToolbarModule,
} from 'devextreme-angular';
import { RowPreparedEvent } from 'devextreme/ui/data_grid';
import { ItemClickEvent as TabsItemClickEvenet } from 'devextreme/ui/tabs';
import {
  TaskProirityModule,
  TaskStatusModule,
} from 'src/app/shared/components';
import { exportDataGrid } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';
import { taskPriorityList, taskStatusList } from 'src/app/shared/types/task';
import { Task } from 'src/app/shared/types/task';
import 'jspdf-autotable';

@Component({
  selector: 'task-list-grid',
  templateUrl: './task-list-grid.component.html',
  styleUrls: ['./task-list-grid.component.scss'],
})
export class TaskListGridComponent implements OnChanges {
  @ViewChild(DxDataGridComponent, { static: false }) component: DxDataGridComponent;

  @Input() dataSource: Task[];

  @Output() tabValueChanged: EventEmitter<any> = new EventEmitter<EventEmitter<any>>();

  @Output() addRow = () => this.component.instance.addRow();

  @Output() refresh = () => this.component.instance.refresh();

  @Output() showColumnChooser = () => this.component.instance.showColumnChooser();

  @Output() search = (text: string) => this.component.instance.searchByText(text);

  @Output() exporting = () => {
    const doc = new jsPDF();
    exportDataGrid({
      jsPDFDocument: doc,
      component: this.component.instance,
    }).then(() => {
      doc.save('Tasks.pdf');
    });
  };

  priorityList = taskPriorityList;

  statusList = taskStatusList;

  tasks: Task[];

  constructor(private router: Router) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.dataSource) {
      this.tasks = changes.dataSource.currentValue.filter((item) => !!item.status && !!item.priority);
    }
  }

  onRowPreparedGrid = (e: RowPreparedEvent<Task, number>) => {
    const { rowType, rowElement, data } = e;

    if (rowType === 'header') return;

    if (data.status === 'Completed') {
      rowElement.classList.add('completed');
    }
  };

  tabsItemClick = (e: TabsItemClickEvenet) => {
    this.tabValueChanged.emit(e);
  };

  navigateToDetails = () => {
    this.router.navigate(['/planning-task-details']);
  };
}

@NgModule({
  imports: [
    DxButtonModule,
    DxDataGridModule,
    DxDropDownButtonModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxToolbarModule,

    TaskProirityModule,
    TaskStatusModule,

    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  exports: [TaskListGridComponent],
  declarations: [TaskListGridComponent],
})
export class TaskListModule { }
