import { Injectable } from '@angular/core';
import { Tabledata } from '../model/tabledata';

@Injectable({
  providedIn: 'root'
})
export class Tabel2Service {
  private tableData: Tabledata[] = [
    {
       field1:"NAME12",
       field2:"AGE12",
       field3:"SALARY12"
    },{
      field1:"NAME22",
      field2:"AGE22",
      field3:"SALARY22"
   },{
    field1:"NAME32",
    field2:"AGE32",
    field3:"SALARY32"
     }];

  constructor() { };
  
  getdata(): Tabledata[]{
       console.log("is called")
       return this.tableData;
  };
}
