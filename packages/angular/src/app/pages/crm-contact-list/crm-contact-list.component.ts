import {
 Component, ViewChild, OnInit, NgModule, OnDestroy,
} from '@angular/core';
import {
  DxButtonModule,
  DxDataGridModule,
  DxDataGridComponent,
  DxDropDownButtonModule,
} from 'devextreme-angular';
import { RowClickEvent, RowPreparedEvent, ColumnCustomizeTextArg } from 'devextreme/ui/data_grid';
import {
  CardActivitiesModule,
  ContactStatusModule,
} from 'src/app/shared/components';
import { Contact, contactStatusList, ContactStatus } from 'src/app/shared/types/contact';
import { SelectionChangedEvent } from 'devextreme/ui/drop_down_button';
import { CommonModule } from '@angular/common';
import { RwaService } from 'src/app/shared/services';
import { Subscription } from 'rxjs';
import { UserPanelModule } from './user-panel/user-panel.component';

@Component({
  templateUrl: './crm-contact-list.component.html',
  styleUrls: ['./crm-contact-list.component.scss'],
  providers: [RwaService],
})
export class CrmContactListComponent implements OnInit, OnDestroy {
  @ViewChild(DxDataGridComponent, { static: true }) dataGrid: DxDataGridComponent;

  statuses = contactStatusList;

  isPanelOpen = false;

  userId: number;

  dataSource: Contact[];

  dataSubscription: Subscription = new Subscription();

  constructor(private service: RwaService) {
  }

  ngOnInit(): void {
    this.dataSubscription = this.service.getContacts().subscribe((data) => {
      this.dataSource = data;
    });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  addRow = () => {
    this.dataGrid.instance.addRow();
  };

  refresh = () => {
    this.dataGrid.instance.refresh();
  };

  rowClick(e: RowClickEvent) {
    const { data } = e;

    this.userId = data.id;
    this.isPanelOpen = true;
  }

  rowPrepared = (e: RowPreparedEvent) => {
    const { rowElement } = e;

    rowElement.classList.add('clickable-row');
  };

  filterByStatus = (e: SelectionChangedEvent) => {
    const { item: status }: { item: ContactStatus } = e;

    if (status === 'All Contacts') {
      this.dataGrid.instance.clearFilter();
    } else {
      this.dataGrid.instance.filter(['status', '=', status]);
    }
  };

  formatPhone = (number: string | number): string => String(number).replace(/(\d{3})(\d{3})(\d{4})/, '+1($1)$2-$3');

  customizePhoneCell = (cellInfo: ColumnCustomizeTextArg) => {
    const { value } = cellInfo;

    return this.formatPhone(value.toString());
  };
}

@NgModule({
  imports: [
    DxButtonModule,
    DxDataGridModule,
    DxDropDownButtonModule,

    UserPanelModule,

    CardActivitiesModule,
    ContactStatusModule,

    CommonModule,
  ],
  providers: [],
  exports: [],
  declarations: [CrmContactListComponent],
})
export class CrmContactListModule { }
