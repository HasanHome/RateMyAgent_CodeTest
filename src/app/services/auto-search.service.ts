import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AutoSearchService {

  constructor(private apiService: ApiService) {

  }
  private endpoint: string = '/autosearch/agents';

  getSearchResults<T>(queryParams): Observable<T> {
    return this.apiService.get<T>(this.endpoint, queryParams);
  }
}
