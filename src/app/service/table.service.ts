import { Injectable } from '@angular/core';
import { Tabledata } from '../model/tabledata';


@Injectable({
  providedIn: 'root'
})
export class TableService {

   private tableData: Tabledata[] = [
    {
       field1:"NAME1",
       field2:"AGE1",
       field3:"SALARY1"
    },{
      field1:"NAME2",
      field2:"AGE2",
      field3:"SALARY2"
   },{
    field1:"NAME3",
    field2:"AGE3",
    field3:"SALARY3"
     }];

  constructor() { };
  
  getdata(): Tabledata[]{
       return this.tableData;
  };

  getdataatIndex(index): Tabledata{
    return this.tableData[index];
  }
  
  deletedata(index: number){
    console.log("delete function called")
    console.log(this.tableData);
    this.tableData.splice(index, 1);
    console.log(index);
    console.log(this.tableData)
   
  }

  addData(newdata : Tabledata){
    this.tableData.push(newdata);
  }

  updateData(index, tabledataUpdated: Tabledata){
    this.tableData[index] = tabledataUpdated;
  }

  
}