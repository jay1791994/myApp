import { Component, OnInit, Input } from '@angular/core';
import { Tabledata } from '../model/tabledata';
import { ActivatedRoute } from '@angular/router';
import { TableService } from '../service/table.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

   id: String;
   data: Tabledata;

  constructor(private route: ActivatedRoute, private tableService:TableService) { }

  ngOnInit() {
     this.id= this.route.snapshot.paramMap.get('index');

     this.data = this.tableService.getdataatIndex(this.id);
    
     }

}
