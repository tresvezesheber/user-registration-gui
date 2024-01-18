import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Page } from '../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = environment.API_URL;

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<Page> {
    return this.httpClient.get<Page>(this.API_URL);
  }

  goToPage(page: number): Observable<Page> {
    return this.httpClient.get<Page>(`${this.API_URL}?page=${page}`);
  }
}
