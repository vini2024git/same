import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class userService {

    constructor(private httpclient:HttpClient) { }
  
    readonly apiUrl = 'https://localhost:7028/api/User'
  
    list: user[] | undefined;
    formData: user = {} as user;
  
    getEmployee() : Observable<user[]> { 
      return this.httpclient.get<user[]>(this.apiUrl);
  }

  postEmployees(formData: FormData): Observable<any> {
    return this.httpclient.post(this.apiUrl, formData);
  }
  deleteProducts(id:number) { 
    return this.httpclient.delete(this.apiUrl + '/' + id)
  
}
updateuserData(formData:FormData){
  return this.httpclient.put(this.apiUrl,this.formData);
}
}