import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private httpClient: HttpClient) { }

  getMusic(): Observable<any> {
  	return this.httpClient.get('https://raw.githubusercontent.com/CGJohnson112/Mixcloud_API/master/db.json');
  }
}
