import {Component, Input} from '@angular/core';
import {Data, Filters, TableConfig} from '../../static/interfaces';
import {FieldTypes, ItemsPerPage, tableConfig} from '../../static/app.constants';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  config = tableConfig;
  fieldTypes = FieldTypes;
  sortField = this.config[0].field;
  sortDirection = true;
  filterFields: Filters = {
    name: '',
    brandName: ''
  };
  currentPage: number = 1;
  itemsPerPage = ItemsPerPage;
  _data: Data[] = [];
  _processedData: Data[] = [];
  @Input()
  public get data() {
    return this._processedData;
  }
  public set data(value) {
    this._data = value;
    this.filterData();
  }

  onSort(field: keyof Data) {
    if (field === this.sortField) {
      this.sortDirection = !this.sortDirection;
    } else {
      this.sortField = field;
      this.sortDirection = true;
    }
    this.sortData();
  }

  sortData() {
    const field = tableConfig.find((item) => this.sortField === item.field) as TableConfig;
    const direction = this.sortDirection ? -1 : 1;
    this._processedData = this._processedData.sort((a, b) => {
      if (field.type === this.fieldTypes.Number) {
        return direction * ((b[field.field] as number) - (a[field.field] as number));
      } else {
        return direction * ((a[field.field] as string) < (b[field.field] as string) ? 1 : -1);
      }
    })
  }

  onFilter(field: keyof Data, value: Event) {
    this.filterFields[field as keyof Filters] = (value.target as HTMLInputElement).value;
    this.filterData();
  }

  filterData() {
    this._processedData = this._data.filter((item) => {
      return item.name.toLowerCase().includes(this.filterFields.name.toLowerCase()) && item.brandName.toLowerCase().includes(this.filterFields.brandName.toLowerCase())
    });
    this.sortData();
  }
}
