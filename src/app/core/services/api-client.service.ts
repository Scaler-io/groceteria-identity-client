import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginatedApiClientList } from '../models/api-client';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  constructor(private http: HttpClient) {}

  public getApiClientPaginatedData(): Observable<PaginatedApiClientList> {
    return this.http.get<PaginatedApiClientList>(
      `${environment.config.identityApiConfig.identityManagerApiUrl}/clients`,
      { headers: this.getHttpHeader() }
    );
  }

  private getHttpHeader() {
    return {
      'Subscription-Key': environment.config.identityApiConfig.subscriptionKey,
    };
  }
}
