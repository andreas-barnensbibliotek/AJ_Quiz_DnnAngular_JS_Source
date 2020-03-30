
import { Observable, combineLatest  } from 'rxjs';
import { BoktipsService } from './../../services/boktipsService/boktips.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  boktips:any =[];

  constructor(private route:ActivatedRoute,private tipService:BoktipsService ) { }

  ngOnInit() {
    combineLatest([this.route.paramMap, this.route.queryParamMap])   
    .subscribe(combined =>{
      let id = combined[0].get("id");
      let Query = combined[1].get("test")
    })

    console.log("innan listcomponent kommer hit");
    this.getboktips();
  }

  getboktips(){
    console.log("listcomponent kommer hit");
    this.tipService.getboktipslist("14").subscribe(Response => this.boktips = Response.json());
  }
}
