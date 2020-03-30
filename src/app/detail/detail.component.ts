import { BoktipsService } from './../../services/boktipsService/boktips.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  boktips:any={"Boktips":[{"TipID":0,"Title":"Laddar","Review":"Laddar"}]};
  
  constructor(private route:ActivatedRoute,private router:Router, private tipService:BoktipsService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(prams =>{
      let id = prams.get('id');
      
      this.tipService.getboktipsById(id).subscribe(Response => {
        this.boktips = Response.json() 
        
      });
      
    })
  }
 
  tillbakaTillLista(){
    this.router.navigate(['/list'],{
      queryParams:{list:3}
    })
  }
}
