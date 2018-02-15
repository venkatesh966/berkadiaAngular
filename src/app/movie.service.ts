import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;

  @Injectable()
  export class MovieService {
  
    constructor(private http:Http) { }
  
    getMovie(){
      return this.http.get("http://localhost:3000/api/movies")
      .map(res => res.json());
    }
  
    addMovie(info){
      return this.http.post("http://localhost:3000/api/movies",info)
          .map(res => res.json());
    }
    deleteMovie(id){
      console.log("I am in service delete function")
      return this.http.delete("http://localhost:3000/api/movies/"+id)
          .map(res => res.json());
    }
    updateMovie(id, info){
      return this.http.put("http://localhost:3000/api/movies/"+id,info)
          .map(res => res.json());
    }
  }
    