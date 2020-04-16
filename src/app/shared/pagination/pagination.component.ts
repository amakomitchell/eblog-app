import { Component, Input, Output, EventEmitter } from '@angular/core';

type PageNumber = number;

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() page: number;
  @Input() itemsPerPage: number;
  @Input() totalItems: number;
  @Output() pageChanged = new EventEmitter<PageNumber>();

  get isFirstPage(): boolean {
    return this.page <= 1;
  }

  get isLastPage(): boolean {
    return this.page === Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get lastPage(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get previousPage(): number {
    const newPage = this.page - 1;
    return newPage !== 0 ? newPage : this.page;
  }

  get nextPage(): number {
    const newPage = this.page + 1;
    return newPage <= this.lastPage ? newPage : this.page;
  }

  navigate(disabled: boolean, page: number) {
    if (!disabled) {
      this.page = page;
      this.pageChanged.emit(page);
    }
  }

}
