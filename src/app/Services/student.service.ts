import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { student } from '../Models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpclient:HttpClient) { }

  readonly apiUrl = 'https://localhost:7028/api/Students'

  list: student[] | undefined;
  formData: student = {} as student;

  getStudents() : Observable<student[]> { 
    return this.httpclient.get<student[]>(this.apiUrl);
}

postStudentData(formData: FormData): Observable<any> {
  return this.httpclient.post(this.apiUrl, formData);
}

deleteProducts(id:number) { 
  return this.httpclient.delete(this.apiUrl + '/' + id)
}


}
