import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private service:MovieService,private _route:ActivatedRoute) { }

  id : number;
  movie : Movie;
  movies:Movie;

  //display()
 // {
   // this.service.getMovie().subscribe(movie=>{
   //   this.movie=movie;
   // })
 // }

  ngOnInit() : void {
    this.id=this._route.snapshot.params["id"];
    console.log(this.id)
    //this.movies=this.service.getMovie().find(c => c.movieid == this.id);

  
  }

}
