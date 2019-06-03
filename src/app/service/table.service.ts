import { Injectable } from '@angular/core';
import { Tabledata } from '../model/tabledata';
import { HttpClient } from '@angular/common/http';
import { Observable , } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TableService {


  constructor(private http: HttpClient){

    
  }

   private tableData: Tabledata[] = [
       
   ];

  getdata(): Observable<Tabledata[]>{
      return this.http.get<Tabledata[]>("http://ec2-18-222-165-200.us-east-2.compute.amazonaws.com:8080/UserApp-0.0.1-SNAPSHOT/api/user");
  };

  getdataatIndex(userId:String): Observable<any>{
    let url =  "http://ec2-18-222-165-200.us-east-2.compute.amazonaws.com:8080/UserApp-0.0.1-SNAPSHOT/api/user/"+userId ;
   return this.http.get(url);
  }
  
  deletedata( userId : String) : Observable<any>{
      console.log(userId);
      let url =  "http://ec2-18-222-165-200.us-east-2.compute.amazonaws.com:8080/UserApp-0.0.1-SNAPSHOT/api/user/"+userId ;
      return  this.http.delete(url);
  }

  addData(newdata : Tabledata): Observable<any>{
    return  this.http.post("http://ec2-18-222-165-200.us-east-2.compute.amazonaws.com:8080/UserApp-0.0.1-SNAPSHOT/api/api/user/" , {
        name: newdata.name,
        age : newdata.age,
        email: newdata.email
    })} ;
  
  updateData(tabledataUpdated: Tabledata): Observable<any>{
      
     return this.http.put("http://ec2-18-222-165-200.us-east-2.compute.amazonaws.com:8080/UserApp-0.0.1-SNAPSHOT/api/user/", tabledataUpdated);
     
  }

  
}