import { Injectable } from '@angular/core';
import {requestData} from '../static/app.constants';
import {Observable, of} from 'rxjs';
import {Data} from '../static/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
  ) { }

  get(): Observable<Data[]> {
    return of(requestData);
  }
}
