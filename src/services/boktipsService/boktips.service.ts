import { Http } from '@angular/http';
import { ApiServiceService } from './../api-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoktipsService extends ApiServiceService {
  private server:string = "https://www2.barnensbibliotek.se";
  private apiCall:string = "/Api_v3.1/boktips/typ/";
  private devkey:string = "/devkey/alf/?type=json";

  constructor(http:Http) {
    super("",http);
   }

   getboktipslist(antal:any) {
    console.log("getboktipslist kommer hit");
      let apiurl:string = this.server + this.apiCall + "ByRandom/val/" + antal + "/txtval/0"+ this.devkey;
      return this.getPosts(apiurl);
   }

   getboktipsById(id:any) {
    let apiurl= this.server + this.apiCall + "ByTipId/val/" + id + "/txtval/0"+ this.devkey;
    return this.getPosts(apiurl);
 }
 
}
