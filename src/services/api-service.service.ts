import { AllreadyExistError } from './../assets/AllreadyExistError';
import { NotFoundError } from './../assets/NotFoundError';
import { AppError } from '../assets/appErrors';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
 
  constructor(private url:string, private http:Http) { 
  }

  getPosts(url?){    
    console.log("kommer hit " + url);
    if(url) this.url =url;
      return this.http.get(this.url)
    .pipe(      
      retry(4),// använd retry för att göra om reqesten x gånger
      catchError(this.HandleThisClassErrors)
    );
  } 

  createPost(postobj){    
    return this.http.post(this.url,JSON.stringify(postobj))
    .pipe(
      catchError(this.HandleThisClassErrors)
    );   
  }

  deletePost(id){    
    return this.http.delete(this.url +'/'+ id)
    .pipe(     
      catchError(this.HandleThisClassErrors)
    );
  }

  uppdateraPost(itm){
    console.log("uppdaterar" + itm.id)
    return this.http.post(this.url,JSON.stringify(itm))
    .pipe(
      catchError(this.HandleThisClassErrors)
    );   
  }

  
  private HandleThisClassErrors(error: Response){
    
    if(error.status === 400){
      return Observable.throw(new AllreadyExistError(error.json()));
    }

    if(error.status === 404){
      return Observable.throw(new NotFoundError());
    }
    
    return Observable.throw(new AppError(error));
  }
}
