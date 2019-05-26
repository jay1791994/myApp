import { Component, OnInit } from '@angular/core';
import { TableService } from '../service/table.service';
import { Tabledata } from '../model/tabledata';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {

  tableData: Tabledata[] = [];
  constructor(private tableService: TableService, private router: Router) { }
  enableUpdate : boolean[] = [];
  showForm: boolean = false;
  dataForm = new FormGroup({
    field1: new FormControl(''),
    field2: new FormControl(''),
    field3: new FormControl('')
  });
  ngOnInit() {
    console.log("called from ")
    this.tableData = this.tableService.getdata();
    for(var i=0; i < this.tableData.length ; i++){
           this.enableUpdate[i] = false;
    }
  }
  ondeletedata( index: number){
     this.tableService.deletedata(index)
  }
  onSubmitData(){
    let tabledata = {
       "field1" : this.dataForm.get("field1").value,
       "field2" : this.dataForm.get("field2").value,
       "field3" : this.dataForm.get("field3").value,
    }
    
    this.tableService.addData(tabledata);
    this.showForm = !this.showForm;
 }

 toggleenabledarr(i){
 
  console.log("method called")
  console.log(this.enableUpdate[i])
  this.enableUpdate[i] = !this.enableUpdate[i];
  console.log(this.enableUpdate[i])
 
}

updatedata(index, f1:String , f2:String, f3:String){
  this.enableUpdate[index] = !this.enableUpdate[index];
  let tableDataupdated = {
       "field1": f1,
       "field2":f2,
       "field3":f3
  }
  this.tableService.updateData(index, tableDataupdated);

}
viewDetails(index){
  
   this.router.navigate(['viewdetails', index]);
}

}
