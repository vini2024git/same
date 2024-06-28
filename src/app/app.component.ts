import { Component, OnInit } from '@angular/core';
import { StudentService } from './Services/student.service';
import { NgForm } from '@angular/forms';
import { userService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'dot';
  students : any;
  formData: any;
  selectedModals:any;
  
  

  constructor(public studentService : StudentService, public userservice:userService)  {}

  ngOnInit(): void {
    this.getuser(); 
   this.getStudents(); 
  }

  getStudents() {
    this.studentService.getStudents().subscribe
    ((result:any) => {
       this.students = result;
     })
   }
  
  senduserData(form:NgForm) { 
    if (form.valid && this.studentService.formData) {
      this.studentService.postStudentData(form.value).subscribe();
    }
 }

  

   onDelete(id:number) { 
     this.studentService.deleteProducts(id)
     this.userservice.deleteProducts(id)
    .subscribe( 
      {
       next: (res) => {
       alert("Delete Successfully")},
      error: (err) => { console.log(err);
      alert("Delete Succesfully")}
       });
   }
 
   getuser() {
     this.userservice.getEmployee().subscribe
     ((result:any) => {
       this.getuser= result;
     })
   }
   sendstudentData(form:NgForm) { 
    if (form.valid && this.userservice.formData) {
      this.userservice.postEmployees(form.value).subscribe();
    }
 }
 selectedModal(result:any){
  this.selectedModals=result;
 }
 setValues(){
  this.userservice.formData.id= this.selectedModals.id
  this.userservice.formData.name= this.selectedModals.name
  this.userservice.formData.email=this.selectedModals.email

}
}



