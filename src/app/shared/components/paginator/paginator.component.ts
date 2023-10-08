import { Component, Input, OnInit } from '@angular/core';
import { PaginationMetadata } from 'src/app/core/models/paginated-result';

@Component({
  selector: 'groceteria-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input('paginationData') paginationModel: PaginationMetadata;

  constructor() {}

  ngOnInit(): void {}
}
