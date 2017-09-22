import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { GlobalVariable } from '../globals';
import { Insert } from '../model/insert';

@Injectable()
export class InsertService {

  constructor(
    private http: Http
  ) { }

  insertCrud(insert: Insert) {
    let body = JSON.stringify({ 'mensagem': insert.mensagem });
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Token': '123456'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(GlobalVariable.BASE_INSERT, body, options)
    .map(response => response.json());
  }

}
