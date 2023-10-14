import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import {
  getApiList,
  getPaginationMetaData,
} from 'src/app/state/api-client/api-client.selector';
import { ApiClientSummary } from 'src/app/core/models/api-client';
import * as moment from 'moment';

import * as apiClientActions from '../../state/api-client/api-client.action';
import { MatTableDataSource } from '@angular/material/table';
import { PaginationMetadata } from 'src/app/core/models/paginated-result';
import { ActivatedRoute, Router } from '@angular/router';
import { getApiClientCount } from 'src/app/state/app-count/app-count.selector';

@Component({
  selector: 'groceteria-api-client',
  templateUrl: './api-client.component.html',
  styleUrls: ['./api-client.component.scss'],
})
export class ApiClientComponent implements OnInit, OnChanges, OnDestroy {
  public apiClients: MatTableDataSource<ApiClientSummary> =
    new MatTableDataSource<ApiClientSummary>([]);
  public paginationMetaData: PaginationMetadata = null;
  public totalItems: number;
  public isApiDataLoaded: boolean;
  private currentPage: number;
  public displayedColumns = [
    'clientName',
    'clientId',
    'clientDescription',
    'accessTokenLifetime',
    'enabled',
    'created',
    'action',
  ];

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  private subscriptions = {
    apiClietList: null,
    paginationMetadata: null,
    totalApiCount: null,
  };

  ngOnChanges(): void {
    if (!this.route.snapshot.queryParamMap.has('page')) {
      const queryParams = { ...this.route.snapshot.queryParams };
      queryParams['page'] = 1;
      this.router.navigate([], { queryParams: queryParams });
    }
  }

  ngOnInit(): void {
    if (!this.route.snapshot.queryParamMap.has('page')) {
      const queryParams = { ...this.route.snapshot.queryParams };
      queryParams['page'] = 1;
      this.router.navigate([], { queryParams: queryParams });
    }

    this.route.queryParamMap.subscribe((query) => {
      const page = +query.get('page');
      if (page)
        this.store.dispatch(new apiClientActions.GetApiClientListStart(page));
    });

    this.subscriptions.paginationMetadata = this.store
      .select(getPaginationMetaData)
      .subscribe((response) => {
        this.paginationMetaData = response;
      });

    this.subscriptions.apiClietList = this.store
      .select(getApiList)
      .subscribe((response) => {
        if (response && response.length > 0) {
          this.isApiDataLoaded = true;
        } else {
          this.isApiDataLoaded = false;
        }
        this.apiClients.data = response;
      });

    this.subscriptions.totalApiCount = this.store
      .select(getApiClientCount)
      .subscribe((response) => {
        this.totalItems = response;
      });
  }

  ngOnDestroy(): void {
    if (this.subscriptions.apiClietList) {
      this.subscriptions.apiClietList.unsubscribe();
    }
    if (this.subscriptions.paginationMetadata) {
      this.subscriptions.paginationMetadata.unsubscribe();
    }
    if (this.subscriptions.totalApiCount) {
      this.subscriptions.totalApiCount.unsubscribe();
    }
  }

  public humanReadableDate(date: Date | string) {
    if (moment.isDate(date)) {
      return moment(date).format('DD MMM YY');
    }
    const inputDate = moment(date, 'DD/MM/YYYY HH:mm:ss A');
    return moment(inputDate).format('DD MMM YY');
  }

  public apiClientFilter(input: string) {
    this.apiClients.filter = input.trim().toLowerCase();
  }

  public get dataFound() {
    return this.apiClients.filteredData.length !== 0;
  }

  public navigateToDetails(clientId: string) {
    this.router.navigate(['client', clientId]);
  }
}
