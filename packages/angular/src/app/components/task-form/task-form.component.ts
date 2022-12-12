import {
  Component, NgModule, Input, OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxButtonModule,
  DxFormModule,
  DxLoadPanelModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxTextAreaModule,
  DxToolbarModule,
  DxValidatorModule,
} from 'devextreme-angular';
import {
  StatusIndicatorModule,
  FormItemDateModule,
  FormTextboxModule,
} from 'src/app/components';
import { taskPriorityList, taskStatusList } from 'src/app/types/task';
import { Task } from 'src/app/types/task';
import { ClickEvent } from 'devextreme/ui/button';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  @Input() task: Task;

  @Input() contentByScreen: { xs: number, sm: number }

  @Input() isLoading: boolean = false;

  @Input() isCreateMode: boolean = false;

  savedData: Task = null;

  isEditing = false;

  statusList = taskStatusList;

  priorityList = taskPriorityList;

  ngOnInit() {
    this.isEditing = this.isCreateMode;
  }
  handleEditClick = () => {
    this.savedData = { ...this.task }
    this.isEditing = true;
  };

  handleSaveClick = ({ validationGroup }: ClickEvent) => {
    if(!validationGroup.validate().isValid) return;
    this.savedData = null;
    this.isEditing = false;
  };

  handleCancelClick = () => {
    this.task = { ...this.savedData };
    this.isEditing = false;
  };
}

@NgModule({
  imports: [
    DxButtonModule,
    DxFormModule,
    DxLoadPanelModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxTextAreaModule,
    DxToolbarModule,
    DxValidatorModule,

    FormTextboxModule,
    StatusIndicatorModule,
    FormItemDateModule,
    CommonModule,
  ],
  providers: [],
  exports: [TaskFormComponent],
  declarations: [TaskFormComponent],
})
export class TaskFormModule { }
