import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'groceteria-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.scss'],
})
export class PageHeadingComponent implements OnInit {
  public pageName: string;
  public pageIcon: string;

  private pageIconMap = {
    Dashboard: 'dashboard',
    Clients: 'devices',
  };

  constructor(private breadcrumb: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumb.breadcrumbs$.subscribe((page) => {
      const pageLabel = page[0]?.label as string;
      this.pageIcon = this.pageIconMap[pageLabel];
      this.pageName = pageLabel;
    });
  }
}
