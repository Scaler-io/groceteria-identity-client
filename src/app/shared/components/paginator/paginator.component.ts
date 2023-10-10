import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationMetadata } from 'src/app/core/models/paginated-result';

@Component({
  selector: 'groceteria-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input('paginationData') paginationModel: PaginationMetadata;
  @Input('totalItems') totalItems: number;
  public currentPage;
  public totalPages;
  public pageArrays = [];
  private remainingPages = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnChanges(): void {
    this.calculatePageButtons();
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((res) => {
      this.currentPage = +res.get('page');
    });
  }

  private calculatePageButtons(start = 1, end = 12) {
    this.pageArrays = [];
    this.totalPages =
      this.totalItems > 20
        ? Math.ceil(this.totalItems / this.paginationModel.top)
        : 1;
    if (this.totalPages < 12) {
      end = this.totalPages;
    }
    this.remainingPages = this.totalPages - end;
    for (let i = start; i <= end; i++) {
      this.pageArrays.push(i);
    }
  }

  public nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1;
      this.navigateToPage(this.currentPage);
    }
    if (this.currentPage > Math.max(...this.pageArrays)) {
      let start = 0;
      let end = 0;
      if (this.remainingPages > 12) {
        start = Math.max(...this.pageArrays) + 1;
        end = start - 1 + 12;
        this.calculatePageButtons(start, end);
      } else {
        start = Math.max(...this.pageArrays) - 6 + 1;
        end = Math.max(...this.pageArrays) + this.remainingPages;
        this.calculatePageButtons(start, end);
      }
    }
  }

  public prevPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.navigateToPage(this.currentPage);
    }
    if (this.currentPage < Math.min(...this.pageArrays)) {
      let end = 0;
      let start = 0;
      if (this.currentPage - 1 > 6) {
        end = Math.min(...this.pageArrays) - 1;
        start = end - 11;
        this.calculatePageButtons(start, end);
      } else {
        end = Math.min(...this.pageArrays) - 1;
        start = 1;
        this.calculatePageButtons(start, end);
      }
    }
  }

  public selectPage(index): void {
    if (this.currentPage !== index) {
      this.navigateToPage(index);
    }
  }

  private navigateToPage(page: number): void {
    let queryParams = { ...this.route.snapshot.queryParams };
    queryParams['page'] = page;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
    });
  }
}
