import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageAddService {
  url = 'http://localhost:1337/'

  // httpOptions1 = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   })
  // };
  constructor(public httpClient : HttpClient) { }

  public addPage(form) : Observable<any>{
    return this.httpClient.post(this.url + 'api/forms',form)
  }
  public getBlog() : Observable<any>{
    return this.httpClient.get('https://stageapi.academically.com/v1/blog?page=1&limit=1')
  }
  public getBlogdes(id) : Observable<any>{
    return this.httpClient.get(`https://stageapi.academically.com/v1/blog/${id}`)
  }
}
