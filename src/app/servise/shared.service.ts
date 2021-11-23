import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = 'http://127.0.0.1:8000';

  constructor(private http:HttpClient) {

   }

  getResults(vl:any){
    const httpParams = new HttpParams({
      fromObject: {
      year: vl.year,
      month: vl.month
      },
  
      });

      return this.http.get(this.APIUrl + '/promotion15' , {params: httpParams})

  }

  getList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/crm/prodList/')
  }

  deleteProd(val: any) {
    return this.http.delete(this.APIUrl + '/crm/prodDel/' + val);
  }

  addP(val:any) {
    return this.http.post(this.APIUrl + '/crm/prodAdd' , val);
  }

  editp(val:any) {
    return this.http.put(this.APIUrl + '/crm/prodUpdate' , val);
  }

}
