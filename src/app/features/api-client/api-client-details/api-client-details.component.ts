import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

import * as apiClientActions from '../../../state/api-client/api-client.action';

@Component({
  selector: 'groceteria-api-client-details',
  templateUrl: './api-client-details.component.html',
  styleUrls: ['./api-client-details.component.scss'],
})
export class ApiClientDetailsComponent implements OnInit {
  private clientId: string;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.clientId = this.route.snapshot.params['id'];
    this.store.dispatch(new apiClientActions.GetApiClientStart(this.clientId));
  }
}
