import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TableService } from '../service/table.service';
import { Tabledata } from '../model/tabledata';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {


  tableData: Tabledata[] = [];
  constructor(private tableService: TableService, private router: Router) { }
  enableUpdate: boolean[] = [];
  showForm: boolean = false;
  formError: String = null;
  dataForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required])
  });
  
  
  ngOnInit() {
    console.log("called from ")
    this.tableService.getdata().subscribe(res=>{
       this.tableData = res;
    },
    error =>{
      console.log(error);
    })
    for (var i = 0; i < this.tableData.length; i++) {
      this.enableUpdate[i] = false;
    }
  }
  ondeletedata(index: number) {
    this.tableService.deletedata(this.tableData[index].userId).subscribe(
        res=>{
          if(res){
          this.tableData.splice(index,1);
          }
        }
    );
 
  }
  onSubmitData() {
   
    if (this.dataForm.valid) {
      let tabledata = {
        "name": this.dataForm.get("name").value,
        "age": this.dataForm.get("age").value,
        "email": this.dataForm.get("email").value,
      }

     this.tableService.addData(tabledata).subscribe(res=>{
       this.showForm = !this.showForm;
       this.tableData.push(res);
       },
       error =>{
         this.formError = "Invalid data has been given"
       })
    }else{
      this.formError = "";
      if(!this.dataForm.get("name").valid && this.dataForm.get("name").touched)
      this.formError = this.formError+ `Name can not be empty`;
      if(!this.dataForm.get("name").touched)
      this.formError = this.formError +
                       `Invalid Age.`
      if(!this.dataForm.get("email").valid )
      this.formError = this.formError + 
                       `\n Invalid EmailId.`;
      if(this.dataForm.get("email").untouched)
      this.formError = this.formError +
                       `EmailId can not be empty`;

    }
  }

  toggleenabledarr(i: number) {

    console.log("method called")
    console.log(this.enableUpdate[i])
    this.enableUpdate[i] = !this.enableUpdate[i];
    console.log(this.enableUpdate[i])

  }

  updatedata(index: number, nameArg: String, ageArg: String, emailArg: String, f1: ElementRef, f2: ElementRef,f3: ElementRef ) {


      this.enableUpdate[index] = !this.enableUpdate[index];
      let tableDataupdated = {
        "name": nameArg,
        "age": +ageArg,
        "email": emailArg,
        "userId": this.tableData[index].userId
      }
    
      this.tableService.updateData(tableDataupdated).subscribe(res=>{
          this.tableData[index] = res;
        },
        error =>{
          this.formError = "Invalid data has been given"
        })
  }
  viewDetails(index: number) {

    this.router.navigate(['viewdetails', this.tableData[index].userId]);
  }

 
}
