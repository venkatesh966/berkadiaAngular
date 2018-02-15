import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private service:MovieService) { }

movie:Movie

  display()
    {
      this.service.getMovie().subscribe(movie=>{
        this.movie=movie;
      })
    }
  
  ngOnInit() {
    this.display();
  }

}
