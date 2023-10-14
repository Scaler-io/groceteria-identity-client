import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, switchMap, map, catchError } from 'rxjs';
import {
  GET_API_CLIENT_COUNT,
  GetApiClientCountSuccess,
} from './app-count.action';
import { Injectable } from '@angular/core';
import { ApiClientService } from 'src/app/core/services/api-client.service';

@Injectable()
export class AppCountEffect {
  public fetchApiClientCount$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(GET_API_CLIENT_COUNT),
      switchMap(() => {
        return this.apiClientService.getTotalApiClientCount().pipe(
          map((response) => {
            console.log(response)
            console.log(response);
            return new GetApiClientCountSuccess(response);
          }),
          catchError((error) => {
            console.log(error);
            throw error;
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private apiClientService: ApiClientService
  ) {}
}
