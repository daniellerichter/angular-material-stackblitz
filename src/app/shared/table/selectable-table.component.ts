import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  template: '',
})
export abstract class SelectableTableComponent<T> implements OnInit {
  selection = new SelectionModel<T>(true, []);

  ngOnInit(): void {
  }

  get selectedItems(): T[] {
    return this.selection.selected;
  }

  selectRow(row: T, event?: Event | MatCheckboxChange): void {
    if (event) {
      this.selection.toggle(row);
    }
  }

  isAnySelected(): boolean {
    return this.selection.hasValue();
  }
}
