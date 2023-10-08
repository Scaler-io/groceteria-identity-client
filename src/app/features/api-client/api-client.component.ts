import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getApiList } from 'src/app/state/api-client/api-client.selector';
import { ApiClientSummary } from 'src/app/core/models/api-client';
import * as moment from 'moment';

import * as apiClientActions from '../../state/api-client/api-client.action';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'groceteria-api-client',
  templateUrl: './api-client.component.html',
  styleUrls: ['./api-client.component.scss'],
})
export class ApiClientComponent implements OnInit, OnDestroy {
  public apiClients: MatTableDataSource<ApiClientSummary> =
    new MatTableDataSource<ApiClientSummary>([]);

  public isApiDataLoaded: boolean;
  public displayedColumns = [
    'clientName',
    'clientId',
    'clientDescription',
    'accessTokenLifetime',
    'enabled',
    'created',
    'action',
  ];

  constructor(private store: Store<AppState>) {}

  private subscriptions = {
    apiClietList: null,
  };

  ngOnInit(): void {
    this.store.dispatch(new apiClientActions.GetApiClientListStart());

    this.subscriptions.apiClietList = this.store
      .select(getApiList)
      .subscribe((response) => {
        if (response.length !== 0) {
          this.isApiDataLoaded = true;
        } else {
          this.isApiDataLoaded = false;
        }
        this.apiClients.data = response;
      });
  }

  ngOnDestroy(): void {
    if (this.subscriptions.apiClietList) {
      this.subscriptions.apiClietList.unsubscribe();
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
}
