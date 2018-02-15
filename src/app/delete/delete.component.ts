import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private service:MovieService) { }

  movie:Movie
  
    display()
      {
        this.service.getMovie().subscribe(movie=>{
          this.movie=movie;
        })
      }

      delete(id){
        this.service.deleteMovie(id).subscribe(()=>{
          this.display()
        });
        console.log("I am in delete")
      }

  ngOnInit() {

    this.display();
  }

}
